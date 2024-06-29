// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ecommerce {
    struct Product {
        uint id;
        string name;
        string description;
        uint price;
        address payable seller;
        bool purchased;
    }

    mapping(uint => Product) public products;
    uint public productCount;
    mapping(address => bool) public admins;
    mapping(address => uint[]) public sellerProducts;

    constructor() {
        admins[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admins can perform this action");
        _;
    }

    function addProduct(string memory _name, string memory _description, uint _price) public onlyAdmin {
        require(_price > 0, "Price must be greater than zero");
        productCount++;
        products[productCount] = Product(productCount, _name, _description, _price, payable(msg.sender), false);
    }

    function buyProduct(uint _id) public payable {
        Product memory _product = products[_id];
        require(_product.id > 0 && _product.id <= productCount, "Product does not exist");
        require(msg.value >= _product.price, "Not enough Ether to buy this product");
        require(!_product.purchased, "Product has already been purchased");
        require(_product.seller != msg.sender, "Seller cannot buy their own product");

        _product.seller.transfer(msg.value);
        _product.purchased = true;
        products[_id] = _product;
    }

    function addAdmin(address _admin) public onlyAdmin {
        admins[_admin] = true;
    }

    function removeAdmin(address _admin) public onlyAdmin {
        require(msg.sender != _admin, "Admin cannot remove self");
        admins[_admin] = false;
    }

    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        for (uint i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }

    function getProductsBySeller(address _seller) public view returns (uint[] memory) {
        return sellerProducts[_seller];
    }

    receive() external payable {}
    fallback() external payable {}
}

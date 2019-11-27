var chai = require("chai");
var expect = chai.expect;
var cart = require("../shopping-cart.js");
var productList = require("../products.js");

describe("Step 1: Add products to the shopping cart.", ()=>{
    var shoppingCart = new cart.Cart();
    describe("Given", () =>{
        it("An Empty shopping cart.", () =>{
            expect(shoppingCart.isEmpty()).to.equal(true);
        });
        it("And a product, Dove Soap with a unit price of 39.99", () =>{
            expect(productList.doveSoap.unitPrice).to.equal(39.99);});
    });

    describe("When", () =>{
        it("The user adds 5 Dove Soaps to the shopping cart", () =>{
            var result = shoppingCart.addItem("doveSoap", 5);
            expect(result).to.equal(true);
        });
    });

    describe("Then", () =>{
        it("The shopping cart should contain 5 Dove Soaps each with a unit price of 39.99", () =>{
            expect(shoppingCart.getTotalItemsById("doveSoap")).to.equal(5);
        });

        it("And the shopping cart’s total price should equal 199.95", () =>{
            expect(shoppingCart.getCartTotal()).to.equal(199.95);
        });
    });

});

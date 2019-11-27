var chai = require("chai");
var expect = chai.expect;
var cart = require("../shopping-cart.js");
var productList = require("../products.js");
var taxList = require("../tax-list.js");

describe("Step 3: Calculate the tax of the shopping cart with multiple items", ()=>{
    var shoppingCart = new cart.Cart();
    describe("Given", () =>{
        it("An Empty shopping cart.", () =>{
            expect(shoppingCart.isEmpty()).to.equal(true);
        });
        it("And a product, Dove Soap with a unit price of 39.99", () =>{
            expect(productList.doveSoap.unitPrice).to.equal(39.99);});
        it("And another product, Axe Deo with a unit price of 99.99", () =>{
            expect(productList.axeDeo.unitPrice).to.equal(99.99);});
        it("And a sales tax rate of 12.5%", () =>{
            expect(taxList["salesTax"]).to.equal(12.5);});
    });

    describe("When", () =>{
        it("The user adds 2 Dove Soaps to the shopping cart", () =>{
            var result = shoppingCart.addItem("doveSoap", 2);
            expect(result).to.equal(true);
        });
        it("The user adds 2 Axe Deos to the shopping cart", () =>{
            var result = shoppingCart.addItem("axeDeo", 2);
            expect(result).to.equal(true);
        });
    });

    describe("Then", () =>{
        it("The shopping cart should contain 2 Dove Soaps each with a unit price of 39.99", () =>{
            expect(shoppingCart.getTotalItemsById("doveSoap")).to.equal(2);
        });
        it("And shopping cart should contain 2 AxeDeo each with a unit price of 99.99", () =>{
            expect(shoppingCart.getTotalItemsById("axeDeo")).to.equal(2);
        });

        it("And the total sales tax amount for the shopping cart should equal 35.00", () =>{
            expect(shoppingCart.getTotalSalesTax()).to.equal(35.00);
        });

        it("And the shopping cart’s total price should equal 314.96", () =>{
            expect(shoppingCart.getBill()).to.equal(314.96);
        });
    });

});

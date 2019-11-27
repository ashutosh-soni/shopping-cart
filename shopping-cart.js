var productList = require("./products.js");
var taxList = require("./tax-list.js");


class Cart {
    constructor(){
        this.items = {}; // items is the object.
    }

    // isEmpty retrun true if items has no item in it, otherwise false.
    isEmpty(){
        var length = Object.entries(this.items).length;
        var result =  length ? false:true;
        return result;
    }

    /**
       addItem: This function return true if it add item in cart otherwise
       false.It take 2 args [itemId, quntity].
       *quntity*: Integer.
       *itemId*: String
       */
    addItem(itemId, quntity){
        if (itemId in this.items){
            this.items[itemId].quntity += quntity;
            return true;
        }else if (itemId in productList){
            var itemInfo = productList[itemId];
            this.items[itemId] = {unitPrice: itemInfo.unitPrice,
                                  quntity: quntity};
            return  true;
        } else{
            return false;
        }

    };

    // getTotalitems: This function retrun total number of items in cart.
    getTotalItems(){
        var itemList = Object.entries(this.items);
        var result = itemList.reduce((total,itemInfo) =>{
            var [k, v] = itemInfo;
            return total += v.quntity;
        },0);
    }

    /**
       getTotalitemsbyId: This function retrun total number of quntity for
       given itemId in cart.
       *itemId*: String
    */
    getTotalItemsById(itemId){
        return this.items[itemId].quntity;
    }

    /**
       getCartTotal: This function return grandTotal of price of cart without
       including service tax.
       */
    getCartTotal(){
        var itemList =  Object.entries(this.items);
        var result = itemList.reduce((total, itemInfo)=>{
            var [k,v] = itemInfo;
            return total += v.unitPrice * v.quntity;
        },0);

        return parseFloat(result.toFixed(2));
    }

    // getTotalsalestax: This function calculate the total sales tax on cart.
    getTotalSalesTax(){
        var cartTotal = this.getCartTotal();
        var salesTax = taxList.salesTax;
        var calculatedTax = Math.round((salesTax/100) * cartTotal);
        return parseFloat(calculatedTax.toFixed(2));
    }

    // getBil: This function return the total amount including sales tax.
    getBill(){
        var grandTotal = this.getCartTotal() + this.getTotalSalesTax();
        return grandTotal;
    }

};





module.exports = {Cart};

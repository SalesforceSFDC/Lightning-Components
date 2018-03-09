/*
First we get the array of expenses from the expenses attribute. 
Then we add the new expense “record” to it. 
Then we update (set) the expenses attribute with the changed array.
*/

({
    createExpense: function(component, expense) {
        var theExpenses = component.get("v.expenses");
 
        // Copy the expense to a new object
        var newExpense = JSON.parse(JSON.stringify(expense));
 
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
    }
})

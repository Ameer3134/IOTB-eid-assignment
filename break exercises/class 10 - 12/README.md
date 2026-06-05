# CLASS 10


## Theory

###  Question 1 

**let:** is a Java Script variables that has a block scope and can be reassigned. let is hoisted but not initialized

**const:** const is a Java Script variable that can't be reassigned. Example; const name = 'Awwal'
name can't be assigned to other variables again.
 const is also hoisted but not initialized.

const only locks the binding and not the value itself. So this helps it not to prevent mutuation. Objects and Arrays are stored by reference, so their contents can still change.

**var** is a function scope and it's outdated in java scripts nowadays , although it can be reassigned but it's absolutely outdated.

### Question 2

**Temporal Dead Zone**

The TDZ is the period between when a let or const variable is hoisted and when it is actually initialized in the code.
**Example:**
function getDiscount(price) {
  console.log(discount);  // this particular line is too early and it will log out error
  let discount = price * 0.1;
  return price - discount;
}


## PRODUCT THINKING

 **Display Value:** 
        let should be use, because it changes every time user presses a key.

**operator:**
        let should be used, because it updates when the user selects a new operator.

**previous operand** 
        let should be used also, because it get replaced after each operation.



    var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'Mary';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}
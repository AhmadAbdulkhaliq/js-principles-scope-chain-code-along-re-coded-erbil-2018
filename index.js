var customerName = 'bob'
const leastFavoriteCustomer = 'sour fred'

function upperCaseCustomerName() {
 customerName = customerName.toUpperCase();
  return customerName;
}

function changeLeastFavoriteCustomer(){
 const leastFavoriteCustomer = 'sour fred'
}


function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar'
    favoriteCustomer = 'not bar'
}

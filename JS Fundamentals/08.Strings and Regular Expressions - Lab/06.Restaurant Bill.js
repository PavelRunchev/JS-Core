function restaurantBill(array){
    let products = array.filter((el ,index) => index % 2 === 0 ).join(", ");
    let bills = array.filter((el, index) => index % 2 !== 0).map(Number).reduce((a,b) => a + b);
    return`You purchased ${products} for a total sum of ${bills}`;
}

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));
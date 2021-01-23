function kilometerToMeter(kilometer) {
    return kilometer*1000
 }
 
 kilometerToMeter(60);
 
 
 
 function budgetCalculator(watch,mobile,laptop) {
    return (watch*50) + (mobile*100) + (laptop*500)
 }
 
 budgetCalculator(5,10,2);
 
 
 function hotelCost(days) {
    if(days <= 10){
       return days*100;
    }else if(days > 10 && days <= 20){
       return 10*100 + (days-10)*80
    }else if(days > 20){
       return 10*100 + 10*80 + (days-20)*50
    }
 }
 
 hotelCost(25);
 
 
  
 
 function megaFriend(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
 }
 
 let arr = ["Adnan", "Shishir", "Ratan", "Kashem"];
 
 console.log(megaFriend(arr));
 function kilometerToMeter(kilometer) {
    return kilometer*1000
 }
 
 kilometerToMeter(60);
 
 
 
 function budgetCalculator(watch,mobile,laptop) {
    return (watch*50) + (mobile*100) + (laptop*500)
 }
 
 budgetCalculator(5,10,2);
 
 
 function hotelCost(days) {
    if(days <= 10){
       return days*100;
    }else if(days > 10 && days <= 20){
       return 10*100 + (days-10)*80
    }else if(days > 20){
       return 10*100 + 10*80 + (days-20)*50
    }
 }
 
 hotelCost(25);
 
 
  
 
 function megaFriend(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
 }
 
 let arr = ["Adnan", "Shishir", "Ratan", "Kashem"];
 
 console.log(megaFriend(arr));
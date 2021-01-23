
/*** NO.01 function of kilometer to meter convert start ***/

var kilometer = parseFloat(prompt("Enter your kilometer: "));

function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}

/*** NO.01  function of kilometer to meter convert start ***/





 /*** NO.02  function of budgetCalculator start ***/ 

var watchNumber = Number(prompt("Enter your watchNumber: "));
var phoneNumber = Number(prompt("Enter your phoneNumber: "));
var labTopNumber = Number(prompt("Enter your labTopNumber: "));
   
function budgetCalculator(watchNumber, phoneNumber,labTopNumber){
    var watchPrice = 50;
    var phonePrice = 100;
    var labTopPrice = 500;
    
   var  totalWatchPrice;
   if ( totalWatchPrice = watchNumber*watchPrice){
      var inTotalWatchPrice = totalWatchPrice;
   }

   var  totalPhonePrice;
   if ( totalPhonePrice = phoneNumber*phonePrice){
       var inTotalPhonePrice = totalPhonePrice;
    }
     
    var  totalLabTopPrice;
   if ( totalLabTopPrice = labTopNumber*labTopPrice){
        var inTotalLabTopPrice = totalLabTopPrice;
    }
    
    var totalBudget =   inTotalWatchPrice+inTotalPhonePrice+inTotalLabTopPrice;
    return totalBudget;
}


   /*** NO.02  function of budgetCalculator end ***/ 
     





/***NO.03  function of hotelCost start ***/ 

var days = prompt("Enter your staying days : ")

 function hotelCost(days){
    var totalCost = 0;
    if (days <= 10){
        totalCost = days * 100;
     }
     else if(days <= 20){
         var firstTimeStay = 10 * 100;
         var after10Days = days-10;
         var secondTimeStay= after10Days * 80;
         cost= firstTimeStay + secondTimeStay;
     }
     else{
         var firstTimeStay = 10 * 100;
         var secondTimeStay= 10 * 80;
         var after10Days = days-20;
         var lastTimeStay= after10Days * 50;
         totalCost = firstTimeStay + secondTimeStay + lastTimeStay;
     }
    return totalCost;    
 }     

  /***NO.03  function of hotelCost end ***/ 





/***NO.04  function of megaFriend start***/ 

 function megaFriend(myFriendArrayList){
    var names = 0;
    var longerNameFriend;
    
    for (var i = 0; i < myFriendArrayList.length; i++) {

      if (myFriendArrayList[i].length > names) {         
        var names = myFriendArrayList[i].length;
        longerNameFriend = myFriendArrayList[i];
      }
    }
    return longerNameFriend;
    
 } 
 
 /***NO.04  function of megaFriend end ***/ 
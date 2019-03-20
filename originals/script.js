//make sure the HTML file is fully loaded before we run our jQuery code.
$(document).ready(function() {
// -------------- Coffee Shop Costs
/*
#input1 -- cups of coffee per day
#input2 -- price for a cup of store bought coffee
#input3 -- price per lb for your favorite coffee
#input4 -- cost of coffee machine
#input5 -- cost of a box kerig pods
#input6 -- number of pods per box
*/
//

  // attach click listener to the submit button.

 $("#submit1").click(function() {
    //when clicked, create a variable holding the value of the input text box.
    console.log(typeof $("#input1").val());
    // function call  written into a variable and return results in the html
    var yrCafecost = cafeCostyr($("#input2").val(), $("#input1").val());
   $("#results1").html(yrCafecost);

  });

 //-----------------Home Brewed

 $("#submit2").click(function() {
    //when clicked, create a variable holding the value of the input text box.
    console.log(typeof $("#input1").val());
    // function call  written into a variable and return results in the html
    var yrHomecost= homeCostyr($("#input3").val(), $("#input1").val());
   $("#results2").html(yrHomecost);

  });

 //------------------------- kerig refillable Brewed Below

   $("#submit3").click(function() {
    //when clicked, create a variable holding the value of the input text box.
    console.log(typeof $("#input1").val());
    // function call  written into a variable and return results in the html
    var yrKerigrcost= kerigrCostyr($("#input4").val(), $("#input1").val());
   $("#results3").html(yrKerigrcost);

  });

  //---  Kerig Coffee Machine bought pods Below

$("#submit4").click(function() {
    //when clicked, create a variable holding the value of the input text box.
    console.log(typeof $("#input1").val());
    // function call  written into a variable and return results in the html
    var yrKerigrcost= kerigpCostyr($("#input5").val(), $("#input6").val());
   $("#results4").html(yrKerigrcost);

  });



});











//--------------------------

function cafeCostyr(numCups, price) {

var dayCups = parseInt($("#input1").val());
var costPrcup = parseFloat($("#input2").val());
var storeBought;
var totcafe = 50*5*dayCups*costPrcup;

storeBought = `Based on ${dayCups} cup(s) of coffee each day at a cost of $ ${costPrcup}  per cup, you spend $ ${totcafe}  each year for buying coffee from a coffee shop.`;

  return  storeBought
}

//-----------------------------

function homeCostyr(price, numCups) {

var dayCups = parseInt($("#input1").val());
var pricePerlb = parseFloat($("#input3").val());
var homeBrewed;
var pressOrfilter = 20;
// based on recommended 14g of coffee per 8oz of water
var lbspertyr = dayCups*14*50*5/454;
var lbsCoffeeyr = Math.ceil(lbspertyr );

var numb =  pressOrfilter + pricePerlb*lbsCoffeeyr;
var totHcafe = numb.toFixed(2);

homeBrewed = `Based on ${dayCups} cup(s) of coffee each day at a cost of $ ${pricePerlb} per pound for coffee, you spend $ ${totHcafe}  each year if you made the coffee yourself.`;

  return  homeBrewed
}
//---------------  using refillable kerig filter and machine below

function kerigrCostyr(numCups, machineCost) {

var dayCups = parseInt($("#input1").val());
var pricePerlb = parseFloat($("#input3").val());
var costOfmachine = parseFloat($("#input4").val());
var kerigrBrewed;
var supplies = 15+10+10; // descaling=15,charcoal filter=10, reusable filter =10

// calculations based on prior cost of coffee and using 18g of coffee per refillable pod

var lbspertyr = dayCups*18*50*5/454;
var lbsCoffeeyr = Math.ceil(lbspertyr );

var lbsCoffeeyr = Math.ceil(lbspertyr );

var numb = costOfmachine + supplies + pricePerlb*lbsCoffeeyr;
var totKrcafe = numb.toFixed(2);

kerigrBrewed = `Based on ${dayCups} cup(s) of coffee each day at a
cost of $ ${pricePerlb} per pound for coffee, you spend $ ${totKrcafe}
 each year if you made the coffee w refillable kerig.`;

  return  kerigrBrewed
}
//---------------  using  kerig bought pods and machine below


function kerigpCostyr(numCups, machineCost) {

var dayCups = parseInt($("#input1").val());
var costOfmachine = parseFloat($("#input4").val());
var pricePerbox = parseFloat($("#input5").val());
var podsPerbox = parseInt($("#input6").val());
var kerigPodbrewed;
var supplies = 15+10; // descaling=15,charcoal filter=10, NO reusable filter

// calculations based on prior cost of coffee and using 18g of coffee per refillable pod
var pricePerpod = pricePerbox/podsPerbox;
// calculations  50 week year and 5 working days a week
var tCostofPods = dayCups*pricePerpod*50*5;

var numb =  costOfmachine + supplies + tCostofPods;
var totKPcafe = numb.toFixed(2);

kerigPodbrewed = `Based on ${dayCups} cup(s) of coffee each day at a cost of $ ${pricePerbox} per box of ${podsPerbox}  pods , you spend $ ${totKPcafe}  each year using Kerig and bought PODs.`;

  return  kerigPodbrewed
}

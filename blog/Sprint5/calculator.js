//An array to store inputs for later
//string the array to store current input and display it
//Function to update the display by change the the array and make it into a string

//Function to delete all it will just reset the array
//Function to go back one, it will just pop the last item off the array
//Function to eval the array and out put the total
//going to need event listeners for when a button is clicked
$(document).ready(function(){
    //Stores the inputs from user to calculate later
   var inputs=[""];
   //String to store current input string
   var totalString;
  //Operators array for validation without .
   var operators1 = ["+","-","/","*"];
  //operators array for validation with .
   var operators2 = ["."];
   //Numbers array for validation
   var nums=[0,1,2,3,4,5,6,7,8,9];
   //Adds value to inputs array and checks validation
   function getValue(input){
      if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
     console.log("Duplicate '.'");
   }
       //Validation so it doesn't start with an operator
     else if(inputs.length===1 && operators1.includes(input)===false){
       inputs.push(input);
     }
     //If last character was not an operator add operator to the array
   else if(operators1.includes(inputs[inputs.length-1])===false){
     inputs.push(input);
   }
     else if(nums.includes(Number(input))){
       inputs.push(input);
     }
     update();
   }
   function update(){
     totalString= inputs.join("");
     $("#steps").html(totalString);
     console.log(inputs);
   }
   function getTotal(){
     totalString = inputs.join("");
     $("#steps").html(eval(totalString));
   }
   
   $("a").on("click",function(){
     if(this.id==="deleteAll"){
       inputs = [""];
       update();
     }
     else if(this.id==="backOne"){
       inputs.pop();
       update();
     }
     else if(this.id==="total"){
       getTotal();
     }
     else{
       
       //error1
       if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
         getValue(this.id);
       }
       else {
         getValue(this.id);
       }
     } 
   });
   
 });
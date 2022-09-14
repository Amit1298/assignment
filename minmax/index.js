// 1.) Find the absolute index difference between min and maximum value of an array without using any function in javascript?
// Ex: Input: [5, 2, 7, 9, 13, 3, 8]
//       Output: 3

let Input= [5, 2, 7, 9, 13, 3, 8];
    let max=Input[0];
function maxnumber(){
    for(let i=0;i<Input.length;i++){
        if(Input[i]>max){
            max=Input[i]
        }
    }
    
}
maxnumber();

let min=Input[0];
function minnumber(){
    for(let i=0;i<Input.length;i++){
        if(Input[i]<min){
            min=Input[i]
        }
    }
    
}
minnumber();
console.log(Input.indexOf(max)-Input.indexOf(min));
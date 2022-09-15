// 1.) Find the absolute index difference between min and maximum value of an array without using any function in javascript?
// Ex: Input: [5, 2, 7, 9, 13, 3, 8]
//       Output: 3

let Input= [5, 2, 7, 9, 13, 3, 8];
    let max=Input[0];
    let index1;
function maxnumber(){
    for(let i=0;i<Input.length;i++){
        if(Input[i]>max){
            max=Input[i]
        }
        if(Input[i]==max){
            index1=i
        }
    }
    
}
maxnumber();
console.log(index1);

let min=Input[0];
let index2;
function minnumber(){
    for(let i=0;i<Input.length;i++){
        if(Input[i]<min){
            min=Input[i]
        }
        if(Input[i]==min){
            index2=i
        }
    }
    
}
minnumber();
console.log(index2);
// console.log(Input.indexOf(max)-Input.indexOf(min));
console.log(index1-index2);
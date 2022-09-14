// 2.) Create the below series without using a nested loop or recursion.
// [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]
let count=0;
for(let i=1;i<=5;){
    if(count<i){
        console.log(i);
        count++;
    }else{
        count=0;
        i++;
    }
}
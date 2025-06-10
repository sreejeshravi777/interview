function getSubset(arr,result){
    let indexArray=[]
    arr?.map((i,index)=>{
        if(arr.includes(result-i) && i !== result-i){
            indexArray.push(index)
        }
    })
return(indexArray?.length<=0?'No result':indexArray)
}
const nums = [20, 7, 11, 15];
const target = 2;
console.log(getSubset(nums,target))
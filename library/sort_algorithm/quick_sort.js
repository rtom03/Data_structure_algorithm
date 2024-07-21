function pivot(array,start,end){
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = array[j]
        arr[j] = temp;
    }
    start = 0;
    end = array.length -1;
    let pivot = array[start];
    let swapidx = start
   for(let i = start + 1; i < array.length; i++){
        if(pivot > array[i]){
            swapidx++;
            swap(array, swapidx,i)
        }
   }
   swap(array,start,swapidx)
   console.log(array)
   return array;
}
const src = pivot([13,73,43,33,53,23,63])
console.log(src)

function quickSort(file){

}
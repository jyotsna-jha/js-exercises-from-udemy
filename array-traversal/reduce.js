/*

.reduce() method is used to transform an array into single value

.reduce(): arguments as Callback function with initial value
-Reducer: Accumulator,current element parameters
-Accumulator holds previous result, accumulates value


use .reduce() to sum array values
transform array into single value/object
find max/min value in array

.reduce() does not change original array
flexible but complex, test reducer function carefully

initialize accumulator to prevent errors
Be cautious with data types(number,strings,objects)
*/

// Using reduce to sum up all elements in an array
const numbers2=[1,2,3,4,5,6]

const sum_all=numbers2.reduce(function(acc,currrent){
    return acc + currrent

},0)

console.log(sum_all)


// Using reduce to find the maximum in an array

const maxNum=numbers2.reduce(function(acc,current){
if(current>acc){
    return current
}else {
    return acc
}

},0)
console.log(maxNum)

// Using reduce to count the frequency of elements in an array
const fruits_fav=['Apple','Banana','Apple']
const fruits_count=fruits_fav.reduce(function(acc,current){
if(acc[current]){
    acc[current]+=1
}else{
    acc[current]=1

}
return acc
},{})

console.log(fruits_count)


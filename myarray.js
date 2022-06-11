
const pushFront = (myArray, newValue)=> {
    myArray.unshift(newValue)
    console.log(myArray)
}

const popFront = (myArray) => {
    myArray.shift(myArray)
    console.log(myArray)
}

const insertAt_1 = (myArray, val, position) => {
    if(position < 0) return;
    if(position > myArray.length) return;

    for (let i=myArray.length; i>position-1; i--){
        if (i < 0) break;

        if (i > position){
            console.log(`shifting array[${i-1}]`)
            myArray[i] = myArray[i-1]
            console.log(myArray)
        }
        else{
            console.log(`inserting ${val} at ${i}`)
            myArray[i] = val
        }
    }
    console.log(myArray)
}

myArray = [1, 2, 3]
newValue = 5
pushFront(myArray, newValue)

popFront(myArray)

insertAt_1(myArray, 9, 3)


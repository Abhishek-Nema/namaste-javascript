function a(){
    b()
    function b(){
        console.log(`myNum1 is ${myNum1}`)
        console.log(`myNum2 is ${myNum2}`)
    }   
}

let myNum1 = 100
let myNum2 = 110
a()


// Visual representation: https://app.eraser.io/workspace/aVuc0pIPZWx9xEDaMdjG

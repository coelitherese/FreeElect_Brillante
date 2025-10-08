console.log("FOR LOOP");

    for (i=0 ; i<5 ; i++){
        console.log("Looping value is " + i);
    }

    /*
        1. initialization "1=0"
        2. console.log
        3. increment "i++"
        4. check condition "i<5"
    */

console.log("\n")

    for (x=0 ; x<=10 ; x=x+2){
        console.log("Looping Value: " + x);
    }

console.log("\n")

    for (y=0 ; y<=50 ; y=y+5){
        console.log("Looping Value: " + y);
    }

console.log("\n")

    for (z=30 ; z>=0 ; z=z-3){
        console.log("Looping Value: " + z);
    }

console.log("\n")

    for (a=3 ; a<=31 ; a=a+4){
        console.log("Looping Value: " + a);
    }

console.log("\n")

    for (b=0 ; b<=30 ; b=(b*2)+2){
        console.log("Looping Value: " + b)
    }

console.log("\n")

    for (c=6 ; c<=186 ; c=(c*2)+6){
        console.log("Looping Value: " + c)
    }

console.log("\n")

    for (d=7 ; d<=193 ; d=(d*2)-1){
    console.log("Looping Value: " + d);
    }

/*
FOR LOOP - Used when you know exactly how many times you want to execute a statement or a block of code.

for (initialization; condition;increment){
code block to be executed


Parts of For LOOP
    1. Initialization - executed once before the loop
    2. Condition - Cehceked befoere each iteration
    3. 
    4. 

ex:

for (let i = 1 ; <= 5 ; i++){
    console.log('Count: ' + i)
}

common use cases
    iterating through arrays
    generating sequence of numbers
    performing repetitive calculations
    accessing list or object elements

tips and bset practices
    condition will eventually be false
    keep loop simple
    avoid modifying loop counters
    use break to exit

FOR LOOP FLOWCHART
    start -> initialization -> condition check -> code execution

*/
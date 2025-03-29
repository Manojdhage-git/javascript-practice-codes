// A function that does or both
// 1 - take one or more fucntions as arguments 
// 2 - returns the functions

function multiGreet(func,count){
    for(let i=1; i<=count;i++){
        func();
    }
}
    let greet = function(){console.log("Hello")}

    multiGreet(greet,5);

    // or we can directly give fucntion on calling

    function multiGreet(func,count){
    for(let i=1; i<=count;i++){
        func();
    }
}


multiGreet(function(){console.log("Good Morning")},5);
console.log("hello,this is pradyumna kumar");

// typeof operator

console.log(typeof("5"-1));
console.log(typeof(NaN));
console.log(typeof(10n));
console.log(typeof(1));
console.log(typeof(undefined));
console.log(typeof("a"));
console.log(typeof(true));

// Implicit type coercion

console.log("1"+1);
console.log("5"-1);
console.log("hello"-1);

// Explicit type coercion

a = Number("5");
console.log(typeof a);
a = BigInt("5");
console.log(typeof a);
a = String("5");
console.log(typeof a);
// a = NaN("5");
// console.log(typeof a);
// a = undefined("5");
// console.log(typeof a);


//! Ways to interact with Js



// alert("Your device have a virus");

// var ans=confirm("Do you want to share your location?")

// console.log(ans);

// var name=prompt("Enter your name");
// console.log(name);

var age=prompt("Enter your age");
a=Number(age);
document.write(age);
document.write(typeof age);







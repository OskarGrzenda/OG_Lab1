let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Decimal" + decimal + "hex" + hex + "binary" + binary + "octal" + octal);

//String
let color: string = "blue";
console.log("String color is " + color);
color = 'red';
console.log("String color is " + color);

//Array
let list: Array<Number> = [1, 2, 3];
console.log(list[0]);

//any
let notSure: any = 4;
notSure = "Maybe a string instead";
console.log("value is a string: " + notSure + ".");
notSure = false;
console.log("Now Value is a boolean: " + notSure + ".");

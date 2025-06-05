//3
const message: string = "hello world";
console.log(message);

//4
//perfect
const sum = (x, y) => {
    return x + y;
}

sum(5, 10); //15

//need to validate
const sum2 = (x, y) => {
    //validate: x, y are numbers ???
    return x + y;
}

sum('name', 20);

//5
const nameTS1 = 'Eric';

console.log('length = ', nameTS1.length)

console.log('upPerCasse = ', nameTS1.toUpperCase())

//6
let names2: string[] = ['Eric', 'Hỏi Dân IT', 'Typescript']
// array chỉ bao gồm string
names2.push("25") //error ?

console.log(">>> check name 2: ", names2)

let name3: string[] = ['string1', 'string 2', 'string 3'];
name3.at(1);
console.log(name3.at(1));
//7
let count: string = "Hoi Dan IT";

console.log(">>> check count 0 = ", count)

let test = ['eric', 'hoi danit', 'typescirpt', 96];

test.push(25);

console.log(test);

//8
let test: number = 9.6;

const a1: number = 123;

let a2: number = 1.2;

test = 999;

console.log(a2);

//9
let name2: string = ` và "Hỏi Dân IT"`;
let name3 = `Eric ${name2}`; //template strings js

console.log(">>> check name = ", name3)
// Eric và "Hỏi Dân IT"

let name4: string = `"Hello"`;
let name5: string = `${name4} World!`;

console.log(name5);
//10
let status1: boolean = false;
let check1: boolean = true;
let pro: boolean = Boolean(status1);

console.log(">>> check pro: ", pro)

//11
let pro1: {
    name: string,
    age: number
} = {
    name: "Eric", //string
    age: 25 //age
}

const info: object = { firstName: "Yen", lastName: "Nguyen", age: 37 }


console.log(pro1.name);
//12
let test: (number | string)[] = ['hoi dan it', 69];

test.push('hoi dan it');

test.push(25);

console.log(">>> check array: ", test)

//13
let skills: (string | number)[] = ['Hỏi Dân IT', 25];
skills.push('coding');
skills.push(69);

//tuple: dataType/size/order
let skills2: [string, number] = ['Hỏi Dân IT', 25];

let skills3: [boolean, string, number?];

skills3 = [true, 'Eric'];

//14
enum API_STATUS {
    SUCCESS,
    FULFILLED = "FULFILLED asfdasfasf",
    REJECTED = "FULFILLED" //PROMISE
}

//constant
//java

let a1 = API_STATUS.SUCCESS;
let a2 = API_STATUS.FULFILLED;

//frontend : syntax
console.log(">>> a1 = ", a1, " a2 = ", a2)

//15
let namev2: any = 'Eric'; // any everywhere

namev2 = true;

console.log(namev2);

//16
const sum = (a: number, b: number): number => {
    return a + b;
}

const handleLogs = (message: string): void => {
    console.log(">>> message: ", 'ppp')

}

handleLogs('asdf');

const sum2 = (a: number, b: number) => {
    // console.log(">>> message: ", a + b);
    return a + b;
}

console.log('asdfasdf', sum2(3, 6));

//17
function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}

function runInfinity(): void {
    // while (true) {
    //     // console.log("running...")
    // }
}

// handleException("just a test error");

let a = handleException("just a test error");
console.log(">> check a= ", a)

//18
function addNumberOrString(a: number | string | object | boolean, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//loi khi running
//loi khi compile
console.log(">>> check: ", addNumberOrString(true, "Hoi dan it"))

//19
type ericType = number | string | object | boolean;
function addNumberOrString(a: ericType, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//loi khi running
//loi khi compile
console.log(">>> check: ", addNumberOrString('eric ', "Hoi dan it"))

//20
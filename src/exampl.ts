//export let name: string = "suracharyulu";
//export let message: string = "";

//message = name;

//arrays
// let numbers: number[] = [10,20,30];
//let names: string[] = ["john", "nidu"];
//export let message: string[] = names;

//tuple
//let stract: [number,string] = [10, "john"];

//export let message: [number, string] = stract;

//enum
//export const colors={
//    Red:"red"
//} as const ;


//export let message = colors.Red;

//object
//let person: {
//    name: string;
//    id: number;
//};
//person = {
//    name:"john",
//    id:101
//};

//export let message = person.id;


//type
//type User = {
//        name: string;
//        id: number;
//};
//let u : User = {
//    name: "johns",
//    id: 102
//};
//export let message = u.name;

let numbers: number[] = [1, 2, 3, 4];
let oneNumber: number = 0;
numbers.forEach((num) => {
    console.log(num);
    oneNumber=numbers[3];
});
export let message: number = oneNumber;
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import  './index2'
let a:string='zzh';

function sum(firstNum: number,lastNum: number) :number{
    console.log('CALL')
    return firstNum + lastNum
}
console.log(a)
// console.log( sum(1,2))
sum(1,1)
let num:number=0;
num=sum(1,2)


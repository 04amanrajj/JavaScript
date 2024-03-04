function tom(x,y){
    return x+y;
}
function jerry(z){
    return z*5
}
function bob(z){
    return z/10
}
function oggy(z){
    return z+10
}
let step1=tom(10,10)
let step2=jerry(step1)
let step3=bob(step2)
let step4=oggy(step3)
console.log(step4)
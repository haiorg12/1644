function hello(){
    console.log('Hello VanThang')
}
//gọi  hàm
hello()


//khai báo kiểu mới (ES6)
//const and var, let đều được

const welcome =()=> {
    console.log('Welcome to Vinh phuc')
}
welcome()


// cách 2 có return


function getCurrentYear(){
    return 2023;
}
console.log('We are living in ' + getCurrentYear())




function getTotal(a,b){
    console.log('Total: ' + (a+b))
}
getTotal(10,20)

//day du het
function sayHi(name){
    return 'Hi ' + name + ". How are you today"
}

console.log(sayHi('Thang'))
let user={
    name:"sai",
    age:21,
    gender:"F"
}
function greet(a){
    let s=""
    if (a.gender=="M"){
        s="Mr"
    }
    else{
        s="Mrs"
    }
    console.log("Hi "+s+" "+a.name+","+" your age is "+a.age)
}
greet(user)
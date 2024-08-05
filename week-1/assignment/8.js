let user={
    name:"sai",
    age:1,
    gender:"F"
}
function greet(a){
    let s=""
    let v=" "
    if (a.gender=="M"){
        s="Mr"
    }
    else{
        s="Mrs"
    }
    if (a.age>=18){
        v="you can vote"
    }
    else{
        v="you can't vote"
    }
    console.log("Hi "+s+" "+a.name+","+" your age is "+a.age+" and "+v)
}
greet(user)
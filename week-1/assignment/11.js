let users=[{
    name:"sai",
    age:20,
    gender:"M"
},{
    name:"venkat",
    age:19,
    gender:"F"
}]

function age(a){
    for(let i=0;i<a.length;i++){
        if(a[i].age>18 && a[i].gender=="M"){
            console.log(a[i])
        }
    }
}
age(users)
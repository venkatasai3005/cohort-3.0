let users=[{
    name:"sai",
    age:20
},{
    name:"venkat",
    age:19
}]

function age(a){
    for(let i=0;i<a.length;i++){
        if(a[i].age>18){
            console.log(a[i])
        }
    }
}
age(users)
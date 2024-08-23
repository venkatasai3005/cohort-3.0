function p(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}
function hi(){
    console.log("hi");
 
}
p(5000).then(hi);
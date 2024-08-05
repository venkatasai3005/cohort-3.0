function even(a){
    let ne =[];
    total=a.length
    for (let i=0;i<total;i++){
        if (a[i]%2==0){
            ne.push(a[i])
        }
    }
    return ne
}

console.log(even([1,2,3,4]))
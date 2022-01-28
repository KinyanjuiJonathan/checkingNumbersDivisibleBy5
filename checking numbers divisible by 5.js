
const newarray=[]
for(var i=1; i<=100; i++){
    newarray.push(i)
}


function toFilter(num){
    for(i=1;i<=100;i++){
        if(num%5==0){
            return num
        }
    }
}
let filtered = newarray.filter(toFilter)

function toAdd(a,b){
    return (a+b)
}

console.log(filtered.reduce(toAdd))

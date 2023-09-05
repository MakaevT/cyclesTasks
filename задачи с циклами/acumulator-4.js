const arr = ['rasul','ibragym','daud','mansur','halid','magomed','ali']
let acum = []
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        acum.push(arr[i])
    }
}
console.log(acum);
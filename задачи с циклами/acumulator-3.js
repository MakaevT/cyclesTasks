const arr = ['java script','python','c++','c#','java','pascal','swift','kotlin','rust','go']
let acum = []
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        acum.push(arr[i])
    }

}
console.log(acum);

function people(names, letter){
    let res = []
    for(let i = 0; i < names.length; i++){
        if(names[i][0] == letter){
            res.push(names[i])
        }
    }
    return res
}
console.log(people(['Magomed','Shamil','Daud','Alvi','Abdul Malik'],'A'));
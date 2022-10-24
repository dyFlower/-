// function solution(id_pw, db) {
//     for(let i = 0; i < db.length; i++){
//         if(id_pw[0] === db[i][0]){
//             if(id_pw[1] == db[i][1]){
//                 return 'login'
//             }else{
//                 return 'wrong pw'
//             }
//         }
//     }
//     return 'fail';
// }
function solution (id_pw, db) {
    let result ='';
    db.map(data => {
        let checkedId = id_pw[0] === data[0]
        let checkedPw = id_pw[1] === data[1]
        // console.log(checkedId && checkedPw)
        // console.log(checkedId && !checkedPw)
        
        console.log(!checkedId)
          console.log('---')
        console.log(!checkedId && !checkedPw)
      

        if(checkedId && checkedPw) {
            result = 'login';
       } 
        else if (checkedId && !checkedPw) {
            result = 'wrong pw'
       }
        else if(!checkedId && !checkedPw){
            result = 'fail'
        }
    })

    return result
}
let n = 5

for(let i = n; i > 0; i--){
    let res = '';
    for(let j = 0; j <= n; j++){
        if(j>=i){
            res = res + '* '
        }else{
            res = res + '  '
        }
    }
    console.log(res);
}



/*
    *
   **
  ***
 ****
*****
*/
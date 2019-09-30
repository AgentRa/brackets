module.exports = function check(str, bracketsConfig) {
    let configLeft = [], configRight = [];
    for ( let i=0; i<bracketsConfig.length; i++) {
        configLeft[i] = bracketsConfig[i][0];
        configRight[i] = bracketsConfig[i][1];
    }

    let arrBracket = str.split('');

    for ( let i=0; i<arrBracket.length; i++) {
         for (let k=0; k<configLeft.length; k++){
            if ( arrBracket[i] === configLeft[k] && arrBracket[i+1] === configRight[k]) {
                arrBracket[i] = '0';
                arrBracket[i+1] = '0';
                i=0;
            }
            else
                if (arrBracket[i] === configLeft[k] && arrBracket[i+1] === '0') {
                    let leftIndex = i;
                    for (let z=leftIndex+1; z<arrBracket.length; z++) {
                        if( arrBracket[z] === configRight[k] && arrBracket[leftIndex] === configLeft[k] ) {
                            arrBracket[z] = '0';
                            arrBracket[leftIndex--] = '0';
                            k = 0;
                        }
                    }
                }
        }
    }
    console.log(arrBracket);
    return arrBracket.every( item => item === '0');
}


            // else
            //     if (arrBracket[i] === configLeft[k] && arrBracket[i+1] === '0') {
            //         let leftIndex = i;
            //         for (i; i<arrBracket.length; i++) {
            //             if( arrBracket[i] === configRight[k] && arrBracket[leftIndex] === configLeft[k] ) {
            //                 arrBracket[i] = '0';
            //                 arrBracket[leftIndex] = '0';
            //             }
            //         }
            //         i= 0;
            //     }


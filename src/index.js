module.exports = function check(str, bracketsConfig) {
    let configLeft = [], configRight = [];
    for ( let i=0; i<bracketsConfig.length; i++) {
        configLeft[i] = bracketsConfig[i][0];
        configRight[i] = bracketsConfig[i][1];
    }

    let arrBracket = str.split('');

    for ( let i=0; i<arrBracket.length; i++) {
                if (configRight.includes(arrBracket[i])) {
                    let leftIndex = i - 1;
                    while(arrBracket[leftIndex] === '0') {
                        leftIndex--;
                    }
                        if( arrBracket[leftIndex] == configLeft[configRight.indexOf(arrBracket[i])]) {
                            arrBracket[i] = '0';
                            arrBracket[leftIndex] = '0';
                        }
                }
        }
    return arrBracket.every( item => item === '0');
}

/**
 * Challenge link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keypad = [
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z'],
    ];

    let output = [];

    let keys = [];
    
    for(let i = 0; i < digits.length; i++){
        keys.push(keypad[digits[i]-2]);    
    }
        
    
    for(let i = 0 ; i < 10 ** (digits.length); i++){
        const numSequence = (`${'0'.repeat(digits.length)}${i}`.slice(-digits.length));
        const nums = numSequence.split('');
        if(keys.length > 0){
            const keySequence = nums.map((num, n) => {
                let s = "";
                if(Number(num) < keys[n].length){
                  s += (keys[n][num]);
                }

                return s.length > 0 ? s : null;
            });
            if(!keySequence.includes(null)){
                output.push("".concat(...keySequence));            
            }
        }
        
    }
    
    
    
    return output;
};

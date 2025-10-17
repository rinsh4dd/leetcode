/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let index = []
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            index.push(i)
        }    
    }
    return index
};

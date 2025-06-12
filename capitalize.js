var capitalizeTitle = function (title) {
    let words = title.toLowerCase().split(" ")


    for (i = 0; i < words.length; i++) {
        let word = words[i]

        if (words[i].length <= 2) {
            words[i] = word.charAt(0).toLowerCase() +word.slice(1)
        } else {

            words[i] = word.charAt(0).toUpperCase() + word.slice(1)
        }

    }
    return words.join(" ")
};
console.log(capitalizeTitle("capiTalIze he titLe"))
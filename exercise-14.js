function changeVocals(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a': result += 'b'; break
            case 'i': result += 'j'; break
            case 'u': result += 'v'; break
            case 'e': result += 'f'; break
            case 'o': result += 'p'; break
            case 'A': result += 'B'; break
            case 'I': result += 'J'; break
            case 'U': result += 'V'; break
            case 'E': result += 'F'; break
            case 'O': result += 'P'; break
            default: result += str[i]
        }
    }
    return result
}

function reverseWord(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

function setLowerUpperCase(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            let temp = str[i].toUpperCase()
            result += temp
        }
        else {
            let temp = str[i].toLowerCase()
            result += temp
        }
    }
    return result

}

function removeSpaces(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }
    return result
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let ubahVokal = changeVocals(name)
    let reverse = reverseWord(ubahVokal)
    let besarKecil = setLowerUpperCase(reverse)
    return removeSpaces(besarKecil)

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
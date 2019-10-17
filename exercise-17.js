function kaliTerusRekursif(angka) {
    let str = String(angka)
    if (str.length === 1) {
        return str[0]
    }
    else {
        let temp = 1
        for (let i = 0; i < str.length; i++) {
            temp *= str[i]
        }
        return kaliTerusRekursif(temp)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
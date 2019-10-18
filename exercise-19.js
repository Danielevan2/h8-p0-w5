function meleeRangedGrouping(str) {
    //your code here
    if (str.length === 0) {
        return []
    }
    let result = [[], []]
    let temp = ''
    let kelompok = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            temp = kelompok
            kelompok = ''
        }
        else if (str[i] === ',' || i === str.length - 1) {
            if (i === str.length - 1) {
                kelompok += str[i]
            }
            if (kelompok === 'Ranged') {
                result[0].push(temp)
            }
            else {
                result[1].push(temp)
            }
            temp = ''
            kelompok = ''
        }
        else {
            kelompok += str[i]
        }
    }
    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
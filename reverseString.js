const string = "Target Sistemas"
let reverse = ''

for (let i = string.length - 1; i >= 0; i--){
    reverse += string[i]
}

console.log(`String original: ${string}`)
console.log(`String Invertida ${reverse}`)
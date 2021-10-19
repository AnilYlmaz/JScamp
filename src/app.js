console.log("Merhaba Kodlama.io")

//JS type safe değil yani tip güvenli değil başta ne tanımladıysan o çalışır
let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11
console.log(euroDun)

//array array dizi demektir dinamik verileri getirirken atama yapmak için kullanılır
//camelCasing
//PascalCasing daha çok C#
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("</ul>")
for(let i =0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
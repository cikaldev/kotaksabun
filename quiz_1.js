/**
 * @author: iancikal
 * @title: Teler Bank
 * @description: Hitung pecahan nominal dalam mata uang rupiah
 * @link: https://telegra.ph/Quiz1--Teller-Bank-09-17
 * @publish: 17 Sep 2020
 **/

/* Terima kasih buat teman-teman yg udah berpartisipasi */


// get nominal input dari user
let uang = process.argv[2]

// pecahan mata uang rupiah
const pecahan = [1e5,5e4,2e4,1e4,5e3,2e3,1e3,500,200,100,50]

// proses nominal dan output ke console
pecahan.forEach(p => {
  console.log(
    "Rp " + p.toLocaleString().padStart(7," "),
    ":", Math.floor(uang/p),
    ((p/1000 >= 1) ? "Lembar" : "Keping")
  )
  uang %= p
})


/*

Penjelasan kode :

19: Looping pecahan

21: Memberikan tanda baca pada angka & padding / perataan angka
    - koma pemisah angka menggunakan toLocaleString()
    - padding menggunakan spasi padStart(N, any)
    
    Ex:
    Rp 100,000
    Rp _50,000
    Rp __1,000

22: Link dokumentasi dan cara penggunaan Math.Floor()
    https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

23: Ternary Operator menentukan apakah angka habis di bagi 1000
    if true output lembar else output keping

25: Modulus hasil inputan user dengan pecahan yang tersedia

*/

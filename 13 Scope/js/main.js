// var, let and const

// global scope
var x = 1; //function scoped
let y = 2; //block scoped
const z = 3; //block scoped

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

const myfunc = () => {
  var x = 10;
  const z = 5;

  {
    var x = 11; // function scoped
    const z = 6; //block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
};

myfunc();

// understanding Scope

// global = tidak dalam fungsi atau blok. tidak diinginkan
// local = dalam sebuah fungsi atau blok. tidak global
// var menginstansiasi fungsi() variabel yang dicakup
// let and const menginstansiasi variabel berskala {blok}.

// Helpful Tips!
// hindari penggunaan var. Tetaplah menggunakan const dan let.
// gunakan const kecuali Anda perlu menetapkan ulang nilai
// gunakan let jika Anda tahu bahwa Anda akan menetapkan ulang nilai

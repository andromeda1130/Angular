buf=new Buffer.alloc(20);
let a=buf.write("Welcome");
console.log(a);

buf1=new Buffer.alloc(20);
buf1.write("Welcome");
console.log(buf1.toString());

buf2=new Buffer.from("welcome");
console.log(buf2);
console.log(buf2.toString());

// try to copy the buffer
// create buffer and copy the value into another buffer

const a1=Buffer.from("data");
const a2=Buffer.alloc(a1.length);
a1.copy(a2);
console.log(a2.toString());

//try to concat or join 2 buffers ?

const b1=Buffer.from("Srijan ");
const b2=Buffer.from("Agrawal");
const b=Buffer.concat([b1,b2]);
console.log(b.toString());

// b1=Buffer.from("Srijan ");
// b2=Buffer.from("Agrawal");
// b1=Buffer.concat([b1,b2]);
// console.log(b1.toString());

const c1=Buffer.from("Accenture");
const slice=c1.slice(0,6);
console.log(slice.toString());
function B(name) {
    this.name = name;
}


function A() {
}

var a = new A();

var aa = A();

console.log(aa instanceof A);


console.log(JSON.stringify({a: '1', b: 2, date: new Date()}));

// traditional function

function sum(a){
    return a+1;
}

// basic arrow function
(a) => {return a+1};


// arrow Function không được sử dụng làm methods
var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
  }
  
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

// arrow function sẽ không sử dụng arguments  của chính nó
let func = () => {console.log(arguments[0])}
func(1) // không log ra giá trị 1.

// chúng ta có thể thay đổi bằng cách truyền vào rest parameter
let func2 = (...args) => {console.log(args[0])}
func2(1) // log ra 1

//Returning object literals.  not use params => {object:literal} => bởi vì biểu thức trong dấu ngoặc nhọn được hiểu là chuỗi các câu lệnh
let func3 = () => ({"code": 1})
func3()

//Line breaks => An arrow function cannot contain a line break between its parameters and its arrow.
// let func4 = (a, b, c)
//   => 1;
// SyntaxError: expected expression, got '=>'
let func4 = (a, b, c) => 
  1;
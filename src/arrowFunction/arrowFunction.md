## Learning Arrow Function
    -An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
    - Different and limitation:
        + Does not have its own bindings to THIS or SUPER, and should not be used as methods.
        + Does not have NEW.TARGET keyword.
        + Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
        + Can not be used as constructors.
        + Can not use yield, within its body.
    - Syntax
        + Basic Syntax: param => expression
    - Advanced syntax
        +params => ({foo: "a"}) returning the object
        +Rest parameters are supported: (a, b, ...r) => expression // rest parameter có thể gọi với số lượng tham số tùy ý, phải đặt ở cuối danh sách parameter.
        +Destructuring within params supported.
        +Default parameters are supported:
        + arrow function sẽ không sử dụng arguments  của chính nó
        + Line breaks => An arrow function cannot contain a line break between its parameters and its arrow.
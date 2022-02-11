## Js Syntax

## JSON
    - JSON.parse(text[, reviver]): parse the string text as Json => chuyển từ chuỗi là json sang javascript type
        + JSON.parse() does not allow trailing commas => không có phép dấu phẩy ở cuối.
        +JSON.parse() does not allow single quotes => không sử dụng dấu nháy đơn.
    - JSON.stringify(value[, replacer[, space]]): Return a JSON string corresponding to the specified value. chuyển javascript type sang Json
        + replacer:A function that alters the behavior of the stringification process, or an array of String and Number that serve as an allowlist for selecting/filtering the properties of the value object to be included in the JSON string.

## Array:
    -The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. =>   
    -The find() return the first element in the provided array that satisfies the provided testing function =>  Parameter là 1 callback Function với 3 argument 
        + element: The current element in the array.
        + index Optional: The index (position) of the current element in the array.
        +array Optional: The array that find was called on. 
    - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. => Parameter là 1 callback Function với 3 argument 
        + element: The current element in the array.
        + index Optional: The index (position) of the current element in the array.
        +array Optional: The array that find was called on. 
    - The reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
    - forEach() duyệt qua từng phần tử của mảng.

## Lodash:
    -Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings.


## Promise
    - Giải quyết vấn đề callback hell viết việc đọc code và maintain dễ dàng hơn
    -The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. => đại diện cho việc hoàn thành hoặc thất bại của 1 thao tác bất đồng bộ.
    -A Promise is in one of these states:
        +pending: initial state, neither fulfilled nor rejected. => trạng thái khởi tạo không có giá trị resolve hoặc reject
        +fulfilled: meaning that the operation was completed successfully. => trả về resolve
        +rejected: meaning that the operation failed. => trả về reject
    - The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.
        + then(): sẽ nhận giá trị khi resolve được gọi.
        + catch(): sẽ nhận giá trị khi reject được gọi.
        + finally(): sẽ nhận giá trị khi resolve hoặc reject được gọi.
    - Các static method thường dùng:
        + Promise.all(iterable): Wait for all promises to be resolved, or for any to be rejected.
        + Promise.resolve(value)
        + Promise.reject(value)

## Async - Await
    - The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
    - Syntax: [rv] = await expression
    - The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with JavaScript modules.
    - Awaiting a promise to be fulfilled
    - If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.
    - Phần reject của promise sẽ được bắt lỗi trong phần catch của try catch khi sử dụng async await.
    - Nếu data phụ thuộc thì sử dụng async await
    - Nếu data không phụ thuộc thì sử dụng Promise all
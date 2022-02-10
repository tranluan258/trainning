## Callback Function
    -A callback function is a function that is passed to another function as an argument, which is then called inside the outer function to complete some kind of process or action.
    -A callback is a function which is called when a task is completed, thus helps in preventing any kind of blocking and a callback function allows other code to run in the meantime. Callback is called when task get completed and is asynchronous equivalent for a function. => hàm sẽ được gọi thì task hoàn thành, ngăn blocking cho phép các mã khác chạy trong thời gian chờ đợi.
    - Xử lý bất đồng bộ.

## Callback Hell
    - Xảy ra khi chúng ta lồng quá nhiều callback vào nhau vì tác vụ sau cần các giá trị của tác vụ trước
    - Dẫn đến code khó đọc và khó maintains sau này
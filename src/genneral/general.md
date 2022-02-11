# General Nodejs

## Event loop
    + The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
    + Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
    + The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
    + The event loop allows us to use callbacks and promises.
    + The event loop executes the tasks starting from the oldest first.
    + When Node.js starts, it initializes the event loop, processes the provided input script, which may make async API calls, schedule timers, then begins processing the event loop.
    + Phases Overview:
        + timer: this phase executes callbacks scheduled by setTimeout() and setInterval().
        + pending callbacks: executes I/O callbacks deferred to the next loop iteration.
        + idle, prepare: only used internally.
        + poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
        + check: setImmediate() callbacks are invoked here.
        + close callbacks: some close callbacks, e.g. socket.on('close', ...).
## Blocking, Non-Blocking
    1. Blocking: It refers to the blocking of further operation until the current operation finishes. Blocking methods are executed synchronously. Synchronously means that the program is executed line by line. The program waits until the called function or the operation returns. => chặn các hoạt động tiếp theo khi hoạt động này kết thúc.
    2. Non-Blocking: It refers to the program that does not block the execution of further operations. Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by line. The program calls the function and move to the next operation and does not wait for it to return. => không chặn hoạt động,  thực thi bất đồng bộ.
    3. Dangers of Mixing Blocking and Non-Blocking Code
## Synchronous, Asynchronous 
    1. Synchronous programming means that the code runs in the sequence it is defined. In a synchronous program, when a function is called and has returned some value, only then will the next line be executed.
    2. Asynchronous programming, on the other hand, refers code that doesn't execute in sequence. These functions are performed not according to the sequence they are defined inside a program but only when certain conditions are met.
    3.  Asynchronous functions will run and execute only after all the synchronous functions have been executed. Until then, they will be processed in the background
    4. Async:
     + Send request
     + go on with other code
     + response come in any time on a callback
    5. Sync:
        + Send request
        + Wait for response
        + go on with other code after response
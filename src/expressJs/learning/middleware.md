## Middleware
    1. Concept
        - Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
        - Task for middleware functions
            +Execute any code.
            + Make changes to the request and the response objects.
            + End the request-response cycle.
            + Call the next middleware function in the stack.
        - call next() pass control to the middleware function
        - Level middleware functions
            + application-level middleware: call when end point app call
            + router-level middleware: call when router match call

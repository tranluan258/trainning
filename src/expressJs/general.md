# Learning ExpressJS

## General
    1. Create the app with express
        - Syntax : 
            + const express = require('express');
            + const app =  express();
    2. Method: middleware
        - express.json([options])
            + inflate: Enables or disables handling deflated, default: true
            + limit: control maximum body size, default: 100kb
            + receiver: The reviver option is passed directly to JSON.parse as the second argument: biến đổi các giá trị trong body.
            + strict: 	Enables or disables only accepting arrays and objects; when disabled will accept anything JSON.parse accepts.
            + type: default: application/json
        - express.raw([options])
            + inflate: Enables or disables handling deflated, default: true
            + limit: control maximum body size, default: 100kb
              + type: default: application/octet-stream
        - express.Router([options])
            + Syntax: const router = express.Router([options])
            + caseSensitive: enable caseSensitive, example: "/Foo", "/foo" the same
            + mergeParams
            + strict
        - express.static(root, [options])
            +Cung cấp chức năng quản lí các tệp tĩnh
        - express.text([options])
            + Returns middleware that parses all bodies as a string and only looks at requests where the Content-Type header matches the type option.
            +defaultCharset: utf-8
            + inflate, limit: same as express.json
            + type: default text/plain
        - express.urlencoded([options])
            + Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings. Type application/x-www-form-urlencoded.
        - application method
            + app.all(path, callback, [,callback]): This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.
            + app.METHOD(path, callback, [,callback]): 
                + Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on. See Routing methods below for the complete list.
                + path: the path for which the middleware function invoked
                    + a string represent a path,
                    + a pattern path,
                    + a regex pattern to match path,
                    + array above
                + callback: 
                    + A middleware function.
                    + A series of middleware functions (separated by commas).
                    + An array of middleware functions.
                    + A combination of all of the above.
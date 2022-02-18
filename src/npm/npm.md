# Learning npm

## Npm command

## npm install
    1. npm install <package> : example npm install express
        + Install the dependencies in the local node_modules folder
        + With tag `-g, -global` it installs the current package context as a global package.
        + By default, npm install will all modules list as dependencies in package.json
        + With tag --production, npm will  not install module listed in devDependencies. If install all modules list in both dependencies and devDependencies, you can set --production=false
    2. We can npm install in many other ways
        + npm install [<@scope>/]<name>
        + npm install [<@scope>/]<name>@<tag>
        + npm install [<@scope>/]<name>@<version range>
    3.You can control where and how they get saved with some
    additional flags:
        + `-P, --save-prod`: package will appear in your `dependencies`
        + `-D, --save-dev` : package will appear in your `devDependencies`
        + `-O, --save-optional`: Package will appear in your `optionalDependencies`
        + `--no-save`: Prevent saving to `dependencies`

## npm uninstall
    1. npm uninstall <package>: This uninstalls a package, completely removing everything npm installed on its behalf.
    2. If global mode it uninstalls the current package context as a global package
    3. npm uninstall option flags:
        + `-P, --save-prod`: package will be removes from your `dependencies`
        + `-D, --save-dev` : package will be removes from your `devDependencies`
        + `-O, --save-optional`: package will be removes from `optionalDependencies`
        + `--no-save`: Prevent saving to `dependencies`
## npm update
    1. npm update [-g] [<pkg>...]
    2. This command will update all the package listed to the latest version
    3. Depend on version in package.json

## package.json
    1. Your project's package.json is the central place to configure and describe how to interact with and run your application => cấu hình, mô tả và chạy dự án.
    2. It enable start your project, run scripts, install dependencies.
    3. Your project also must include a package.json before any packages can be installed from NPM.
    4. dependencies: This is one of the most important fields in your package.json, and likely the entire reason you need one. All of the dependencies your project uses (the external code that the project relies on) are listed here
        + version is X.Y.Z with MAJOR.MINOR.PATCH
        + Explained MAJOR: cập nhật phiên bản mới (release)
        +MINOR: cập nhật tính năng mới.
        +PATCH: fix bug.
        +^ => update MINOR va PATH đến latest của MAJOR
        + ~ => update PATH only
        + ~version: `Approximately equivalent to version`, will update you to all future PATCH versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0 => Phiên bản tương tương

        + ^version: `Compatible with version`, will update you to all future MINOR/PATCH versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0 => Phiên bản tương thích
    5. devDependencies: Similar to the dependencies field, but for packages which are only needed during development, and aren't needed in production.

## package-lock.json:
    1. package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json

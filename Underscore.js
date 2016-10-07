/**
 * Created by zhuxinxin on 16/10/7.
 */
/*UNDERSCORE.JS */


(function() {
    //BASELINE SETUP
    // Establish the root object, window in the browser, or exports on the server.

    var root = this;


    //Save the previous value of the _ variable.
    var previousUnderscore = root._;


    //Save bytes in the minified (but not gzipped) version:
    var ArrayProto  = Array.prototype,
        ObjProto    = Object.prototype,
        FuncProto   = Function.prototype;

    //Create quick reference variables for speed access to core prototypes.

    var push             = ArrayProto.push,
        slice            = ArrayProto.slice,
        toString         = ObjProto.toString,
        hasOwnProperty   = ObjProto.hasOwnProperty;


    //All ECMAScript 5 native function implementations that we hope to use are declared here.

    var nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind,
        nativeCreate       = Object.create;


    //Naked function reference for surrogate-prototype-swapping.





});


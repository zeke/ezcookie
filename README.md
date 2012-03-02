ezcookie
========

ezcookie is a lightweight jQuery plugin for storing cookies. It makes use of 
"subcookies" to store multiple key/value pairs in a single cookie, and also supports 
storing JSON data.

Installation
------------

ezcookie uses [Douglas Crockford's json2.js](https://github.com/douglascrockford/JSON-js)
to stringify and parse JSON. This dependency is baked into `jquery.ezcookie.js` and `jquery.ezcookie.min.js`.

If your application is already using json2.js elsewhere and you don't want to include it twice, use
`jquery.ezcookie.no_json.js` or `jquery.ezcookie.no_json.min.js`.

Usage
-----

```javascript
//  Sets the value as the cookie.
//  name - (string) The name of the cookie.
//  value - (string/object) The value of the cookie.
//  options - (object) Optional parameters.
$.setCookie(name,value,{options});

// Returns the value of the named cookie. JSON cookies are auto-detected and 
// returned as objects.
// name - (string) The name of the cookie.
$.getCookie(name);

// Sets a name/value pair (or "sub-cookie") within a cookie.
// name - (string) The name of the cookie.
// key - (string) The name of the sub-cookie.
// value - (string/object) The value of the sub-cookie.
// options - (object) Optional parameters.
$.setSubCookie(name,key,value,{options});

// Retrieves the value of a given sub-cookie.
// name - (string) The name of the cookie.
// subName - (string) The name of the sub-cookie.
$.getSubCookie(name,subName);

Removes the key/value pair of the given sub-cookie.
// name - (string) The name of the cookie.
// subName - (string) The name of the sub-cookie.
$.removeSubCookie(name,subName);

// Sets the given cookie to an empty string and sets it to expire.
// name - (string) The cookie name.
$.removeCookie(name);

// Sets the given cookie to an empty string without expiring it.
// name - (string) The cookie name.
$.clearCookie(name);

=== Options

- `expires` - Sets the expiration date of the cookie. Takes the number of days 
	from present or a date. Default is -1.
- `domain` - The domain to be used for the cookie. Default is an empty string.
- `secure` - Boolean value to use secure cookies. Default is false.
- `path` - Optional cookie path. Default is "/".

Contributing
------------

ezCookie is written in [coffeescript](http://coffeescript.org/#installation, 
and uses [cake](https://github.com/jashkenas/coffee-script/wiki/%5BHowTo%5D-Compiling-and-Setting-Up-Build-Tools) 
to concatenate the source coffee files together into a single javascript file.

Minification is supported by [Google's Closure Compile](https://developers.google.com/closure/compiler/).

```bash
cake bake
```

Credits
-------

The original project home page was at: http://code.google.com/p/ezcookie/
ezcookie
========

ezcookie is a lightweight jQuery plugin for storing cookies. It makes use of 
"subcookies" to store multiple key/value pairs in a single cookie, and also supports 
storing JSON data.

Installation
------------

ezcookie comes in four flavors:

- `jquery.ezcookie.js`
- `jquery.ezcookie.min.js`
- `jquery.ezcookie.no_json.js`
- `jquery.ezcookie.no_json.min.js`

In most cases, `jquery.ezcookie.min.js` is your best bet, but if your application 
is already using Douglas Crockford's [json2.js](https://github.com/douglascrockford/JSON-js) 
and you don't want to include it twice, use one of the smaller `no_json` versions.

Usage
-----

```javascript
//  Set a cookie's value
// 'value' can be a string or an object
$.setCookie(name,value,{options});

// Get a cookie's value.
// JSON cookies are auto-detected and returned as objects.
$.getCookie(name);

// Set a name/value pair (or "sub-cookie") within a cookie.
// 'value' can be a string or an object
$.setSubCookie(name,key,value,{options});

// Get a sub-cookie's value.
// JSON cookies are auto-detected and returned as objects.
$.getSubCookie(name,subName);

// Remove the key/value pair of the given sub-cookie.
$.removeSubCookie(name,subName);

// Set the given cookie to an empty string and set it to expire.
$.removeCookie(name);

// Sets the given cookie to an empty string without expiring it.
$.clearCookie(name);
```

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
(function() {

  (function($) {
    var dOptions;
    dOptions = {
      expires: 365,
      domain: "",
      secure: false,
      path: "/"
    };
    $.cookie = function(cookieName) {
      return $.getCookie(cookieName);
    };
    $.getCookie = function(cookieName) {
      var cookie, cookies, i, value;
      value = null;
      if (document.cookie && document.cookie !== "") {
        cookies = document.cookie.split(";");
        i = 0;
        while (i < cookies.length) {
          cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, cookieName.length + 1) === (cookieName + "=")) {
            value = decodeURIComponent(cookie.substring(cookieName.length + 1));
            break;
          }
          i++;
        }
      }
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    };
    $.subCookie = function(cookie, key) {
      return $.getSubCookie(cookie, key);
    };
    $.getSubCookie = function(cookie, key) {
      cookie = $.getCookie(cookie);
      if (!cookie || typeof cookie !== "object") return null;
      return cookie[key];
    };
    $.setCookie = function(cookieName, cookieValue, options) {
      var date, domain, expires, path, secure;
      options = (typeof options !== "undefined" ? $.extend(dOptions, options) : dOptions);
      path = "; path=" + options.path;
      domain = (options.domain ? "; domain=" + options.domain : "");
      secure = (options.secure ? "; secure" : "");
      if (cookieValue && (typeof cookieValue === "function" || typeof cookieValue === "object")) {
        cookieValue = JSON.stringify(cookieValue);
      }
      cookieValue = encodeURIComponent(cookieValue);
      date = void 0;
      if (typeof options.expires === "number") {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = (options.expires === "" ? "" : "; expires=" + date.toUTCString());
      return document.cookie = [cookieName, "=", cookieValue, expires, path, domain, secure].join("");
    };
    $.setSubCookie = function(cookie, key, value, options) {
      var cookieObject, existingCookie;
      options = (typeof options !== "undefined" ? $.extend(dOptions, options) : dOptions);
      existingCookie = $.getCookie(cookie);
      cookieObject = (existingCookie && typeof existingCookie === "object" ? existingCookie : {});
      cookieObject[key] = value;
      return $.setCookie(cookie, cookieObject, options);
    };
    $.removeSubCookie = function(cookie, key) {
      var cookieObject;
      cookieObject = $.getCookie(cookie);
      if (cookieObject && typeof cookieObject === "object" && typeof cookieObject[key] !== "undefined") {
        delete cookieObject[key];
        return $.setCookie(cookie, cookieObject);
      }
    };
    $.removeCookie = function(cookie, options) {
      options = (typeof options === "undefined" ? {} : options);
      if ($.getCookie(cookie)) {
        options.expires = -1;
        return $.setCookie(cookie, "", options);
      }
    };
    return $.clearCookie = function(cookie) {
      return $.setCookie(cookie, "");
    };
  })(jQuery);

}).call(this);

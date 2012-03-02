(($) ->
  dOptions =
    expires: 365
    domain: ""
    secure: false
    path: "/"

  $.cookie = (cookieName) ->
    $.getCookie cookieName

  $.getCookie = (cookieName) ->
    value = null
    if document.cookie and document.cookie isnt ""
      cookies = document.cookie.split(";")
      i = 0

      while i < cookies.length
        cookie = jQuery.trim(cookies[i])
        if cookie.substring(0, cookieName.length + 1) is (cookieName + "=")
          value = decodeURIComponent(cookie.substring(cookieName.length + 1))
          break
        i++
    try
      return JSON.parse(value)
    catch e
      return value

  $.subCookie = (cookie, key) ->
    $.getSubCookie cookie, key

  $.getSubCookie = (cookie, key) ->
    cookie = $.getCookie(cookie)
    return null  if not cookie or typeof cookie isnt "object"
    cookie[key]

  $.setCookie = (cookieName, cookieValue, options) ->
    options = (if typeof options isnt "undefined" then $.extend(dOptions, options) else dOptions)
    path = "; path=" + (options.path)
    domain = (if options.domain then "; domain=" + (options.domain) else "")
    secure = (if options.secure then "; secure" else "")
    cookieValue = JSON.stringify(cookieValue)  if cookieValue and (typeof cookieValue is "function" or typeof cookieValue is "object")
    cookieValue = encodeURIComponent(cookieValue)
    date = undefined
    if typeof options.expires is "number"
      date = new Date()
      date.setTime date.getTime() + (options.expires * 24 * 60 * 60 * 1000)
    else
      date = options.expires
    expires = (if options.expires is "" then "" else "; expires=" + date.toUTCString())
    document.cookie = [ cookieName, "=", cookieValue, expires, path, domain, secure ].join("")

  $.setSubCookie = (cookie, key, value, options) ->
    options = (if typeof options isnt "undefined" then $.extend(dOptions, options) else dOptions)
    existingCookie = $.getCookie(cookie)
    cookieObject = (if existingCookie and typeof existingCookie is "object" then existingCookie else {})
    cookieObject[key] = value
    $.setCookie cookie, cookieObject, options

  $.removeSubCookie = (cookie, key) ->
    cookieObject = $.getCookie(cookie)
    if cookieObject and typeof cookieObject is "object" and typeof cookieObject[key] isnt "undefined"
      delete cookieObject[key]

      $.setCookie cookie, cookieObject

  $.removeCookie = (cookie, options) ->
    options = (if typeof options is "undefined" then {} else options)
    if $.getCookie(cookie)
      options.expires = -1
      $.setCookie cookie, "", options

  $.clearCookie = (cookie) ->
    $.setCookie cookie, ""
) jQuery
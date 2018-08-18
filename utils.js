var e = function (selector) {
    return document.querySelector(selector)
}

var all = function (selector) {
    return document.querySelectorAll(selector)
}

var find = function (elem, selector) {
    return elem.querySelector(selector)
}

var log = console.log.bind(console)

var bindEvent = function(elem, eventName, callback) {
    elem.addEventListener(eventName, callback)
}

var bindAll = function(elems, eventName, callback) {
    for (var e of elems) {
        bindEvent(e, eventName, callback)
    }
}

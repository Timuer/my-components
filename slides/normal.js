var changeImage = function(direction) {
    var imgs = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
    ]
    return function(event) {
        var slide = e('.slide')
        var slideNavList = e('.slide-nav-wrapper').children
        // log(slideNavList)
        var curr = calcNextIndex(slide, direction)
        activeSlideNav(slideNavList, curr)
        find(slide, 'img').setAttribute('src', imgs[curr])
    }
}

var calcNextIndex = function(slide, direction) {
    var index = parseInt(slide.dataset.index)
    var total = parseInt(slide.dataset.total)
    if (direction === "next") {
        nextIndex = index + 1
    } else if (direction === "prev") {
        nextIndex = index - 1
    } else {
        nextIndex = getChildIndex(event.target)
    }
    var curr = 0
    if (nextIndex < 0) {
        curr = total - 1
    } else {
        curr = nextIndex % total
    }
    slide.dataset.index = "" + curr
    return curr
}

var activeSlideNav = function(slideNavList, index) {
    for (var s of slideNavList) {
        if (s.classList.contains('slide-active')) {
            s.classList.remove('slide-active')
        }
    }
    slideNavList[index].classList.add('slide-active')
}

var getChildIndex = function(child) {
    var parent = child.parentElement;
    var childs = parent.children
    var index = null
    for (var i = 0; i < childs.length; i++) {
        if (child === childs[i]) {
            index = i
        }
    }
    return index
}

var bindEvents = function() {
    var next = e('.slide-next')
    bindEvent(next, 'click', changeImage('next'))
    var prev = e('.slide-prev')
    bindEvent(prev, 'click', changeImage('prev'))
    var slideNavList = e('.slide-nav-wrapper')
    bindEvent(slideNavList, 'click', changeImage())
    bindTimeoutEvent()
}

var bindTimeoutEvent = function() {
    setTimeout(function() {
        changeImage('next')()
        bindTimeoutEvent()
    }, 5000)
}

bindEvents()

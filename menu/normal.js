var bindEvents = function() {
    menus = all('.menu')
    bindAll(menus, 'mouseover', function(){
        var elem = event.currentTarget
        var lst = find(elem, '.menu-dropdown').classList
        if (lst.contains('menu-hide')) {
            lst.remove('menu-hide')
        }
        elem.classList.add('menu-highlight')
    })
    bindAll(menus, 'mouseout', function(elem){
        var elem = event.currentTarget
        var lst = find(elem, '.menu-dropdown').classList
        if (!lst.contains('menu-hide')) {
            lst.add('menu-hide')
        }
        elem.classList.remove('menu-highlight')
    })
}
bindEvents()

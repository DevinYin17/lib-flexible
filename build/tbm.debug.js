;(function(win) {
    var h;
    var dpr = win.navigator.appVersion.match(/iphone/gi)?win.devicePixelRatio:1;
    var scale = 1 / dpr;

    function setUnitA(){
        win.rem = window.innerWidth / 16;
        document.documentElement.style.fontSize = win.rem + 'px';
    }

    win.dpr = dpr;
    win.addEventListener('resize', function() {
        clearTimeout(h);
        h = setTimeout(setUnitA, 300);
    }, false);

    document.documentElement.setAttribute('data-dpr', dpr);
    document.write('<meta name="viewport" content="initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no"/>');
    setUnitA();
})(window);
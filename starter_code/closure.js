var speed = 0.9;
var WIDTH;
var HEIGHT;
var castleWidth;
var scale;
var control = false;

var progress = 0.0;

var _castleCont = $('.castle-container');
var _castle = $('.castle');

var resize = function() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    scale = WIDTH / 1440;

    castleWidth = _castle.width() * scale;

    TweenLite.set(_castle, {scale: scale * 0.85});
};
resize();
$(window).on('resize', resize);


var draw = function() {
    requestAnimationFrame(draw);

    progress += 0.0012 * -speed;
    if (progress > 1) progress = 0;
    if (progress < 0) progress = 1;

    TweenLite.set(_castleCont, {x: (1440 * scale + castleWidth) * -progress + castleWidth / 2, y: 900 * scale * -(0.36 + progress * 0.35)});
};





var init = function() {
    
    requestAnimationFrame(draw);
};
if (document.readyState == 'complete') {
} else {
    $(window).load(init);
};




var tl5 = new TimelineMax({repeat: -1, delay: 0.0, onReverseComplete: function() {this.seek(tl5.duration())}});
var _castle = $('.castle');
TweenLite.set(_castle, {rotationZ: 9});
tl5.add([
    TweenLite.to(_castle, 1.0, {rotationZ: 7, delay: 0.0, force3D: true}),
    TweenLite.to(_castle, 1.0, {rotationZ: 9, delay: 1.0, force3D: true}),
    
    TweenLite.to(_castle, 0.5, {x: '+=' + 2 * scale, y: '-=' + 4 * scale, delay: 0.0, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '-=' + 4 * scale, y: '+=' + 4 * scale, delay: 0.5, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '+=' + 4 * scale, y: '-=' + 5 * scale, delay: 1.0, force3D: true}),
    TweenLite.to(_castle, 0.5, {x: '-=' + 2 * scale, y: '+=' + 5 * scale, delay: 1.5, force3D: true}),
]);

var tl6 = new TimelineMax({repeat: -1, delay: 0.2});
var _mound = $('.mound-group');
TweenLite.set(_mound, {rotationZ: 2});
tl6.add([
    TweenLite.to(_mound, 1.0, {rotationZ: -1, delay: 0.0, force3D: true}),
    TweenLite.to(_mound, 1.0, {rotationZ: 2, delay: 1.0, force3D: true}),
]);









var tl14 = new TimelineMax({repeat: -1, delay: 0.65});
var _wind = $('.wind');
var _antenna = $('.antenna');
var _cannon = $('.cannon');
var _tele = $('.tele');
var _knob = $('.knob');
TweenLite.set(_antenna, {rotationZ: 10, x: 0});
TweenLite.set(_wind, {rotationZ: -10, x: 0});
TweenLite.set(_knob, {rotationZ: -20, x: 0});
tl14.add([
    TweenLite.to(_antenna, 1.0, {rotationZ: -5, x: 0, delay: 0.0, force3D: true}),
    TweenLite.to(_antenna, 1.0, {rotationZ: 10, x: 5, delay: 1.0, force3D: true}),
    TweenLite.to(_antenna, 1.0, {rotationZ: -10, x: -5, delay: 2.0, force3D: true}),
    TweenLite.to(_antenna, 1.0, {rotationZ: 10, x: 0, delay: 3.0, force3D: true}),

    TweenLite.to(_wind, 1.1, {rotationZ: 5, delay: 0.0, force3D: true}),
    TweenLite.to(_wind, 1.0, {rotationZ: -15, delay: 1.1, force3D: true}),
    TweenLite.to(_wind, 1.0, {rotationZ: 10, delay: 2.1, force3D: true}),
    TweenLite.to(_wind, 0.9, {rotationZ: -10, delay: 3.1, force3D: true}),

    TweenLite.to(_knob, 0.2, {rotationZ: 50, delay: 0.0, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: -20, delay: 0.3, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: 45, delay: 0.7, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: -25, delay: 1.0, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: 30, delay: 1.5, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: 0, delay: 1.9, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: -20, delay: 2.2, force3D: true}),
    TweenLite.to(_knob, 0.3, {rotationZ: 60, delay: 2.6, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: -10, delay: 3.0, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: 40, delay: 3.4, force3D: true}),
    TweenLite.to(_knob, 0.2, {rotationZ: -20, delay: 3.7, force3D: true}),
    
    TweenLite.to(_tele, 1.0, {rotationZ: -3, delay: 0.0, force3D: true}),
    TweenLite.to(_tele, 1.0, {rotationZ: 2, delay: 1.0, force3D: true}),
    TweenLite.to(_tele, 1.0, {rotationZ: -3, delay: 2.0, force3D: true}),
    TweenLite.to(_tele, 1.0, {rotationZ: 0, delay: 3.0, force3D: true}),

    TweenLite.to(_tele, 0.25, {x: 25, y: 4, delay: 0.6, force3D: true}),
    TweenLite.to(_tele, 2.5, {x: 0, y: 0, delay: 0.9, force3D: true}),

    TweenLite.to(_cannon, 0.9, {rotationZ: -7, delay: 0.0, force3D: true}),
    TweenLite.to(_cannon, 0.9, {rotationZ: 2, delay: 0.9, force3D: true}),
    TweenLite.to(_cannon, 1.1, {rotationZ: -5, delay: 1.8, force3D: true}),
    TweenLite.to(_cannon, 1.1, {rotationZ: 0, delay: 2.9, force3D: true}),

    TweenLite.to(_cannon, 0.25, {x: 30, y: 4, delay: 0.85, force3D: true}),
    TweenLite.to(_cannon, 2.6, {x: 0, y: 0, delay: 1.4, force3D: true}),
]);
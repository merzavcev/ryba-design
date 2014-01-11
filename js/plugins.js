/*! tinyscrollbar - v2.0.0 - 2014-01-06
 * http://www.baijs.com/tinyscrollbar
 *
 * Copyright (c) 2014 Maarten Baijs <wieringen@gmail.com>;
 * Licensed under the MIT license */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(b,c){function d(){return k.update(),f(),k}function e(){p.css(C,s/v),m.css(C,-s),y=p.offset()[C],n.css(B,u),o.css(B,u),p.css(B,w)}function f(){A?l[0].ontouchstart=function(a){1===a.touches.length&&(g(a.touches[0]),a.stopPropagation())}:(p.bind("mousedown",g),o.bind("mouseup",i)),c.wheel&&window.addEventListener?(b[0].addEventListener("DOMMouseScroll",h,!1),b[0].addEventListener("mousewheel",h,!1)):c.wheel&&(b[0].onmousewheel=h)}function g(b){a("body").addClass("noSelect"),y=z?b.pageX:b.pageY,x=parseInt(p.css(C),10)||0,A?(document.ontouchmove=function(a){a.preventDefault(),i(a.touches[0])},document.ontouchend=j):(a(document).bind("mousemove",i),a(document).bind("mouseup",j),p.bind("mouseup",j))}function h(b){if(1>t){var d=b||window.event,e=d.wheelDelta?d.wheelDelta/120:-d.detail/3;s-=e*c.wheelSpeed,s=Math.min(r-q,Math.max(0,s)),p.css(C,s/v),m.css(C,-s),(c.wheelLock||s!==r-q&&0!==s)&&(d=a.event.fix(d),d.preventDefault())}}function i(a){1>t&&(mousePositionNew=z?a.pageX:a.pageY,thumbPositionDelta=mousePositionNew-y,c.scrollInvert&&(thumbPositionDelta=y-mousePositionNew),thumbPositionNew=Math.min(u-w,Math.max(0,x+thumbPositionDelta)),s=thumbPositionNew*v,p.css(C,thumbPositionNew),m.css(C,-s))}function j(){a("body").removeClass("noSelect"),a(document).unbind("mousemove",i),a(document).unbind("mouseup",j),p.unbind("mouseup",j),document.ontouchmove=document.ontouchend=null}var k=this,l=b.find(".viewport"),m=b.find(".overview"),n=b.find(".scrollbar"),o=n.find(".track"),p=n.find(".thumb"),q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z="x"===c.axis,A="ontouchstart"in document.documentElement,B=z?"width":"height",C=z?"left":"top";return this.update=function(a){switch(sizeLabelCap=B.charAt(0).toUpperCase()+B.slice(1).toLowerCase(),q=l[0]["offset"+sizeLabelCap],r=m[0]["scroll"+sizeLabelCap],t=q/r,u=c.trackSize||q,w=Math.min(u,Math.max(0,c.thumbSize||u*t)),v=c.thumbSize?(r-q)/(u-w):r/u,n.toggleClass("disable",t>=1),a){case"bottom":s=r-q;break;case"relative":s=Math.min(r-q,Math.max(0,s));break;default:s=parseInt(a,10)||0}e()},d()}a.tiny=a.tiny||{},a.tiny.scrollbar={options:{axis:"y",wheel:!0,wheelSpeed:40,wheelLock:!0,scrollInvert:!1,trackSize:!1,thumbSize:!1}},a.fn.tinyscrollbar=function(c){var d=a.extend({},a.tiny.scrollbar.options,c);return this.each(function(){a(this).data("tsb",new b(a(this),d))}),this},a.fn.tinyscrollbar_update=function(b){return a(this).data("tsb").update(b)}});

var RYBA = {
    updateMenu : function() {
        var hash = window.location.hash,
            $activeItem = $('.b-link_active'),
            defaultItem = '#portfolio',
            setActive = function() {
                $('.common-menu [href=' + hash + ']').addClass('b-link_active');
            };
        
        if(hash == ''){
            window.location = window.location + defaultItem;
            return false;
        }

        if ($activeItem.length > 0) {
            if (hash !== $activeItem.attr('href')) {
                $activeItem.removeClass('b-link_active');
                setActive();
            }
        } else {
            setActive();
        }
    }
};
window.onload = RYBA.updateMenu;
window.onhashchange = RYBA.updateMenu;

$(document).ready(function() {
    // $('html, body, *').mousewheel(function(e, delta) {
    //     e.preventDefault();
    //     $('.r-gallery')[0].scrollLeft -= (delta * 20);
    // });
    $('.gallery').on('mouseover', '.gallery__item', function() {
        var data = $(this).data(),
          $spans = $('.portfolio__wrapper span');

        $spans.eq(0).text(data.object);
        $spans.eq(1).text(data.location);
        $spans.eq(2).text(data.year);
    })
    // $('.r-gallery, .slider').lionbars();
    // $(window).on('resize',function() {
    //     if (window.matchMedia("(min-width: 1800px)").matches) {
    //         $('.r-gallery, .slider').lionbars();
    //     }
    // })
});
$(function () {
    $(".theme-selector").on("click", ".flipper, .selector-close", function (e) {
        $(this).closest(".theme-selector").toggleClass("selector-open"), e.preventDefault()
    })
}), $(function (c) {
    c("form").each(function () {
        var e = c(this), t = {
            errorPlacement: function (e, t) {
                var a = t.parent();
                a.hasClass("input-group") ? e.insertAfter(a) : a.hasClass("control") ? e.insertAfter(t.next(".control-label")) : e.insertAfter(t)
            }
        };
        "submit" == e.data("validate-on") && c.extend(t, {onfocusout: !1, onkeyup: !1}), e.validate(t)
    }), c("form").on("submit", function (e) {
        e.preventDefault();
        var a = c(this);
        if (!a.valid()) return !1;
        var t = c("button[type=submit]", this);
        t.addClass("loading");
        var s, n, i, o, r, l = a.next(".response-message");
        return console.log("Submitting Form"), n = (s = a).attr("action"), i = s.serializeArray(), r = c.extend(!0, {}, o, {
            url: n,
            type: "POST",
            data: i,
            dataType: "json"
        }), c.ajax(r).done(function (e) {
            e.result ? (a.trigger("form.submitted", [this, e]), c("input, textarea", a).removeClass("error"), c(".response", l).html(e.message), a.addClass("submitted"), a[0].reset()) : e.errors && c.each(e.errors, function (e, t) {
                c("[name$='[" + e + "]']", a).addClass("error").tooltip({
                    title: t,
                    placement: "bottom",
                    trigger: "manual"
                }).tooltip("show").on("focus", function () {
                    c(this).tooltip("dispose")
                })
            })
        }).fail(function () {
            c(".response", l).html(c("<span class='block'>Something went wrong.</span>"))
        }).always(function () {
            t.removeClass("loading")
        }), !1
    })
}), function () {
    "use strict";
    for (var e, t = function () {
    }, a = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], s = a.length, n = window.console = window.console || {}; s--;) n[e = a[s]] || (n[e] = t)
}(), $(function () {
    "use strict";
    var e = $(".navigation"), t = 90;

    function a() {
        $(window).scrollTop() >= t ? e.addClass("navbar-sticky") : e.removeClass("navbar-sticky")
    }

    $(window).scroll(function () {
        a()
    }), a(), $("a.scrollto").on("click", function (e) {
        e.preventDefault();
        var t = this.hash;
        $("html, body").stop().animate({scrollTop: $(t).offset().top}, 1200, "easeInOutExpo", function () {
            window.location.hash = t
        })
    }), $(".navbar-toggler").on("click", function () {
        e.toggleClass("navbar-expanded")
    }), AOS.init({offset: 200, duration: 1500, disable: "mobile"});
    var g = [{
        1024: {slidesPerView: 4, spaceBetween: 40},
        768: {slidesPerView: 3, spaceBetween: 30},
        640: {slidesPerView: 2, spaceBetween: 20},
        320: {slidesPerView: 1, spaceBetween: 10}
    }];
    if ($(".swiper-container").each(function () {
        var e = $(this), t = e.data("sw-breakpoint") || !1, a = e.data("sw-autoplay") || 2500,
            s = e.data("sw-speed") || 1100, n = e.data("sw-effect") || "slide", i = e.data("sw-show-items") || 1,
            o = e.data("sw-loop") || !0, r = e.data("sw-centered-slides") || !0, l = e.data("sw-items-space") || 0,
            c = e.data("sw-scroll-items") || 1, d = e.data("sw-navigation"),
            p = e.data("sw-pagination") || ".swiper-pagination", u = e.data("sw-cover-stretch") || 0,
            f = e.data("sw-cover-depth") || 0, m = e.data("sw-cover-modifier") || 1, v = {
                pagination: {el: p, clickable: !0, dynamicBullets: !0},
                navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
            };
        d && (v.onTransitionEnd = function (e) {
            $(".active", d).removeClass("active"), $(".nav-item:eq(" + e.realIndex + ")", d).addClass("active")
        });
        var w = $.extend({
            loop: o,
            slidesPerGroup: c,
            spaceBetween: l,
            centeredSlides: r,
            breakpoints: t ? g[t - 1] : t,
            slidesPerView: i,
            autoplay: {delay: a, disableOnIteration: !1},
            speed: s,
            parallax: !0,
            effect: n,
            coverflow: {rotate: 0, stretch: u, depth: f, modifier: m, slideShadows: !1}
        }, v), h = new Swiper(this, w);
        d && $(d).on("click", ".nav-item", function (e) {
            e.preventDefault();
            var t = $(this);
            if (t.hasClass("active")) return !1;
            var a = t.index();
            return h.slideTo(a + 1), t.siblings(".active").removeClass("active"), t.addClass("active"), !1
        })
    }), document.getElementById("particles")) {
        var s = $("#particles").data("particle") || "bubbles";
        particlesJS.load("particles", "js/particles/" + s + ".json")
    }
    if ($(".typed").length) new Typed(".typed", {
        strings: ["Food","Grocery", "Shopping", "Pharmacy", "Parcel"],
        typeSpeed: 100,
        backDelay: 600,
        backSpeed: 50,
        loop: !0
    })

});
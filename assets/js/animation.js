(function() {
    var t, e = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    t = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in t) null != (n = t[i]) && (e[i] = n);
            return e
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t
    }(), this.WOW = function() {
        function i(t) {
            null == t && (t = {}), this.scrollCallback = e(this.scrollCallback, this), this.scrollHandler = e(this.scrollHandler, this), this.start = e(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults)
        }
        return i.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0
        }, i.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
        }, i.prototype.start = function() {
            var t, e, i, n;
            if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                if (this.disabled()) return this.resetStyle();
                for (e = 0, i = (n = this.boxes).length; e < i; e++) t = n[e], this.applyStyle(t, !0);
                return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
            }
        }, i.prototype.stop = function() {
            if (window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval) return clearInterval(this.interval)
        }, i.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass
        }, i.prototype.applyStyle = function(t, e) {
            var i, n, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), t.setAttribute("style", this.customStyle(e, n, i, o))
        }, i.prototype.resetStyle = function() {
            var t, e, i, n, o;
            for (o = [], e = 0, i = (n = this.boxes).length; e < i; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
            return o
        }, i.prototype.customStyle = function(t, e, i, n) {
            var o;
            return o = t ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", e && (o += "-webkit-animation-duration: " + e + "; -moz-animation-duration: " + e + "; animation-duration: " + e + ";"), i && (o += "-webkit-animation-delay: " + i + "; -moz-animation-delay: " + i + "; animation-delay: " + i + ";"), n && (o += "-webkit-animation-iteration-count: " + n + "; -moz-animation-iteration-count: " + n + "; animation-iteration-count: " + n + ";"), o
        }, i.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, i.prototype.scrollCallback = function() {
            var t;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (o = [], e = 0, i = (n = this.boxes).length; e < i; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), !this.boxes.length)) return this.stop()
        }, i.prototype.offsetTop = function(t) {
            var e;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, i.prototype.isVisible = function(t) {
            var e, i, n, o, s;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = window.pageYOffset) + this.element.clientHeight - i, e = (n = this.offsetTop(t)) + t.clientHeight, n <= o && e >= s
        }, i.prototype.util = function() {
            return this._util || (this._util = new t)
        }, i.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, i
    }()
}).call(this), wow = new WOW({
    animateClass: "animated",
    offset: 50
}), wow.init();
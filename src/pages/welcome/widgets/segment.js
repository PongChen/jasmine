/**
 * segment - A little JavaScript class (without dependencies) to draw and animate SVG path strokes
 * @version v1.0.8
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */
function Segment(i, e, t, n) {
  (this.path = i),
    (this.length = i.getTotalLength()),
    (this.path.style.strokeDashoffset = 2 * this.length),
    (this.begin = "undefined" != typeof e ? this.valueOf(e) : 0),
    (this.end = "undefined" != typeof t ? this.valueOf(t) : this.length),
    (this.circular = "undefined" !== n ? n : !1),
    (this.timer = null),
    (this.animationTimer = null),
    this.draw(this.begin, this.end, 0, { circular: this.circular });
}
!(function () {
  for (
    var i = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
    t < e.length && !window.requestAnimationFrame;
    ++t
  )
    (window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"]),
      (window.cancelAnimationFrame =
        window[e[t] + "CancelAnimationFrame"] ||
        window[e[t] + "CancelRequestAnimationFrame"]);
  window.requestAnimationFrame ||
    (window.requestAnimationFrame = function (e) {
      var t = new Date().getTime(),
        n = Math.max(0, 16 - (t - i)),
        s = window.setTimeout(function () {
          e(t + n);
        }, n);
      return (i = t + n), s;
    }),
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (i) {
        clearTimeout(i);
      });
})(),
  (Segment.prototype = {
    draw: function (i, e, t, n) {
      if (
        ((this.circular = n && n.hasOwnProperty("circular") ? n.circular : !1),
        t)
      ) {
        var s = n && n.hasOwnProperty("delay") ? 1e3 * parseFloat(n.delay) : 0,
          h = n && n.hasOwnProperty("easing") ? n.easing : null,
          r = n && n.hasOwnProperty("callback") ? n.callback : null,
          a = this;
        if ((this.stop(), s))
          return (
            delete n.delay,
            (this.timer = setTimeout(function () {
              a.draw(i, e, t, n);
            }, s)),
            this.timer
          );
        var l = new Date(),
          o = this.begin,
          g = this.end,
          c = this.valueOf(i),
          u = this.valueOf(e);
        !(function d() {
          var i = new Date(),
            e = (i - l) / 1e3,
            n = e / parseFloat(t),
            s = n;
          return (
            "function" == typeof h && (s = h(s)),
            n > 1
              ? (s = 1)
              : (a.animationTimer = window.requestAnimationFrame(d)),
            (a.begin = o + (c - o) * s),
            (a.end = g + (u - g) * s),
            (a.begin = a.begin < 0 && !a.circular ? 0 : a.begin),
            (a.begin = a.begin > a.length && !a.circular ? a.length : a.begin),
            (a.end = a.end < 0 && !a.circular ? 0 : a.end),
            (a.end = a.end > a.length && !a.circular ? a.length : a.end),
            a.end - a.begin <= a.length && a.end - a.begin > 0
              ? a.draw(a.begin, a.end, 0, { circular: a.circular })
              : a.circular && a.end - a.begin > a.length
              ? a.draw(0, a.length, 0, { circular: a.circular })
              : a.draw(
                  a.begin + (a.end - a.begin),
                  a.end - (a.end - a.begin),
                  0,
                  { circular: a.circular }
                ),
            n > 1 && "function" == typeof r ? r.call(a) : void 0
          );
        })();
      } else this.path.style.strokeDasharray = this.strokeDasharray(i, e);
    },
    strokeDasharray: function (i, e) {
      if (
        ((this.begin = this.valueOf(i)),
        (this.end = this.valueOf(e)),
        this.circular)
      ) {
        var t =
          this.begin > this.end ||
          (this.begin < 0 && this.begin < -1 * this.length)
            ? parseInt(this.begin / parseInt(this.length))
            : parseInt(this.end / parseInt(this.length));
        0 !== t &&
          ((this.begin = this.begin - this.length * t),
          (this.end = this.end - this.length * t));
      }
      if (this.end > this.length) {
        var n = this.end - this.length;
        return [
          this.length,
          this.length,
          n,
          this.begin - n,
          this.end - this.begin
        ].join(" ");
      }
      if (this.begin < 0) {
        var s = this.length + this.begin;
        return this.end < 0
          ? [
              this.length,
              this.length + this.begin,
              this.end - this.begin,
              s - this.end,
              this.end - this.begin,
              this.length
            ].join(" ")
          : [
              this.length,
              this.length + this.begin,
              this.end - this.begin,
              s - this.end,
              this.length
            ].join(" ");
      }
      return [
        this.length,
        this.length + this.begin,
        this.end - this.begin
      ].join(" ");
    },
    valueOf: function (i) {
      var e = parseFloat(i);
      if (("string" == typeof i || i instanceof String) && ~i.indexOf("%")) {
        var t;
        ~i.indexOf("+")
          ? ((t = i.split("+")), (e = this.percent(t[0]) + parseFloat(t[1])))
          : ~i.indexOf("-")
          ? ((t = i.split("-")),
            (e =
              3 === t.length
                ? -this.percent(t[1]) - parseFloat(t[2])
                : t[0]
                ? this.percent(t[0]) - parseFloat(t[1])
                : -this.percent(t[1])))
          : (e = this.percent(i));
      }
      return e;
    },
    stop: function () {
      window.cancelAnimationFrame(this.animationTimer),
        (this.animationTimer = null),
        clearTimeout(this.timer),
        (this.timer = null);
    },
    percent: function (i) {
      return (parseFloat(i) / 100) * this.length;
    }
  });

export default Segment;

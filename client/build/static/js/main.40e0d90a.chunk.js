(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
    [0], {
        119: function(e, a, t) {},
        120: function(e, a, t) {},
        121: function(e, a, t) {},
        146: function(e, a) {},
        149: function(e, a, t) {},
        150: function(e, a, t) {},
        151: function(e, a, t) {},
        154: function(e, a, t) {
            "use strict";
            t.r(a);
            var n, c = t(0),
                r = t.n(c),
                l = t(59),
                s = t.n(l),
                o = t(18),
                m = t(7),
                i = t(66),
                u = t(5),
                A = t(60),
                E = t.n(A),
                g = t(17),
                f = t.n(g),
                p = t(61),
                d = t.n(p),
                h = (t(83), function(e) { var a = e.room; return r.a.createElement("div", { className: "infoBar" }, r.a.createElement("div", { className: "leftInnerContainer" }, r.a.createElement("img", { className: "onlineIcon", src: f.a, alt: "online icon" }), r.a.createElement("h3", null, a)), r.a.createElement("div", { className: "rightInnerContainer" }, r.a.createElement("a", { href: "/" }, r.a.createElement("img", { src: d.a, alt: "close icon" })))) }),
                v = t(62),
                N = t.n(v),
                b = (t(119), t(31)),
                j = t.n(b),
                C = function(e) {
                    var a = e.message,
                        t = a.text,
                        n = a.user,
                        c = !1,
                        l = e.name.trim().toLowerCase();
                    return n === l && (c = !0), c ? r.a.createElement("div", { className: "messageContainer justifyEnd" }, r.a.createElement("p", { className: "sentText pr-10" }, l), r.a.createElement("div", { className: "messageBox backgroundBlue" }, r.a.createElement("p", { className: "messageText colorWhite" }, j.a.emojify(t)))) : r.a.createElement("div", { className: "messageContainer justifyStart" }, r.a.createElement("div", { className: "messageBox backgroundLight" }, r.a.createElement("p", { className: "messageText colorDark" }, j.a.emojify(t))), r.a.createElement("p", { className: "sentText pl-10 " }, n))
                },
                O = (t(120), function(e) {
                    var a = e.messages,
                        t = e.name;
                    return r.a.createElement(N.a, { className: "messages" }, a.map((function(e, a) { return r.a.createElement("div", { key: a }, r.a.createElement(C, { message: e, name: t })) })))
                }),
                I = (t(121), function(e) { var a = e.users; return r.a.createElement("div", { className: "textContainer" }, r.a.createElement("div", null, r.a.createElement("h1", null, "Realtime Chat Application ", r.a.createElement("span", { role: "img", "aria-label": "emoji" }, "\ud83d\udcac")), r.a.createElement("h2", null, "Created with React, Express, Node and Socket.IO ", r.a.createElement("span", { role: "img", "aria-label": "emoji" }, "\u2764\ufe0f")), r.a.createElement("h2", null, "Try it out right now! ", r.a.createElement("span", { role: "img", "aria-label": "emoji" }, "\u2b05\ufe0f"))), a ? r.a.createElement("div", null, r.a.createElement("h1", null, "People currently chatting:"), r.a.createElement("div", { className: "activeContainer" }, r.a.createElement("h2", null, a.map((function(e) { var a = e.name; return r.a.createElement("div", { key: a, className: "activeItem" }, a, r.a.createElement("img", { alt: "Online Icon", src: f.a })) }))))) : null) }),
                S = t(63),
                x = t.n(S),
                y = (t(149), function(e) {
                    var a = e.setMessage,
                        t = e.sendMessage,
                        n = e.message;
                    return r.a.createElement("form", { className: "form" }, r.a.createElement("input", { className: "input", type: "text", placeholder: "Type a message...", value: n, onChange: function(e) { var t = e.target.value; return a(t) }, onKeyPress: function(e) { return "Enter" === e.key ? t(e) : null } }), r.a.createElement("button", { className: "sendButton", onClick: function(e) { return t(e) } }, "Send"))
                }),
                R = (t(150), function(e) {
                    var a = e.location,
                        t = Object(c.useState)(""),
                        l = Object(u.a)(t, 2),
                        s = l[0],
                        o = l[1],
                        m = Object(c.useState)(""),
                        A = Object(u.a)(m, 2),
                        g = A[0],
                        f = A[1],
                        p = Object(c.useState)(""),
                        d = Object(u.a)(p, 2),
                        v = d[0],
                        N = d[1],
                        b = Object(c.useState)([]),
                        j = Object(u.a)(b, 2),
                        C = j[0],
                        S = j[1],
                        R = Object(c.useState)(""),
                        k = Object(u.a)(R, 2),
                        w = k[0],
                        B = k[1];
                    Object(c.useEffect)((function() {
                        var e = E.a.parse(a.search),
                            t = e.name,
                            c = e.room;
                        console.log(t, c), n = x()("localhost:5000"), console.log(n), o(t), f(c), n.emit("join", { name: t, room: c }, (function(e) { e && alert(e) }))
                    }), ["localhost:5000", a.search]), Object(c.useEffect)((function() {
                        n.on("message", (function(e) { S([].concat(Object(i.a)(C), [e])) })), n.on("roomData", (function(e) {
                            var a = e.users;
                            B(a)
                        }))
                    }), [C]);
                    return console.log(v, C), r.a.createElement("div", { className: "outerContainer" }, r.a.createElement("div", { className: "container" }, r.a.createElement(h, { room: g }), r.a.createElement(O, { messages: C, name: s }), r.a.createElement(y, { message: v, setMessage: N, sendMessage: function(e) { e.preventDefault(), v && n.emit("sendMessage", v, (function() { return N("") })) } })), r.a.createElement(I, { users: w }))
                });
            t(151);
            var k = function() {
                var e = Object(c.useState)(""),
                    a = Object(u.a)(e, 2),
                    t = a[0],
                    n = a[1],
                    l = Object(c.useState)(""),
                    s = Object(u.a)(l, 2),
                    m = s[0],
                    i = s[1];
                return r.a.createElement("div", { className: "joinOuterContainer" }, r.a.createElement("div", { className: "joinInnerContainer" }, r.a.createElement("h1", { className: "heading" }, "Join"), r.a.createElement("div", null, r.a.createElement("input", { placeholder: "Name", className: "joinInput", type: "text", onChange: function(e) { return n(e.target.value) } })), r.a.createElement("div", null, r.a.createElement("input", { placeholder: "Room", className: "joinInput mt-20", type: "text", onChange: function(e) { return i(e.target.value) } })), r.a.createElement(o.b, { onClick: function(e) { return t && m ? null : e.preventDefault() }, to: "/chat?name=".concat(t, "&room=").concat(m) }, r.a.createElement("button", { className: "button mt-20", type: "submit" }, "Sign In"))))
            };

            function w() { return r.a.createElement(o.a, null, r.a.createElement(m.a, { path: "/", exact: !0, component: k }), r.a.createElement(m.a, { path: "/chat", component: R })) }
            s.a.render(r.a.createElement(w, null), document.getElementById("root"))
        },
        17: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=" },
        61: function(e, a) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=" },
        67: function(e, a, t) { e.exports = t(154) },
        83: function(e, a, t) {}
    },
    [
        [67, 1, 2]
    ]
]);
//# sourceMappingURL=main.40e0d90a.chunk.js.map
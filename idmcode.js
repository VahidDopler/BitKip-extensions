var n;
Array.prototype.includes || (Array.prototype.includes = function(a, b) {
    return 0 <= this.indexOf(a, b)
});
NodeList.prototype[Symbol.iterator] || (NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
HTMLCollection.prototype[Symbol.iterator] || (HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
const ba = Boolean,
    ca = Array.isArray,
    t = RegExp.prototype.test,
    da = RegExp.prototype.exec,
    ea = Array.prototype.includes;
Array.prototype.concat.bind([]);
const fa = Function.call.bind(Array.prototype.slice),
    ha = Function.apply.bind(Array.prototype.push),
    ia = Function.apply.bind(String.fromCharCode, null),
    w = Math.floor,
    x = Math.random,
    y = "undefined" == typeof browser;
y && (browser = chrome);
const z = navigator.userAgent.includes("Edge/"),
    ja = navigator.userAgent.includes("Edg/"),
    D = navigator.userAgent.includes("Firefox/"),
    ka = navigator.userAgent.includes("OPR/"),
    la = navigator.userAgent.includes("YaBrowser/");
var F = 0,
    ma, G, na, qa, ra;
const sa = D ? 69 : z ? 77 : 66,
    ta = D ? 220 : 150,
    ua = browser.runtime.getManifest();
var va = ua.permissions.includes("notifications") || null;
const wa = {
        16: "images/logo16.png",
        32: "images/logo32.png"
    },
    xa = {
        16: "images/logo16x.png",
        32: "images/logo32x.png"
    },
    ya = ["127.0.0.1:1001", "0.1.0.1:1001"],
    za = y ? "Chrome_RenderWidgetHostHWND" : D ? "MozillaWindowClass" : z ? "Windows.UI.Core.CoreWindow" : null,
    Aa = /(?!)/,
    Ba = ["main_frame", "sub_frame"],
    Ca = ["object", "image"];
var H = Ca.concat("xmlhttprequest", z ? "other" : []),
    Da = Ba.concat(Ca, "xmlhttprequest", "other");
const I = ["*://*/*"],
    Ea = ["ftp://*/*"],
    Fa = I.concat(Ea, "file:///*", y ? "about:blank" : []),
    Ga = I.concat(y ? "about:blank" : []),
    Ha = y && btoa(x().toString().substr(2, 9)),
    Ia = browser.runtime.getURL("captured.html?" + (Ha ? "auth=" + Ha + "&" : "")),
    Ja = browser.runtime.getURL("welcome.html?" + (Ha ? "auth=" + Ha + "&" : "")),
    Ka = browser.runtime.getURL("").slice(0, -1),
    La = location.href,
    Ma = ka || la,
    Na = y || z,
    Oa = !D;
var Pa = y;
const Qa = t.bind(/^(?:chrome|about|chrome-extension|chrome-search|ms-browser-extension|ms-appx-web|moz-extension):/),
    Ra = t.bind(/^(?:Host|Origin|Referer|Cookie|User-Agent|Connection|DNT|Accept-Encoding|Sec-.+)$/i),
    Sa = t.bind(/^(?:application\/(?:json|x-javascript)|text\/(?:javascript|plain))$/),
    Ta = t.bind(/^(HTM|HTML|CGI|PHP|ASP|ASPX|JSP|JSPX)$/i),
    Ua = t.bind(/^(MPD|M3U8|F4M)$/i),
    Va = t.bind(/^ftp:|^idmreg:|\bidman|\binternetdownloadmanager\b/i),
    Wa = t.bind(/^[GPTSDVACRHX]*$/);
da.bind(/:\/\/.+\/([^/]+?(?:\.([^./]+?))?)(?=[?#]|$)/);
const Xa = da.bind(/\.([^.\\/]*?)(?:\.[0-9.]+)?$/),
    Ya = da.bind(/^v(\d+)\.(\d+)(?:b(\d+))?\b/),
    Za = ea.bind([301, 302, 303, 307, 308]),
    $a = ea.bind([301, 302, 303]),
    ab = t.bind(/messaging host not found|no such native application|application is not installed/i),
    bb = t.bind(/^(?:https?|socks[45])$/),
    cb = {
        direct: 2,
        auto_detect: 3,
        system: 4,
        pac_script: 5,
        fixed_servers: 7
    },
    db = [],
    eb = {
        "-1": [2, [111, 112],
            [111]
        ],
        1: [2, [115, 116, 117, 118, 119, 120, 121, 123],
            [115, 111, 112, 113, 114]
        ],
        2: [2, [114, 113, 113, 115, 116, 117, 118, 122, 119, 121, 124, 125, 120,
                123, 112
            ],
            [111, 112, 114]
        ],
        3: [null, [113],
            [112]
        ],
        4: [2, [111, 101, 113, 112, 114, 115, 117, 116],
            [111]
        ],
        5: [null, [111, 112, 113],
            [111]
        ],
        6: [null, [],
            [111]
        ]
    },
    fb = {
        16: 1,
        17: 2,
        18: 4,
        45: 8,
        46: 16
    },
    gb = {
        http: 1,
        https: 9,
        ftp: 2,
        ftps: 10,
        idmreg: 12,
        xup: 33
    },
    hb = {
        "text/html": "HTML|HTM",
        "text/css": "CSS",
        "text/javascript": "JS|JSON",
        "text/mspg-legacyinfo": "MSI|MSP",
        "text/plain": "TXT|VTT|SRT|M3U|PLS|M3U8|MPD|F4M|TORRENT|BTT",
        "text/srt": "SRT",
        "text/vtt": "VTT|SRT",
        "text/xml": "XML|MPD|F4M|TTML|TTML2",
        "text/x-javascript": "JS|JSON",
        "text/x-json": "JSON",
        "application/dash+xml": "MPD",
        "application/f4m+xml": "F4M|MPD",
        "application/gzip": "GZ",
        "application/javascript": "JS",
        "application/json": "JSON",
        "application/json+protobuf": "JSON",
        "application/msword": "DOC|DOCX|DOT|DOTX",
        "application/ocsp-response": "OCSP",
        "application/octet-stream-m3u8": "M3U8",
        "application/pdf": "PDF",
        "application/pkix-crl": "CRL",
        "application/torrent": "TORRENT|BTT",
        "application/ttaf+xml": "DFXP",
        "application/ttml+xml": "TTML|TTML2",
        "application/vnd.apple.mpegurl": "M3U8",
        "application/zip": "ZIP",
        "application/x-7z-compressed": "7Z",
        "application/x-aim": "PLJ",
        "application/x-bittorrent": "TORRENT|BTT",
        "application/x-chrome-extension": "CRX",
        "application/x-compress": "Z",
        "application/x-compress-7z": "7Z",
        "application/x-compressed": "ARJ",
        "application/x-dosexec": "EXE",
        "application/x-gtar": "TAR",
        "application/x-gzip": "GZ",
        "application/x-gzip-compressed": "GZ",
        "application/x-javascript": "JS",
        "application/x-mpegurl": "M3U8",
        "application/x-msdos-program": "EXE|DLL",
        "application/x-msi": "MSI",
        "application/x-msp": "MSP",
        "application/x-ole-storage": "MSI|MSP",
        "application/x-rar": "RAR",
        "application/x-rar-compressed": "RAR",
        "application/x-sdlc": "EXE|SDLC",
        "application/x-shockwave-flash": "SWF",
        "application/x-silverlight-app": "XAP",
        "application/x-subrip": "SRT",
        "application/x-tar": "TAR",
        "application/x-zip": "ZIP",
        "application/x-zip-compressed": "ZIP",
        "video/3gpp": "3GP|3GPP",
        "video/3gpp2": "3GP|3GPP",
        "video/avi": "AVI",
        "video/f4f": "F4F",
        "video/f4m": "F4M",
        "video/flv": "FLV",
        "video/mp2t": "TS|TSV|M3U8",
        "video/mp4": "MP4|M4V|M4S",
        "video/mpeg": "MPG|MPEG",
        "video/mpegurl": "M3U|M3U8",
        "video/mpg4": "MP4|M4V",
        "video/msvideo": "AVI",
        "video/quicktime": "MOV|QT",
        "video/vnd.mpeg.dash.mpd": "MPD",
        "video/webm": "WEBM",
        "video/x-flash-video": "FLV",
        "video/x-flv": "FLV",
        "video/x-mp4": "MP4|M4V",
        "video/x-mpegurl": "M3U|M3U8",
        "video/x-mpg4": "MP4|M4V",
        "video/x-ms-asf": "ASF",
        "video/x-ms-wmv": "WMV",
        "video/x-msvideo": "AVI",
        "audio/3gpp": "3GP|3GPP",
        "audio/3gpp2": "3GP|3GPP",
        "audio/mp2t": "TS|TSA|M3U8",
        "audio/mp3": "MP3",
        "audio/mp4": "M4A|MP4|M4S",
        "audio/mp4a-latm": "M4A|MP4",
        "audio/mpeg": "MP3",
        "audio/mpeg4-generic": "M4A|MP4",
        "audio/mpegurl": "M3U|M3U8",
        "audio/webm": "WEBM",
        "audio/wav": "WAV",
        "audio/x-mpeg": "MP3",
        "audio/x-mpegurl": "M3U|M3U8",
        "audio/x-ms-wma": "WMA",
        "audio/x-wav": "WAV",
        "ilm/tm": "MP3",
        "image/avif": "AVIF",
        "image/gif": "GIF|GFA",
        "image/icon": "ICO|CUR",
        "image/jpg": "JPG|JPEG",
        "image/jpeg": "JPG|JPEG",
        "image/png": "PNG|APNG",
        "image/tiff": "TIF|TIFF",
        "image/vnd.microsoft.icon": "ICO|CUR",
        "image/webp": "WEBP",
        "image/x-icon": "ICO|CUR",
        "flv-application/octet-stream": "FLV"
    };

function ib(a, b, c, d, e, f, h) {
    if (a) {
        var g = ["MSG#", a, "#", b, "#", c, "#", d];
        this.j = a;
        this.type = b;
        this.o = c;
        this.l = d;
        this.a = e || [];
        this.h = g;
        if (e)
            for (a = 0; a < e.length; a++) g.push(":", e[a] || 0);
        if (f)
            for (var l in f)
                if (e = f[l], null != e)
                    if (g.push(",", l, "="), e instanceof Array) {
                        a = g.length;
                        b = 0;
                        for (var k of e) b = k instanceof Uint8Array ? b + (h ? jb(k = ia(k)) : k.length) : b + jb(k = k.toString()), g.push(k);
                        g.splice(a, 0, b, ":")
                    } else "string" == typeof e || e instanceof String ? g.push(jb(e), ":", e) : e instanceof Blob ? g.push(e.size, ":", e) : g.push(e)
    } else this.i =
        new FileReader
}

function kb() {
    this.a = kb.prototype.h++
}
kb.prototype.h = 1;

function lb(a, b, c, d) {
    this.id = a;
    this.port = b;
    c && (this.b = c = c.toLowerCase(), this.c = "iframe" == c);
    d && (this.f = d)
}
lb.prototype.a = 0;

function mb(a, b, c) {
    this.id = a + "," + b;
    this.c = null == c || 0 > c ? null : a + "," + c
}

function nb() {}

function ob(a) {
    a.f || (a.h.push(";"), a.f = !0);
    return a.h.join("")
}

function pb(a) {
    a.f || (a.h.push(";"), a.f = !0);
    return new Blob(a.h)
}

function qb(a, b, c) {
    a.f ? a.c(a) : (b.a = c || 0, b.b = 0, a.i.onload = a.s.bind(a, b), rb(a, b, 0, 50))
}
ib.prototype.s = function(a) {
    for (var b = this.i.result;;) switch (a.b) {
        case 0:
            var c = b.split(",", 2),
                d = c.shift().split(":", 2),
                e = d.shift();
            if (!d.length) {
                if (!c.length) return this.c(this);
                a.b = 1
            }
            var f = e.length + 1;
            d = e.split("#", 6);
            if (5 != d.length || "MSG" != d[0]) return this.c(this);
            this.j = parseInt(d[1]);
            this.type = parseInt(d[2]);
            this.o = parseInt(d[3]);
            this.l = parseInt(d[4]);
            b = b.slice(f);
            a.a += f;
            a.b++;
            break;
        case 1:
            d = b.split(",", 2);
            e = d.shift();
            if (!d.length) {
                d = b.split(";", 2);
                if (2 > d.length) return rb(this, a, b.length, 100);
                a.b =
                    4
            }
            f = e.length + 1;
            d = this.a = e.split(":");
            for (e = 0; e < d.length; e++) c = d[e], d[e] = c.includes(".") ? parseFloat(c) : parseInt(c);
            b = b.slice(f);
            a.a += f;
            a.b++;
            break;
        case 2:
            c = b.split(",", 2);
            2 > c.length && (c = b.split(";", 2));
            d = c.shift().split(":", 2);
            var h = d.shift();
            f = h.length;
            e = !1;
            if (d.length) f++;
            else {
                if (!c.length) return rb(this, a, b.length, 25);
                e = !0
            }
            d = h.split("=", 3);
            if (2 != d.length) return this.c(this);
            c = parseInt(d[0]);
            d = parseInt(d[1]);
            a.a += f;
            a.b++;
            if (e) {
                this[c] = d;
                b = b.slice(f);
                a.b++;
                break
            }
            a.f = c;
            a.c = d;
            b = a.c;
            f = a.a;
            a = a.slice(f,
                f + b);
            a.size == b ? this.i.readAsText(a) : this.c(this);
            return;
        case 3:
            return this[a.f] = b, a.a += a.c, a.b++, rb(this, a, 0, 21);
        case 4:
            switch (b[0]) {
                case ",":
                    a.b = 2;
                    b = b.slice(1);
                    break;
                case ";":
                    a.b++;
                    break;
                default:
                    return this.c(this)
            }
            a.a++;
            break;
        case 5:
            this.f = !0;
            this.g(this);
            a.size > a.a && (b = new ib, b.g = this.g, b.c = this.c, qb(b, a, a.a));
            return
    }
};

function rb(a, b, c, d) {
    var e = b.a;
    c = e + c;
    b.size > c ? a.i.readAsBinaryString(b.slice(e, c + d)) : a.c(a)
}

function J() {
    var a = this.constructor.prototype,
        b;
    for (b in a) b.startsWith("_") || "constructor" == b || (this[b] = a[b].bind(this));
    this.j = 0;
    this.v = null;
    this.ea = this.fa = 0;
    this.Ra = 1;
    this.sa = null;
    this.Ba = ua.version || "";
    this.Ua = "";
    this.ga = 0;
    this.wa = this.X = !1;
    this.I = null;
    this.Ja = this.Sa = this.ta = this.o = !1;
    this.A = !D;
    this.Wa = this.Ka = !0;
    this.La = this.J = this.L = null;
    this.Ta = this.W = this.Y = !1;
    this.Qa = !0;
    this.bc = this.$b = 1;
    this.qa = this.l = this.M = null;
    this.xa = 1;
    this.eb = 0;
    this.G = this.C = null;
    this.Ma = Aa;
    this.K = [];
    this.va = 0;
    this.Na =
        null;
    this.ya = this.ua = !1;
    this.O = this.s = null;
    this.ka = Array(16);
    this.c = {};
    this.i = {};
    this.a = {};
    this.u = {};
    this.b = {};
    this.H = {};
    this.f = {};
    this.g = {};
    this.Z = {};
    this.R = {};
    this.h = {};
    this.P = {};
    this.V = {};
    this.V.Zb = [];
    this.Fa = [];
    browser.browserAction && (K(this, !1), browser.browserAction.onClicked.addListener(this.nb));
    D && 1056964608 <= F && browser.contextMenus.onShown.addListener(this.ob);
    D && browser.runtime.onInstalled.addListener(this.sb);
    browser.runtime.onMessage.addListener(this.tb);
    browser.windows.onCreated.addListener(this.bb);
    browser.windows.onRemoved.addListener(this.cb);
    browser.windows.onFocusChanged.addListener(this.Ub);
    browser.windows.onBoundsChanged && browser.windows.onBoundsChanged.addListener(this.Tb);
    browser.tabs.onActivated.addListener(this.Kb);
    browser.tabs.onUpdated.addListener(this.Nb);
    browser.tabs.onRemoved.addListener(this.Mb);
    browser.tabs.onAttached && browser.tabs.onAttached.addListener(this.Lb);
    y && 1056964608 <= F && browser.webRequest.onBeforeRequest.addListener(this.pb, {
        urls: [browser.runtime.getURL("*")]
    }, ["blocking"]);
    this.ac();
    this.fb()
}

function sb() {}
sb.prototype = [];
var L = sb.prototype;
sb = null;
n = J.prototype;
n.ob = function(a, b) {
    tb(this, b.id, !0, !1, !0)
};
n.sb = function(a) {
    this.Ba = a.version = ua.version;
    this.Yb = a
};

function ub(a, b) {
    b && browser.storage.local.set({
        consent: a.Ba
    });
    a.J = null;
    a.za(5);
    a.A = !0;
    vb(a)
}
n.tb = function(a, b) {
    switch (a[0]) {
        case 38:
            a[1] && this.X && browser.storage.local.set({
                silent: !0
            });
            browser.tabs.remove(b.tab.id);
            break;
        case 42:
            ub(this, !0);
            break;
        case 43:
            browser.management.uninstallSelf({
                showConfirmDialog: !0
            })
    }
};
n.nb = function(a) {
    if (this.Ta) {
        if (this.J) return browser.windows.update(this.J, {
            focused: !0
        });
        var b = a.id,
            c = this.h[b];
        K(this, c, b, !0);
        this.W && (c ? (this.da(a.windowId), wb(this, b)) : xb(this, b))
    }
};

function K(a, b, c, d) {
    c ? a.h[c] = !b : a.Ta = b || d;
    yb(b, c, d)
}

function yb(a, b, c) {
    if (c || !b || !a) {
        var d = a;
        D && !b && (a || c ? browser.browserAction.enable() : browser.browserAction.disable(), d = !0);
        c = a ? zb + Ab : b ? Bb + Ab : c ? Bb : Cb;
        var e = d ? wa : xa,
            f = D && b && 989855744 <= F;
        if (z || y && 822083584 > F) e = e[16];
        z || browser.browserAction.setTitle({
            title: a && f ? null : c,
            tabId: b
        });
        browser.browserAction.setIcon({
            path: d && f ? null : e,
            tabId: b
        });
        a || browser.browserAction.setBadgeBackgroundColor({
            color: "#606060"
        });
        browser.browserAction.setBadgeText({
            text: a ? f ? null : "" : "X",
            tabId: b
        })
    }
}

function vb(a) {
    var b = a.c,
        c = a.P = {};
    browser.contextMenus.removeAll();
    for (var d = 0; d < Db.length; d++) {
        var e = Db[d];
        e[0] && b[e[1]] && (c[d] = browser.contextMenus.create({
            title: Eb(e[2]),
            contexts: e[3].split(","),
            onclick: e[4].bind(a),
            documentUrlPatterns: e[5] || Fa,
            enabled: !0
        }))
    }
    a.W || (a.W = !0, K(a, !0), a.D(1, browser.runtime.onConnect, a.Fb), y && a.D(1, browser.proxy.settings.onChange, a.$a), y && browser.proxy.settings.get({}, a.$a), a.D(1, browser.webNavigation.onCreatedNavigationTarget, a.Db), a.D(1, browser.webNavigation.onCommitted,
        a.Za), a.D(1, browser.webNavigation.onHistoryStateUpdated, a.vb), (b = a.c[17]) && a.D(2, browser.webRequest.onBeforeRequest, a.Ob, {
        urls: b.split("|"),
        types: Ba
    }, ["blocking"]), Fb(a, !0), browser.tabs.query({
        url: I
    }, a.oa))
}

function Fb(a, b) {
    y && a.o && browser.downloads.setShelfEnabled(!b);
    if (b) {
        y && a.o && a.D(3, browser.downloads.onCreated, a.qb);
        y && a.o && a.D(3, browser.downloads.onDeterminingFilename, a.rb);
        b = qa ? void 0 : Da;
        const c = ["blocking"],
            d = y && !ra && 1207959552 <= F ? ["extraHeaders"] : [];
        a.D(4, browser.webRequest.onBeforeRequest, a.ab, {
            urls: Ea,
            types: Ba
        }, c);
        a.D(4, browser.webRequest.onBeforeRequest, a.ab, {
            urls: I,
            types: b
        }, ["requestBody"]);
        a.D(4, browser.webRequest.onBeforeSendHeaders, a.Pb, {
            urls: I,
            types: b
        }, ["requestHeaders"].concat(c, d));
        a.D(4, browser.webRequest.onHeadersReceived, a.Rb, {
            urls: I,
            types: b
        }, ["responseHeaders"].concat(c));
        a.D(4, browser.webRequest.onResponseStarted, a.Sb, {
            urls: I,
            types: b
        });
        a.D(4, browser.webRequest.onErrorOccurred, a.Qb, {
            urls: I,
            types: b
        })
    } else a.za(3, 4)
}
n.$a = function(a) {
    browser.runtime.lastError;
    if (a) {
        var b = a.value;
        a = cb[b.mode];
        var c, d;
        this.ka.fill(void 0);
        if (5 == a && (d = b.pacScript)) d.data && 5E4 < d.data.length ? a = 4 : (c = d.data) ? (a = 6, c = c.replace(/\blet\b/g, "var").replace(/,(?=(?:\s*\/\/.*?\n)*\s*[\]}])/g, "")) : c = d.url, this.ka.fill(!0);
        else if (7 == a) {
            b = b.rules;
            d = b.bypassList;
            c = Gb(this, b.singleProxy);
            if (!c) {
                c = Gb(this, b.fallbackProxy);
                var e = Gb(this, b.proxyForHttp, 1),
                    f = Gb(this, b.proxyForHttps, 9);
                b = Gb(this, b.proxyForFtp, 2);
                e != f || e != b || e != c && c ? (c = (e || "") + ";" + (f ||
                    "") + ";" + (b || "") + ";" + (c || ""), ++a) : c = e
            }
            d && d.length && (c += ";" + d.join(","))
        }
        b = 5 > a ? a.toString() : c ? a + ":" + c : null;
        b != this.s && (this.s && this.Ha(), this.s = b)
    }
};

function Gb(a, b, c) {
    if (b) {
        var d = b.scheme || "http",
            e = "https" == d;
        a = a.ka;
        c ? a[c] = e : a.fill(e);
        if (bb(d)) return d + "://" + b.host + (b.port ? ":" + b.port : "")
    }
}

function Hb(a, b, c, d) {
    if (b) {
        var e = b.type;
        if ("direct" == e) return "0";
        "socks" == e && (e = "socks5");
        if (bb(e)) {
            var f = "1:" + e + "://" + b.host + ":" + b.port;
            "socks5" == e && b.proxyDNS && (f += "#");
            c || d || !(c = a.O) || (c = c.substr(c.indexOf(";") + 1 || c.length));
            c && (f += ";" + c);
            d && f && (a.O = f);
            return f
        }
    }
}
n.Ha = L[L.length] = function Ib(a, b) {
    if (void 0 === a) {
        if ((Oa || Pa) && this.j) {
            var d = this.C;
            d || (b = "http://" + (1 == this.j ? (new URL(this.v.url)).host : ya[0]), d = b + "/status/204+IDM");
            a = new XMLHttpRequest;
            a.timeout = 1E3;
            a.onreadystatechange = Ib.bind(this, a, b);
            a.open("GET", d, !0);
            a.send()
        }
    } else 4 == a.readyState && (204 != a.status ? this.C = this.G = null : b && (this.C = b + "/status/204+IDM", this.G = Oa && this.sa ? b + "/client/" + this.sa : null))
};
n.ra = function(a, b, c, d) {
    var e = this.f;
    return b in e ? e[b] : e[b] = new lb(b, a, c, d)
};

function Jb(a, b) {
    a = a.g;
    var c = b.id;
    a[c] !== b && (a[c] = b, z && (a[b.requestId] = b))
}

function Kb(a, b, c, d, e) {
    if (M(b)) {
        var f = b.frameId || 0;
        var h = b.parentFrameId;
        var g = b.method && b.id;
        d || (d = b.tabId);
        e || (e = b.url)
    } else f = b;
    var l = a.u[d + "," + f];
    l || (l = new mb(d, f, h), a.u[l.id] = l);
    g ? (l.g != g && (l.g = g, l.j = e, l.f = !1, l.b && (l.b = e.startsWith(b.initiator || b.originUrl))), l.h = "POST" == b.method) : e && (e.startsWith("about:blank") ? f && (l.b = !0) : l.m = e);
    null != c && (l.refresh = c);
    return l
}

function Lb(a, b) {
    return a.u[b.tabId + "," + b.frameId]
}

function Ob(a) {
    var b = new kb;
    return a.H[b.a] = b
}

function Pb(a, b) {
    delete a.H[b instanceof kb ? b.a : b]
}

function Qb(a, b) {
    for (var c of a.K)
        if (c && c[101].test(b)) return c.ma;
    return 0
}
n.Aa = function() {
    var a = this.fa % (ya.length + 1);
    if (a < ya.length) {
        a = ya[a];
        var b = x().toString().substr(2, 9);
        a = this.v = new WebSocket("ws://" + a + "/?cid=" + b, "plugin.v3.internetdownloadmanager.com");
        a.onopen = this.Da;
        a.onclose = this.S;
        a.onmessage = this.Jb;
        a.onerror = N;
        1 == a.readyState ? this.Da(1) : 3 == a.readyState ? this.S() : a.timeout = window.setTimeout(this.S, 1500, a)
    } else z ? this.S() : (a = this.v = browser.runtime.connectNative("com.tonec.idm"), a.onDisconnect.addListener(this.S), a.onMessage.addListener(this.wb), a.timeout = window.setTimeout(this.Da,
        0, 2))
};
n.Da = function(a) {
    var b = this.v;
    b && b.timeout && (window.clearTimeout(b.timeout), b.timeout = null);
    this.j = M(a) ? 1 : a;
    this.Ra = 1;
    this.X = !1;
    a = browser.i18n.getUILanguage().replace("_", "-");
    "sr" == a && (a += "-Cyrl-CS");
    b = [88, 52, Ma ? 1028 : 1031, 0];
    var c = {};
    c[112] = G;
    c[113] = ma;
    c[114] = za;
    c[125] = JSON.stringify(this.Yb);
    c[116] = a;
    P(this, 2, 1, Ma ? 0 : 1024, b, c)
};
n.S = function(a) {
    var b = browser.runtime.lastError || a && a.error,
        c = this.v;
    c && c.timeout && (window.clearTimeout(c.timeout), c.timeout = null);
    if (c instanceof WebSocket) {
        if (a === c) return c.close()
    } else c && ab(b && b.message) && (this.X = !0);
    this.v = null;
    this.j && (this.j = 0, this.Z = {}, Fb(this, !1), this.za(1, 2), this.W = !1, this.s = this.G = this.C = null, K(this, !1));
    a = ++this.fa;
    b = ya.length + 1;
    c = a / b;
    120 > c && (1 == c && Rb(this), !a || a % b ? this.Aa() : window.setTimeout(this.Aa, 5E3 * c))
};
n.Jb = function(a) {
    var b = new ib;
    b.g = this.Ya;
    b.c = this.S;
    qb(b, a.data)
};
n.wb = function(a) {
    var b = new ib;
    b.g = this.Ya;
    b.c = this.S;
    qb(b, new Blob([a]))
};

function P(a, b, c, d, e, f, h) {
    var g = a.j;
    if (!g) return 0;
    var l = a.Ra++;
    b = new ib(l, b, c, d, e, f, 2 == g);
    if (h) return h.open("POST", a.G + "?seq=" + l, !1), h.send(pb(b)), 200 == h.status ? l : 0;
    if (1 == g) a.v.send(pb(b));
    else try {
        a.v.postMessage(ob(b))
    } catch (k) {
        return a.S(), 0
    }
    d & 1 && (a.Z[l] = b);
    return l
}

function Sb(a, b) {
    if (b.a) {
        var c = b.a[1] || b.a[6],
            d = a.g[c];
        if (d) return d.c ? b.b = d.port.id : null;
        d = a.i;
        for (var e in d)
            if (d[e].f == c) return b.b = e
    }
    e = b[6];
    d = b[17];
    var f = b[50],
        h = b[7],
        g = a.V,
        l = a.f;
    a = a.a;
    var k;
    if ((k = g[e]) || (k = g[d])) return b.b = k.id;
    if (k = g[f]) var m = k.id;
    for (c in l) {
        g = l[c];
        var p = g.f;
        if (p) {
            if (p == e || p == d || p == f) {
                k = g.port;
                if (h) {
                    var r = a[k.tabId];
                    r && r.m != h && (k = null)
                }
                if (k) return b.b = k.id
            }
            if (p == h) var q = g.port.id
        }
    }
    return m ? b.b = m : q ? b.b = q : null
}
n.jb = L[L.length] = function Tb(a, b, c, d) {
    var f;
    a: for (; !c;) {
        if (f = a.b) return f;
        if (a.a) {
            var h = this.a[a.a[6] + "," + a.a[7]];
            h ? f = h.id : (h = a.a[7]) && this.i[h] && (f = h)
        }
        if (f || (f = Sb(this, a))) break;
        var g = this.i,
            l = a[50],
            k = a[7],
            m;
        for (m in g) {
            h = g[m];
            if (h.m == l) {
                f = m;
                break a
            }
            h.m == k && (f = m)
        }
        if (f) break;
        return k ? browser.tabs.query({
            url: k
        }, Tb.bind(this, a, b, !0)) : null
    }
    return c ? (browser.runtime.lastError, d && (d = d.shift()) && (h = this.a[d.id]) && (f = a.b = h.id), b && b(f)) : a.b = f
};
n.Oa = L[L.length] = function Ub(a, b, c) {
    var e = a.tabId,
        f = a.aa;
    if (b)
        if (ca(c))
            for (var h = a.m, g = h.includes("#") && Vb(h), l = c.length; l--;) {
                b = c[l];
                var k = b.frameId;
                if (k != f)
                    if (k && !b.pc && (b.url == h || g && b.url == g)) f = a.aa = k;
                    else continue;
                var m = b.parentFrameId;
                break
            } else c ? m = c.parentFrameId : browser.runtime.lastError;
        else if (0 < f ? !a.c : null == f) {
        if (f && 822083584 <= F) return browser.webNavigation.getFrame({
            frameId: f,
            tabId: e
        }, Ub.bind(this, a, !0));
        if (f || a.m) return browser.webNavigation.getAllFrames({
            tabId: e
        }, Ub.bind(this, a, !0))
    }
    0 <=
        m && (a.c = e + "," + m);
    if (null != f && a.i) {
        if (b = this.u[e + "," + f]) a.f = b.g, a.g |= b.f, a.refresh |= b.refresh, a.l = b.b, (c = b.ba) && a.m != c && (a.ba = c), a.c || (a.c = b.c), (c = this.g[a.f]) && !c.port && (c.port = a);
        this.a[e + "," + f] = a;
        m = this.ta ? 1 : null;
        c = a.ma;
        e = [11, a.id, e, f, c, a.refresh, a.g, m && db[m]];
        c && a.g && (f = this.K[c], e.push(db[f.kb]), ha(e, f.hb.map(Wb(f)).map(Xb)));
        a.postMessage(e)
    }
};
n.ja = L[L.length] = function Yb(a, b, c, d, e, f, h, g) {
    var k = Zb(a);
    if (!k) return 0;
    var m = 0 < (k & 32),
        p = 1 == (k &= 7);
    if (p && !m) {
        if (!h) return Q(a, Yb.bind(this, a, b, c, d, e, f, !0)), -1;
        M(g) && (g = R(g))
    }
    h = [k];
    k = {};
    k[6] = Vb(a, p, this);
    k[50] = b;
    k[7] = c;
    k[8] = d;
    k[100] = e;
    k[102] = f;
    k[51] = g;
    k[54] = navigator.userAgent;
    k[121] = D ? this.O : this.s;
    P(this, 14, 1, 0, h, k);
    return 3
};
n.cc = L[L.length] = function $b(a, b, c, d, e, f) {
    if (c) {
        var g = c.c;
        var l = c.M;
        var k = c.l
    }
    if (!d) {
        if (!a || !a.length) return;
        f = ac();
        g && !l && Q(g, e = S());
        for (var m of a) Q(m[0], f[f.length] = S());
        return T($b, this, a, b, c, !0, e, f)
    }
    e && (l = R(e));
    for (m of a) m[5] = R(f.shift());
    b = 0;
    c = [0, 0, 0];
    d = {
        8: 4
    };
    d[54] = navigator.userAgent;
    d[7] = g;
    d[110] = k;
    d[111] = l;
    d[121] = D ? this.O : this.s;
    1 < a.length && (c[1] = P(this, 15, 1, 0, [a.length], d), b = 16, d = {});
    for (m of a) c[2]++, d[6] = m[0], d[100] = m[2], d[102] = m[3], d[50] = m[4], d[51] = m[5], P(this, 14, 2, b, c, d)
};

function tb(a, b, c, d, e, f, h, g, l) {
    if (!d || a.c[-8]) {
        var k = a.a[b];
        if (k) {
            var m = Ob(a);
            m.tabId = b;
            m.port = k;
            m.C = c;
            m.H = e;
            m.b = 0;
            m.f = [];
            if (k = d && !!f) m.I = !0, m.K = f, m.u = h, m.v = g, m.s = l, f.b || bc(a, f);
            f = m.a;
            (d = d && a.c[12]) ? (d = d.replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/~/g, "(?:.*\\.)?"), d = "^(?:http|https|ftp|ftps)://(?:[^\\/]*@)?(?:" + d + ")(?::\\d+)?(?:\\W|$)") : d = "^(?:http|https|ftp|ftps)://";
            m.g = cc(a, b, [12, f, c, k || e, d]);
            m.A = 0;
            m.g || Pb(a, m)
        }
    }
}
n.Wb = function(a, b, c, d, e, f, h, g) {
    if (a = this.H[b]) {
        d && (a.b += d);
        h && (a.c = h);
        g && (a.l = g);
        if (e && ("string" == typeof e && (e = JSON.parse(e)), e instanceof Array)) {
            if (f)
                for (var l of e) l[4] = f;
            ha(a.f, e)
        }++a.A < a.g || (a.I ? (d = a.tabId, (e = this.b[a.port.a]) && e.B == d && a.b && (f = a.s, h = e.a, g = e.b, P(this, 10, 1, 0, [4294967295, e.l, Math.round(a.u * f + (e.h + h) * g), Math.round(a.v * f + (e.A + h) * g), 0, a.b]), this.l = d, cc(this, d, [13, !0]))) : a.H ? (d = 0 < a.b, this.Qa != d && (this.Qa = d, browser.contextMenus.update(this.P[2], {
                visible: d
            }), browser.contextMenus.refresh())) :
            (d = a.f, d.length ? this.cc(d, a.C, a) : dc(a.tabId, "cannot_find_links")), Pb(this, a))
    }
};
n.Bb = function(a, b, c, d) {
    if (a = this.H[b]) this.ja(a.j, a.o, a.c, a.i, c, d), Pb(this, a)
};
n.Eb = function(a, b, c, d, e, f) {
    this.ra(a, b, c, d);
    a = [b, a.tabId, a.f, a.ma];
    b = {};
    b[132] = d;
    b[134] = e;
    b[133] = f;
    P(this, 23, 1, 0, a, b)
};
n.$ = L[L.length] = function ec(a, b, c) {
    if (4294967295 == a) this.l = null, c = !0;
    else {
        var e = this.f[a];
        if (e) {
            c = e.a;
            if (!c) return;
            if (b) switch (c) {
                case 3:
                    return;
                case 2:
                    break;
                default:
                    e.a = 3;
                    window.setTimeout(ec.bind(this), 1E3, a, !1, !0);
                    return
            }
            e.a = 0;
            c = !0
        }
    }
    c && P(this, 8, 1, 32, [a])
};
n.jc = function(a, b, c, d, e, f, h, g, l) {
    var k = a.tabId,
        m = a.a,
        p = this.b[m],
        r = this.h[k];
    if (b) {
        var q = this.H[b],
            u = q && q.G;
        if (u) {
            if (!c && a.l) {
                var B = this.a[a.c];
                if (B) return B.postMessage([15, b, null, u[6], u[17], u[50], u[31], u[133]])
            }
            var A;
            if (!d) {
                if (!c || null == e) {
                    if (!a.b) {
                        c = a.la;
                        f = "iframe";
                        h = a.m;
                        var v = !!c
                    }
                    if (!v) {
                        c = k;
                        f = h = null;
                        var C = !0
                    }
                }
                a = this.ra(a, c, f, h);
                p = k == p.B && !p.N && (C || v || e) && !r;
                !p || C || a.a || window.setTimeout(this.da, 3E3, m);
                var O = 2;
                a.a = p ? 1 : 2;
                var E = (p ? 128 : 64) | (C ? 512 : 0);
                !g && (A = this.a[k]) && (g = A.o)
            }
            U(this, u, O || 1, E || 0, m,
                k, c, g, l);
            !O || C || r || fc(this, c, e);
            Pb(this, q)
        }
    } else d ? (this.$(c, !0), delete this.f[c]) : k != p.B || p.N || r || (e ? fc(this, c, e, !0) : gc(this, c))
};

function hc(a, b) {
    var c = a.b[b];
    if (c && c.ha) {
        var d = c.a,
            e = c.b;
        P(a, 7, 2, c.N ? 128 : c.o ? 256 : c.g ? 512 : 0, [b, Math.round((c.h + d) * e), Math.round((c.A + d) * e), Math.round((c.width - d - c.s) * e), Math.round((c.height - d) * e)])
    }
}

function fc(a, b, c, d) {
    var e = a.f[b];
    if (e && e.a) {
        var f = e.port,
            h, g = 256;
        2 == e.a && (null == d && (h = a.b[f.a]) && (d = f.tabId == h.B && !h.N), d ? (g |= 128, e.a = 1) : g |= 64);
        (d = e.c) && !c && (c = f.h);
        if (c) {
            var l = c[0];
            var k = c[1];
            var m = c[2] || l + 1;
            var p = c[3] || k + 1;
            var r = c[4];
            if (c = !d && f.h) l += c[0], k += c[1], m = Math.min(m + c[0], c[2]), p = Math.min(p + c[1], c[3]);
            if (f = a.a[f.tabId]) var q = f.u
        }
        P(a, 9, 1, g, [b, l, k, m, p, r, q])
    }
}
n.da = function(a) {
    var b = this.h,
        c = this.a,
        d = this.b,
        e = a ? [d[a]] : V(d);
    a = [];
    d = {};
    for (var f of e) !f || f.N || f.ca || b[f.B] || a.push(f.B);
    if (a.length)
        for (var h of V(this.f)) h.a && (b = h.port, f = b.tabId, a.includes(f) && ((f = b.b ? b : c[f]) && f.update && (f.update = !1, f.postMessage([14, !1])), h.b ? b.b ? b.postMessage([15, null, h.id]) : bc(this, b, null, d) : fc(this, h.id, null, !0)))
};

function ic(a, b) {
    var c = a.b,
        d;
    if (b = null == b ? V(c) : (d = c[b]) ? [d] : null)
        for (d of b) xb(a, d.B, void 0)
}

function xb(a, b, c, d) {
    d = 0 != d;
    var e = c ? 0 : 2;
    c = c ? 32 : 64;
    var f = a.f,
        h;
    for (h in f) {
        var g = f[h];
        g.a && g.port.tabId == b && g.a != e && (d || g.b) && (g.a = e, P(a, 8, 1, c, [h]))
    }
}

function gc(a, b) {
    var c = a.f[b];
    c && 1 == c.a && (c.a = 2, P(a, 8, 1, 64, [b]))
}

function jc(a, b, c, d) {
    var e = a.va,
        f = (e & b) != ((c ? 255 : 128) & b);
    a.va = c ? e |= b : e &= ~b;
    f && (c = a.c[-1], b = a.c[-2], c = a.ua = 0 != c && (e & c) == c, e = a.ya = 0 != b && (e & b) == b, a.Na = (c || e) && d || null)
}
n.Ea = L[L.length] = function kc(a, b, c, d, e) {
    var h = this.b[a];
    if (h)
        if (h.ca ? d && (window.clearTimeout(h.ca), h.ca = null) : d || (d = -1), 0 <= d) h.i |= b, h.j |= c, d && (h.ca = window.setTimeout(kc.bind(this), d, a));
        else {
            b |= h.i;
            c |= h.j;
            h.i = h.j = h.ca = null;
            if (b) {
                for (var g of V(this.i)) g.b && g.a == a && (g.update = !0);
                e ? this.U(e) : browser.windows.get(a, this.U);
                browser.tabs.query({
                    windowId: a,
                    active: !0
                }, this.U)
            }
            if (c) {
                if ((a = this.b[a]) && !a.N && !a.ca && (a = a.B, !this.h[a])) {
                    b = this.f;
                    for (var l in b) c = b[l], c.a && c.port.tabId == a && 1 == c.a && P(this, 8, 1, 1152,
                        [l])
                }
            } else this.da(a)
        }
};
n.U = L[L.length] = function lc(a, b) {
    browser.runtime.lastError;
    a instanceof Array && (a = a.shift());
    if (a) {
        var d = a.windowId || a.id,
            e = this.b[d];
        if (e) {
            var f = !a.windowId;
            if (f) {
                var h = b ? e.b = this.xa : e.b,
                    g = e.g = "minimized" == a.state,
                    l = e.o = "maximized" == a.state;
                g || (z ? (e.width = Math.round(a.width / h), e.height = Math.round(a.height / h), e.c = Math.round(a.left / h), e.f = Math.round(a.top / h)) : (e.width = a.width, e.height = a.height, e.c = a.left, e.f = a.top), g = e.N, a = e.N = "fullscreen" == a.state, h = l && -e.c, 0 < h && 16 >= h && h == -e.f && (e.a = h), a == g || b || (a ?
                    ic(this, d) : this.da(d)))
            } else {
                if (e.C && Qa(a.url)) return;
                a.width && (e.v = a.width);
                a.height && (e.u = a.height)
            }
            if (!e.g) {
                h = e.width;
                g = e.v;
                l = e.height;
                a = e.u;
                var k = g > h || a > l;
                if (k || !g || !a) {
                    f || k && browser.windows.get(d, lc.bind(this));
                    return
                }
                f = h - g;
                h = f / 2;
                0 <= h && 16 >= h ? (e.a = h, e.h = e.s = 0) : (h = e.a, D || ka ? e.h = f - 2 * h : e.s = f - 2 * h);
                f = l - a - 2 * h;
                f >= (e.G ? 20 : 50) && f <= ta && (e.A = f);
                e.C = !0
            }
            b || hc(this, d);
            return e
        }
    }
};

function wb(a, b) {
    return a.h[b] ? !0 : (a = a.a[b]) && a.refresh ? (a.refresh = !1, browser.tabs.reload(b), !0) : !1
}
n.fc = function(a, b, c, d) {
    a.m = b;
    a.s = c;
    a.refresh && !d && (a.refresh = !1);
    null == a.aa && this.Oa(a);
    this.da(a.a);
    a.b && 0 < this.I && mc(this)
};
n.ic = function(a, b, c, d, e) {
    a.o = b;
    a.u = e;
    a = [a.f, a.tabId, a.a, d, e];
    d = {};
    d[110] = b;
    d[128] = c;
    P(this, 21, 1, 0, a, d)
};
n.kc = function(a, b, c, d, e) {
    var f = a.tabId,
        h = this.a[f + "," + c];
    if (h) {
        var g = h.h;
        h.la = d;
        if (h.h = e) {
            var l = a.h;
            l && (e[0] += l[0], e[1] += l[1], e[2] = Math.min(e[2] + l[0], l[2]), e[3] = Math.min(e[3] + l[1], l[3]));
            if (g && g.join() != e.join()) {
                g = this.a;
                a = a.tabId + ",";
                c = a + c;
                for (var k in g) k.startsWith(a) && (l = g[k], l.c == c && h.postMessage([16, b, l.aa, l.la]))
            }
        }
        if (!this.h[f]) {
            fc(this, d, e);
            for (var m of V(this.f)) m.port == h && m.a && m.b && !m.c && h.postMessage([15, null, m.id])
        }
    }
};

function bc(a, b, c, d) {
    a = a.a;
    c = [16, c];
    for (var e = [b], f; f = a[b.c]; b = f) {
        if (d)
            if (d[b.id]) break;
            else d[b.id] = !0;
        e.push(f)
    }
    for (f = e.pop(); b = e.pop(); f = b) d = b.la, c[2] = b.aa, c[3] = d, c[4] = d ? null : b.m, c[5] = d ? null : b.ba, f.postMessage(c)
}

function cc(a, b, c) {
    a = a.a;
    b += ",";
    var d = 0,
        e;
    for (e in a) e.startsWith(b) && (a[e].postMessage(c), d++);
    return d
}
n.oa = function(a, b) {
    var c = {
        file: "content.js",
        runAt: "document_start",
        matchAboutBlank: !0
    };
    !z && b ? c.frameId = b : c.allFrames = !0;
    if (a instanceof Array)
        for (; b = a.shift();) try {
            b.discarded || browser.tabs.executeScript(b.id, c, N)
        } catch (d) {} else if (b = a) try {
            browser.tabs.executeScript(b.id || b, c, N)
        } catch (d) {}
};

function nc(a, b, c, d) {
    null == c && (c = b.l == a.M);
    c = 17 | (c ? 2048 : 1024) | (b.o ? 256 : b.g ? 512 : 0);
    b = [b.l, b.ha, b.width, b.height, b.c, b.f, b.b];
    var e = {};
    e[117] = d;
    P(a, 6, 2, c, b, e)
}
n.fb = L[L.length] = function oc(a, b, c) {
    if (b) {
        a = {};
        for (var e of c) a[e.windowId] = e;
        for (var f of b) e = a[f.id], b = this.U(f, !0) || this.bb(f, !0, e), nc(this, b, f.focused, f.title || e && e.title)
    } else {
        if (!a) {
            try {
                browser.windows.getAll({
                    windowTypes: ["normal", "popup"]
                }, b = S())
            } catch (h) {
                browser.windows.getAll(b)
            }
            browser.tabs.query({
                active: !0
            }, c = S());
            return T(oc, this, 1, b, c)
        }
        if (z && 1 == a && c) {
            b = ac();
            for (f of c) browser.windows.get(f.windowId, b[b.length] = S());
            return T(oc, this, 2, b, c)
        }
    }
};
n.ec = L[L.length] = function pc(a, b) {
    if (void 0 === a) return qc("system.display", pc.bind(this));
    if (a) {
        if (!b) return browser.system.display.getInfo(null, pc.bind(this, a));
        this.eb = b[0].displayZoomFactor
    }
};
n.Ca = function(a, b) {
    if (!this.j) return dc(b.id, "cannot_contact_idm");
    var c = a.linkUrl,
        d = a.pageUrl,
        e = d;
    if (a.menuItemId == this.P[4]) return browser.downloads.search({
        query: [c]
    }, this.ib.bind(this, c));
    if (a.menuItemId == this.P[1]) c = a.frameUrl, c && "about:blank" != c || (c = d, e = null);
    else if (!c && (c = a.srcUrl, (a = this.a[b.id + "," + a.frameId]) && c)) {
        var f = Ob(this);
        f.tabId = b.id;
        f.port = a;
        f.j = c;
        f.o = e;
        f.c = d;
        f.i = 4;
        return a.postMessage([18, f.a, c])
    }
    c && this.ja(c, e, d, 4)
};
n.Ia = function(a, b) {
    if (!this.j) return dc(b.id, "cannot_contact_idm");
    tb(this, b.id, a.menuItemId == this.P[2])
};
n.ib = function(a, b) {
    for (var c, d, e; c = b.pop();) c.exists && "complete" == c.state ? d || e || (e = c.referrer) : (d || (d = c.referrer), browser.downloads.erase({
        id: c.id
    }));
    this.ja(a, d || e, null, 4)
};
n.Fb = function(a) {
    var b = a.sender.tab;
    if (b && !(0 > b.id)) {
        a.name = a.name.split(":").shift();
        var c = a.id;
        null == c && (c = a.id = this.$b++);
        var d = b.id,
            e = "top" == a.name;
        a.tabId = d;
        a.a = 0 > b.index ? null : b.windowId;
        a.i = !0;
        a.j = !1;
        a.update = e;
        a.b = e;
        a.aa = e ? 0 : a.sender.frameId;
        a.v = 0;
        a.m = a.sender.url || e && b.url || null;
        a.ba = null;
        this.i[c] = a;
        e && (this.a[d] = a);
        a.m && (a.ma = Qb(this, (new URL(a.m)).hostname));
        a.onMessage.addListener(this.Gb.bind(this, a));
        a.onDisconnect.addListener(this.pa);
        this.Oa(a)
    }
};
n.pa = function(a, b) {
    browser.runtime.lastError;
    if (a.i) {
        a.i = !1;
        var c = a.tabId + "," + a.aa,
            d = this.H,
            e = this.f,
            f, h = this.V,
            g = this.g,
            l, k;
        for (k in d) d[k].port === a && delete d[k];
        for (k in e)
            if (f = e[k], f.port === a) this.$(k), delete e[k];
        for (var m in h) h[m] === a && delete h[m];
        for (k in g)(l = g[k], l.port !== a || l.g) || delete g[k];
        this.Na === a && jc(this, 255, !1);
        delete this.i[a.id];
        delete this.a[c];
        a.b && delete this.a[a.tabId];
        if (z && !b) browser.tabs.executeScript(a.tabId, {
            code: "__idm_connect__ && __idm_connect__(); true;"
        }, N);
        else
            for (k in a =
                this.u, a) c == a[k].c && delete a[k]
    }
};
n.Gb = function(a, b) {
    var c = b[0];
    b[0] = a;
    switch (c) {
        case 21:
            this.fc.apply(this, b);
            break;
        case 24:
            this.ic.apply(this, b);
            break;
        case 22:
            this.kc.apply(this, b);
            break;
        case 23:
            this.jc.apply(this, b);
            break;
        case 41:
            this.Eb.apply(this, b);
            break;
        case 25:
            this.ra.apply(this, b);
            break;
        case 26:
            tb(this, a.tabId, !0, !0, !1, a, b[1], b[2], b[3]);
            break;
        case 27:
            this.Wb.apply(this, b);
            break;
        case 28:
            this.$(4294967295);
            break;
        case 29:
            this.Xa.apply(this, b);
            break;
        case 30:
            this.Xa.apply(this, b);
            break;
        case 31:
            this.zb.apply(this, b);
            break;
        case 32:
            this.Cb.apply(this,
                b);
            break;
        case 39:
            this.Ab.apply(this, b);
            break;
        case 33:
            this.ub.apply(this, b);
            break;
        case 34:
            this.yb.apply(this, b);
            break;
        case 35:
            this.Bb.apply(this, b);
            break;
        case 36:
            this.Vb.apply(this, b);
            break;
        case 37:
            this.Ib.apply(this, b)
    }
};
n.Ya = function(a) {
    var b = a.type,
        c = a.o,
        d = a.l,
        e = a.a,
        f;
    if (1 == b) {
        var h = e[0];
        if (f = this.Z[h]) b = f.type, delete this.Z[h]
    }
    switch (b) {
        case 3:
            0 <= this.fa && (this.fa = -1, this.Ha());
            d = this.ea = e[0];
            this.Sa = 9 > d;
            this.Ja = 10 <= d;
            this.sa = e[6];
            if (d = e[4]) d /= 96, this.xa = y && 1.245 > d ? 1 : d, this.fb(), y && this.eb && this.ec();
            rc(this, e[5], a);
            sc(this, !0);
            Rb(this);
            break;
        case 4:
            f = this.c;
            this.o = !!(e[3] & 2147483648);
            this.ta = !!(e[3] & 1073741824);
            rc(this, e[2], a);
            sc(this);
            f[-9] = 0 < (d & 64);
            f[-13] = 0 < (d & 1024) || Ma;
            f[-8] = 0 < (d & 32);
            f[-4] = 0 < (d & 2);
            f[-11] = 0 <
                (d & 256) || 2 > c;
            f[-12] = 0 < (d & 512) || 2 > c;
            f[-1] = e[0];
            f[-2] = e[1];
            f[12] = a[12];
            f[17] = a[17];
            W(f, a, 1);
            W(f, a, 2);
            W(f, a, 3);
            W(f, a, 4);
            W(f, a, 10);
            W(f, a, 9, 2);
            W(f, a, 11, 2);
            W(f, a, 20);
            W(f, a, 21, 1);
            tc(f, a, 19);
            tc(f, a, 18, 1, 1);
            (this.A || this.Ka) && vb(this);
            break;
        case 18:
            d = e[0];
            e = e[1];
            e = eb[e ? -e : d];
            if (!e) break;
            f = this.K[d] = {};
            c = e[2];
            f.ma = d;
            f.kb = e[0];
            f.hb = e[1];
            for (var g in a)(g = parseInt(g)) && (102 == g || 110 < g && 150 > g) && (f[g] = c.includes(g) ? RegExp(a[g]) : a[g]);
            15 > this.ea && 2 == d && (f[124] = "a:not([target])", f[125] = "<div >:not(:only-child):not(video:first-child,img:first-child:nth-last-child(2))",
                f[120] = 4);
            87 > this.ea && 4 == d && (f[115] = "~+" + f[115].slice(1) + "<");
            for (g of c) f[g] || (f[g] = Aa);
            e = this.K.map(uc(102)).filter(ba);
            this.Ma = RegExp("^https?://(?:" + e.join("|") + ")", "i");
            W(f, a, 101, 2);
            break;
        case 5:
            a = e[0];
            (e = this.b[a]) ? (d = 0 != (d & 128), e.N != d && (e.N = d) && ic(this, a)) : this.cb(a);
            break;
        case 6:
            if (d & 4) break;
            a = f.a[0];
            e = e[1];
            if (d = this.b[a]) d.ha = e, hc(this, a);
            break;
        case 8:
            a = e[0];
            e = d & 32;
            if (4294967295 == a) cc(this, this.l, [13, !1]), this.l = null;
            else if (a = this.f[a]) a.a = e ? 0 : 2;
            break;
        case 11:
            a = e[0];
            4294967295 == a && (tb(this,
                this.l, !0, !0), this.l = null);
            break;
        case 12:
            try {
                var l = a.a[5],
                    k = a[4];
                e = 4 == l ? 2 : 3;
                if (1 == l || 2 == l) {
                    if (Sb(this, a)) {
                        if (this.c[3].test(k)) 1 == l ? e = 6 : l = 4;
                        else if (this.c[-4] || this.c[4].test(k)) e = 6;
                        a[8] |= 256
                    }
                    if (3 == e) {
                        var m = this.b[this.M];
                        m && this.h[m.B] && (e = 1)
                    }
                }
                if (4 == l)
                    if (!this.Sa || a.a[6] || a.a[7]) {
                        switch (a.a[4]) {
                            case 1:
                                a[7] || (a[7] = a[50]);
                                break;
                            case 3:
                                a[7] || (a[7] = a[32]), a[50] || (a[50] = a[31])
                        }
                        this.Xb(a)
                    } else U(this, a, 1);
                else U(this, a, e)
            } catch (p) {
                U(this, a, 0)
            }
            break;
        case 13:
            a = f.a[0];
            d = f.a[5];
            e = e[1];
            g = 3 == e;
            if (3 >= d) f.l & 128 ?
                vc(this, a, g) : X(this, a, g);
            else if (5 == d)
                if (e) {
                    if (a = (g = this.g[a]) && g.i) {
                        f = g.method;
                        e = g.requestHeaders;
                        if (d = g.f)(d = wc(d, Y(e, "Content-Type"))) || (f = "GET");
                        a.timeout = 1E4;
                        a.onreadystatechange = this.Hb.bind(this, a, g.id);
                        a.open(f, g.url, !0);
                        for (g = 0; g < e.length; g++) f = e[g].name, c = f.toLowerCase(), c.startsWith("x-idm-") || (Ra(c) && (f = "X-IDM-" + f), a.setRequestHeader(f, e[g].value));
                        a.send(d)
                    }
                } else xc(this, a);
            break;
        case 20:
            e = a[123];
            d = !e;
            a = [a.j, 0, 0, 0];
            g = {};
            D && (f = this.O) && (g[122] = f, d || (d = f.substr(2).split(";", 1).shift() ==
                e));
            g[121] = this.s;
            P(this, 1, 1, d ? 2 : 4, a, g);
            break;
        case 22:
            this.gb(e[0], e[1], a[131], a[130]);
            break;
        case 1:
            break;
        default:
            !f && d & 1 && P(this, 1, 1, 0, [a.j, 0, 0, 0])
    }
};
n.gb = L[L.length] = function yc(a, b, c, d, e) {
    if (!z && null == va) {
        if (void 0 === e) return qc("notifications", yc.bind(this, a, b, c, d));
        va = e || !1
    }
    va && (browser.notifications.create(a.toString(), {
        type: "basic",
        title: d || "",
        message: c,
        iconUrl: "images/logo48.png"
    }, N), b && window.setTimeout(browser.notifications.clear, 1E3 * b, a.toString(), N))
};
n.Xb = L[L.length] = function zc(a, b, c, d) {
    try {
        var f = a.b;
        if (!f)
            if (c) f = a.b = c;
            else if (d) {
            var h = this.b[d.id],
                g = this.a[h && h.B];
            g && (f = a.b = g.id)
        } else if (!b && (f = this.jb(a, c = S()), !f)) return browser.windows.getLastFocused(d = S()), T(zc, this, a, !0, c, d);
        var l = this.i[f];
        if (!l) return U(this, a, 0);
        h = this.b[l.a];
        if (!h || !h.ha) return U(this, a, 1);
        (g = this.a[l.tabId]) && g.update && (g.update = !1, g.postMessage([14, !0]));
        var k = Ob(this),
            m = a.a[8],
            p = [15, k.a, m];
        k.G = a;
        m || (l.b || bc(this, l, k.a), p.push(a[6], a[17], a[50], a[31], a[133]));
        l.postMessage(p)
    } catch (r) {
        U(this,
            a, 0)
    }
};

function U(a, b, c, d, e, f, h, g, l) {
    -1 != c && (e = [b.j, c, e, h, f], f = {}, f[8] = b[8], g && (f[101] = g, f[128] = l), P(a, 1, 2, d | (0 == c ? 4 : 2), e, f))
}
n.Db = function(a) {
    Kb(this, a).a = !0;
    D && browser.windows.get(a.windowId, this.U)
};
n.Za = function(a, b) {
    var c = a.tabId,
        d = a.frameId,
        e = a.url,
        f = a.transitionType,
        h = f ? f.endsWith("_subframe") : z && 0 < d,
        g = this.u[c + "," + d];
    this.L != c || Qa(e) || (this.L = null);
    !h && this.h[c] && (g ? (f = g.i, f = !(e && f && (new URL(e)).hostname == (new URL(f)).hostname)) : f = !0, K(this, f, c));
    g && (g.i = e);
    if (f = this.a[c + "," + d])
        if (this.l && (a = this.b[f.a]) && a.B == this.l && this.$(4294967295), b) {
            if (b = f.m, c = new URL(b), d = new URL(e), (c.origin != d.origin || c.pathname != d.pathname || 1 != Qb(this, c.hostname) || "/watch" != c.pathname || c.a("v") != d.a("v")) && e !=
                b) {
                b = this.f;
                var l, k;
                for (k in b)
                    if (l = b[k], l.port === f) 2 == f.ma ? gc(this, k) : (this.$(k), delete b[k]);
                f.v++;
                f.m = e;
                f.b && (f.update = !0);
                f.postMessage([17, !0])
            }
        } else this.pa(f, !0), h && "about:blank" == f.m && this.oa(c, d);
    else h && "about:blank" == e ? (Kb(this, a), this.oa(c, d)) : g && g.a && (g.m || !b) && (g.a = !1)
};
n.vb = function(a) {
    return this.Za(a, !0)
};
n.bb = function(a, b, c) {
    var d = a.id;
    c = {
        l: d,
        width: a.width,
        height: a.height,
        c: a.left,
        f: a.top,
        b: this.xa,
        a: 8,
        A: sa,
        h: 0,
        s: 0,
        G: "popup" == a.type,
        N: "fullscreen" == a.state,
        o: "maximized" == a.state,
        g: "minimized" == a.state,
        B: c && c.id,
        u: c && c.height,
        v: c && c.width,
        C: !D,
        ha: null,
        ca: null
    };
    Object.setPrototypeOf(c, nb.prototype);
    this.b[d] = c;
    a.focused && (this.M = d);
    b && (browser.tabs.query({
        windowId: d,
        active: !0
    }, this.U), browser.tabs.query({
        windowId: d,
        url: I
    }, this.hc), browser.tabs.query({
        windowId: d,
        url: I
    }, this.oa));
    return c
};
n.hc = function(a) {
    for (var b of a) Kb(this, 0, !0, b.id, b.url)
};
n.cb = function(a) {
    P(this, 5, 1, 32, [a]);
    delete this.b[a];
    this.J == a && ub(this)
};
n.Ub = function(a) {
    if (0 < a) {
        this.J && browser.windows.update(this.J, {
            drawAttention: !0
        });
        var b = this.b[a];
        b && (this.M = a, b.ha || nc(this, b, !0), browser.windows.onBoundsChanged || browser.windows.get(a, this.U), wb(this, b.B), z && this.Ea(a, !1, !0, 500))
    } else this.M = null
};
n.Tb = function(a) {
    this.Ea(a.id, !0, !1, -1, a)
};
n.Nb = function(a, b, c) {
    var d = c.active;
    c = c.windowId;
    var e = d && this.b[c];
    e && (e.ha || nc(this, e));
    "complete" == b.status && (a = this.a[a]) && !a.j && (a.j = !0, d && this.da(c))
};
n.Mb = function(a) {
    var b = this.a,
        c = this.u,
        d = a + ",";
    this.L == a && (this.L = null);
    var e = b[a];
    e && this.pa(e, !0);
    for (var f in b) f.startsWith(d) && this.pa(b[f], !0);
    for (var h in c) h.startsWith(d) && delete c[h];
    delete this.h[a]
};
n.Kb = function(a) {
    var b = a.tabId;
    a = a.windowId;
    this.va = 0;
    this.l && this.$(4294967295);
    var c = this.b[a];
    c && (xb(this, c.B), c.B = b, (c = this.L) && b != c && (this.J ? browser.windows.update(this.J, {
        drawAttention: !0
    }) : this.j && this.A && (this.L = null, window.setTimeout(browser.tabs.remove, 250, c))), browser.tabs.get(b, this.U), wb(this, b) || this.da(a))
};
n.Lb = function(a, b) {
    b = b.newWindowId;
    var c = this.i,
        d;
    for (d in c)(d = c[d]) && d.tabId == a && (d.a = b);
    xb(this, a, !0)
};
n.xb = function(a) {
    this.J && "idle" == a && browser.windows.update(this.J, {
        focused: !0
    })
};
n.Xa = function(a, b, c) {
    if (a.b) {
        var d = a.tabId;
        a = a.a;
        var e = this.b[a];
        this.l && this.$(4294967295);
        if (e && e.B == d) {
            var f = !1;
            b && (e.v = b, f = !0);
            c && (e.u = c, f = !0);
            xb(this, d, !1, f);
            this.Ea(a, f, !1, 500)
        }
    } else a.la && (b = this.a[a.c]) && b.postMessage([16, null, a.aa, a.la])
};
n.zb = function(a, b, c) {
    (b = fb[b]) && jc(this, b, c, a)
};
n.Cb = function(a, b, c) {
    0 == b && jc(this, 128, c, a)
};
n.Ab = function(a, b, c, d) {
    this.qa = a.id;
    a.lb = b;
    a.Ga = c;
    a.mb = d
};
n.ub = function() {
    jc(this, 255, !1)
};
n.yb = function(a, b, c, d) {
    var e = a.f;
    e && (a = 32, c = [e, null == c ? (a |= 16, -2) : c], e = {}, e[110] = b, e[115] = d, P(this, 16, 1, a, c, e))
};
n.Vb = function(a, b, c) {
    if (a = this.g[b]) {
        b = [a.id, 0];
        var d = {};
        d[115] = c;
        P(this, 16, 1, 48, b, d);
        a.o = !1;
        a.W && X(this, a)
    }
};
n.Ib = function(a, b, c, d) {
    P(this, 19, 2, 0, [b, c, a.tabId, a.f], d)
};

function xc(a, b) {
    if (b = a.g[b]) {
        var c = b.i;
        b.o = !1;
        b.i = null;
        b.W && X(a, b);
        c && c.abort()
    }
}
n.Hb = function(a, b) {
    if (4 == a.readyState) {
        var c = [b, 0],
            d = {};
        200 == a.status && (d[115] = a.response);
        P(this, 16, 1, 48, c, d);
        xc(this, b)
    }
};

function Ac(a, b) {
    var c = a.c;
    if (b.s || a.h[b.tabId] || !c[-9]) return 1;
    if (b.h) return 6;
    if (b.c && c[-4]) return 1;
    var d = b.u,
        e = b.R = Z(d.pathname);
    return c[9].test(d.hostname) || c[19].test(d.href) ? 1 : 2 == (b.b & 7) && (b.M || c[-13]) ? d.pathname.endsWith("/") || c[21].test(d.pathname) ? 1 : c[1].test(e) || a.o && !c[20].test(e) ? 4 : 1 : 6
}

function Bc(a, b) {
    var c = !b.a;
    if (b.h && c) return 3;
    var d = a.c,
        e = d[18],
        f = d[1],
        h = b.u,
        g = b.R,
        l = b.j || (h.search ? null : g),
        k = b.c,
        m = Ca.includes(b.type),
        p = !b.M,
        r = !m && e.exec(h.href);
    if (r) {
        var q = e.lc,
            u = e.mc,
            B = e.nc,
            A = e.oc;
        for (e = 1; e < r.length; ++e)
            if (r[e]) {
                q = q[--e];
                if (null === q) break;
                r = 0;
                if (q.includes("G")) {
                    var v = !0;
                    r |= "GET" == b.method
                }
                q.includes("P") && (v = !0, r |= "POST" == b.method);
                if (v && !r) break;
                v = q.includes("V") | q.includes("A") | q.includes("C");
                q.includes("H") && (b.X = !0);
                if ((v ? b.X : k ? !q.includes("S") : q.includes("X")) || p && q.includes("D")) return 1;
                if (r = A[e]) {
                    r = r.exec(h.href);
                    if (!r) break;
                    h = u[e];
                    if (u = h.F) {
                        var C = !0;
                        var O = r[u]
                    }
                    if (u = h.T) {
                        C = !0;
                        var E = r[u]
                    }
                }
                E || (E = Z(O) || q.includes("T") && (C = !0, g) || B[e]);
                if (v) return E && (b.R = E), k || (b.c = !0), b.a = !0, 6;
                if (c && (E ? f.test(E) : !C)) return b.P = 16777216, 4;
                break
            }
    }
    if (!c) return 6;
    if (l && (m && d[2].test(l) || k && d[4].test(l))) return 1;
    if ((D || a.G) && (b.M || d[-13])) {
        if (k && d[3].test(l)) return 6;
        if ((!k || a.o) && l && f.test(l)) return b.P = 8, 4
    }
    return 6
}

function Cc(a, b) {
    if (b.ga) return a.ia(6, b), 6;
    var c = b.statusCode;
    if (200 != c && 206 != c && 304 != c) return 1;
    var d = Y(b.responseHeaders, "Content-Type"),
        e = Y(b.responseHeaders, "Content-Disposition"),
        f = Dc(d).toLowerCase(),
        h = "attachment" == Dc(e).toLowerCase();
    c = b.c;
    var g = b.A;
    if (b.fa = g && !h && "text/html" == f) {
        if (b.g) {
            var l = Lb(a, b);
            l && (l.f = !0);
            a.ia(5, b)
        }
        return 1
    }
    if (c ? b.s : b.a) return 1;
    if (a.o && g && h) return 4;
    var k, m, p, r = a.c,
        q = b.u,
        u = q.hostname,
        B = q.pathname;
    e = (d = Ec(e, "filename") || Ec(d, "name")) && Z(d);
    if (d) {
        if (!e && !c) return 1;
        if (e && (!c || 5 >= e.length)) {
            b.v = d;
            var A = p = !0
        }
    }
    p || (d = B.split("/").pop(), (e = b.R || Z(d)) && e.toLowerCase() == f.split("/").pop() && (A = !0));
    if (!A) {
        var v = r[10].test(f),
            C = hb[f];
        if (C)
            if (C = C.split("|"), e && C.includes(e)) A = !0;
            else if (c && Ua(e)) A = !0;
        else if (c ? !v : !e) {
            A = !0;
            var O = v;
            e = C[0]
        }!A && e && (h && g ? A = !0 : v ? A = O = !0 : C || Ta(e) || (A = O = !0))
    }
    if (c) {
        C = Qb(a, u);
        g = a.K[C];
        v = B + q.search;
        switch (C) {
            case 0:
                break;
            case 1:
                if (g[111].test(v)) {
                    var E = A = !0;
                    e = null
                } else if (g[112].test(v)) var aa = !0;
                else if (g[115].test(v) && "application/json" == f) var oa = !0;
                else if (g[113].test(v) && "application/x-www-form-urlencoded" == f || g[114].test(v) && "video/vnd.mpeg.dash.mpd" == f) var pa = !0;
                break;
            case 2:
                (u = g[111].exec(v)) && (Sa(f) || "text/html" == f) ? (f = u[1] && g[112].exec(b.port.m)) && u[1] != f[1] || (pa = !0): g[114].test(v) ? oa = !0 : h && "image" == b.type && "MP4" == e && (m = !0);
                break;
            case 3:
                "M4S" == e && (A = !0);
                u == g[111] && g[112].test(B) && Sa(f) && (pa = !0);
                break;
            case 4:
                g[111].test(v) && Sa(f) && (oa = !0);
                break;
            case 5:
                g[111].test(v) && "text/html" == f && (oa = !0);
                break;
            case 6:
                g[111].test(v) && (pa = !0);
                break;
            default:
                g[111].test(B) && (oa = !0)
        }
        A && ("M3U8" == e || "F4M" == e || a.Ja && "MPD" == e ? pa = !0 : "F4F" == e && (d.endsWith("Seg1-Frag1") || d.endsWith("Seg1-Frag2") || d.includes("Seg1-Frag2_")) && (k = !0));
        "ASF" == e && ((f = Y(b.responseHeaders, "Content-Length")) && 102400 >= parseInt(f) && (m = !0), "DCLK-AdSvr" == Y(b.responseHeaders, "Server") && (m = !0))
    }
    if (m) return 1;
    A && (c && r[3].test(e) ? E = !0 : c && r[4].test(e) ? b.a = !0 : !b.a && r[1].test(e) && (l = !0));
    if (E) {
        var Mb, Nb;
        if (b.X) E = !1;
        else if (m = r[11]) m.test(q.hostname) ? E = !1 : (Mb = a.a[b.tabId]) && (Nb = Mb.m) && m.test((new URL(Nb)).hostname) &&
            (E = !1)
    }
    if (oa) aa = b.o = !0;
    else if (pa || k) "POST" != b.method || b.f ? (a = new XMLHttpRequest, a.responseType = k ? "blob" : "text", b.i = a, aa = !0) : aa = !1;
    if (!l && !E && !aa) return 1;
    A && (b.j = e);
    p && (b.v = d);
    b.g |= aa;
    b.P = E || aa ? 256 : 16 | (c ? 4096 : 0) | (O ? 8388608 : 0);
    return l ? 4 : E ? 2 : 5
}
n.ia = L[L.length] = function Fc(a, b, c, d, e, f) {
    var g = b.url,
        l = b.b || Zb(g),
        k = 1 == (l & 7),
        m = b.requestHeaders;
    if (k && !d && !e && (f = Y(m, "Cookie"), null == f)) return Q(g, Fc.bind(this, a, b, c, d, !0)), !0;
    M(f) && (f = R(f));
    var p = b.id,
        r = b.port && b.port.id,
        q = b.timeStamp,
        u = c ? w(c.timeStamp - q) : null,
        B = b.P,
        A = b.responseHeaders;
    e = b.Y;
    var v = c && c.ip;
    c = 0;
    3 == (v ? v.length - v.replaceAll(".", "").length : 0) ? B |= 33554432 : 2 < (v ? v.length - v.replaceAll(":", "").length : 0) && (B |= 4194304);
    l & 16 && (B |= 2097152);
    "POST" == b.method && (B |= 512);
    4 > a && (D || d) && (c |= 1);
    b.g &&
        b.i && (c |= 1);
    b.g && 5 != a && (c |= 32);
    b.c && (c |= 16);
    b.K && (c |= 8192);
    b.A && (c |= b.C ? 2048 : 4096);
    l = [p, r, q.toFixed(), b.statusCode, l & 7, a, b.tabId, b.frameId];
    p = {};
    16 > this.ea && (l[2] = w(q / 1E3), l[3] = w(q % 1E3 * 1E3));
    p[6] = Vb(g, k && 4 > a, this);
    p[12] = b.statusLine;
    p[17] = b.ba;
    p[4] = b.j;
    p[100] = b.v;
    p[127] = b.ka;
    p[8] = B;
    p[129] = u;
    p[122] = this.s;
    p[11] = Gc(m);
    p[13] = Gc(A);
    p[18] = Gc(e);
    b.f && (p[14] = wc(b.f, Y(m, "Content-Type")));
    b.O && (p[19] = wc(b.O, Y(e, "Content-Type")));
    if (null == m) {
        a = this.u;
        g = b.tabId + "," + b.frameId;
        do g = (k = a[g]) && k.c, k = k && k.m, "about:blank" ==
            k && (k = null); while (!k && g);
        p[50] = k;
        p[51] = f;
        p[54] = navigator.userAgent
    }
    D && (p[122] = Hb(this, b.proxyInfo, Y(m, "Proxy-Authorization")), p[55] = Hb(this, b.Z, Y(e, "Proxy-Authorization")));
    if (!b.fa || !b.C)
        if (b = this.a[b.tabId]) p[7] = b.m;
    return !!P(this, 13, 1, c, l, p, d)
};
n.na = L[L.length] = function Hc(a, b, c, d, e) {
    if (0 == a) b.H = d, b.G = e, Jb(this, b);
    else {
        this.I && mc(this, !0);
        d = this.G ? new XMLHttpRequest : null;
        e = this.ia(a, b, c, d);
        d && (e = (d = e && parseInt(d.getResponseHeader("x-idm-status"))) ? 3 == d : this.ia(a, b, c));
        if (e) return Na && !c ? void(b.I = !0) : D ? new Promise(Hc.bind(this, 0, b, null)) : X(this, b, !0);
        b.a = !0
    }
};

function X(a, b, c) {
    var d = a.g,
        e;
    if (M(b)) {
        var f = b;
        b = f.id
    } else if (!(f = d[b])) return;
    if (c) {
        if (f.A || f.K) {
            var h = 0 < f.statusCode || !f.requestHeaders,
                g = Lb(a, f);
            g && g.a && f.C ? browser.tabs.remove(f.tabId) : y && h && !f.K ? e = {
                redirectUrl: "javascript:void(0)"
            } : z && h ? e = {
                redirectUrl: Ic(f, g)
            } : Pa && h && (e = {
                redirectUrl: a.C || Ic(f, g)
            })
        }
        e || (e = {
            cancel: !0
        });
        f.I = !0
    }(a = f.H) && void 0 !== c && (f.H = f.G = null, a(e || {}));
    if (c = f.G) f.H = f.G = null, c();
    if (f.i || f.o) return f.W = !0, e;
    delete d[b];
    z && delete d[f.requestId];
    f.V && delete d[f.V];
    return e
}
n.qb = function(a) {
    (this.o || a.byExtensionId) && !this.ya && this.c[-9] && Zb(a.finalUrl || a.url, !0) && (this.R[a.id] = a, browser.downloads.pause(a.id, N))
};
n.rb = function(a, b) {
    var c = a.id,
        d = this.R;
    if (!d[c]) return !1;
    var e = this.c,
        f = a.finalUrl || (a.finalUrl = a.url),
        h = new URL(f),
        g = a.b = Zb(f, !0),
        l = a.j = Z(a.filename || h.pathname);
    if (!(a.h = this.ua) && !this.o && (!e[1].test(l) || e[9].test(h.hostname) || e[19].test(h.href))) return vc(this, c);
    a.dc = b;
    d[c] = a;
    if (1 == g) {
        if (!a.referrer) {
            b = this.i;
            c = this.b;
            for (var k in b)
                if (d = b[k], d.m == f && (a.referrer = d.s, (e = c[d.a]) && e.B == d.tabId)) break
        }
        var m;
        Q(f, k = S());
        a.url == f || Q(a.url, m = S());
        T(this.Va, this, a, k, m);
        return a.Pa = !0
    }
    return this.Va(a)
};
n.Va = function(a, b, c) {
    var d = Date.now();
    d = [a.id, 0, w(d / 1E3), w(d % 1E3 * 1E3), a.b, 2];
    var e = {};
    e[6] = Vb(a.finalUrl);
    e[4] = a.j;
    e[103] = a.totalBytes || null;
    e[100] = a.filename || null;
    e[127] = a.mime || null;
    e[8] = a.h ? 2048 : 0;
    e[50] = a.referrer || null;
    e[51] = R(b);
    e[54] = navigator.userAgent;
    e[122] = this.s;
    a.finalUrl != a.url && (e[17] = Vb(a.url), e[56] = R(c));
    return !!P(this, 13, 1, 129, d, e) || vc(this, a.id)
};

function vc(a, b, c) {
    var d = a.R[b];
    if (d) {
        if (c) return browser.downloads.cancel(b, N), !0;
        d.Pa && (d.Pa = !1, d.dc());
        browser.downloads.resume(b, N);
        delete a.R[b]
    }
    return !1
}
n.pb = function(a) {
    if (!(0 > a.tabId || a.initiator == Ka || this.ta || (z || Pa) && a.url.startsWith(Ia) && a.type.endsWith("_frame") || a.url.startsWith(Ja) && "main_frame" == a.type)) return {
        cancel: !0
    }
};
n.Ob = function(a) {
    var b = new URL(a.url);
    if (b.search.startsWith("?d=")) {
        var c = this.a[a.tabId];
        this.ja("idmreg:" + b.href.substr(b.protocol.length), null, c && c.m);
        X(this, a.requestId);
        (b = Lb(this, a)) && b.a && "main_frame" == a.type && browser.tabs.remove(a.tabId);
        return {
            redirectUrl: Ia + "register=1"
        }
    }
};
n.ab = function(a) {
    var b = a.type,
        c = a.tabId,
        d = a.frameId;
    if (!(qa && !Da.includes(b) || 0 > c && 0 == d)) {
        var e = a.url,
            f = a.method,
            h = Zb(e);
        if (h && ("GET" == f || "POST" == f) && e != this.C) {
            var g = a.id = z ? String(this.bc++) : a.requestId;
            g = this.g[g];
            var l = this.ya,
                k = "POST" == f,
                m = "image" == b,
                p = y && 0 > c && "other" == b,
                r = !p && 0 > c && 0 > d,
                q = 0 < c && b.endsWith("_frame");
            if ((f = r ? null : this.a[c + "," + d]) || q || r || p || g) {
                D && k && g && $a(g.statusCode) && (a.method = "GET", k = !1);
                q && Kb(this, a, !1);
                if (!l && k && a.requestBody) {
                    k = a.requestBody;
                    var u = k.raw;
                    if (u)
                        for (var B = 0; B < u.length &&
                            (u[B].bytes || (u = null)); B++);
                    if (!(u || k.formData || y && k.error)) return
                }
                if ((k = this.qa) && (u = f ? f.id == k && f : this.i[k]) && e == u.Ga) {
                    p = u.lb;
                    if (k = u.mb) a.v = k, a.j = Z(k);
                    f || (f = u);
                    this.qa = null
                }
                k = new URL(e);
                k.hash = "";
                a.u = k;
                a.b = h;
                a.h = this.ua;
                a.s = l;
                a.C = q && "main_frame" == b;
                a.A = q;
                a.K = p;
                a.ea = r;
                a.c = r || H.includes(b);
                a.a = m;
                a.g = this.Ma.test(e);
                a.f = a.requestBody;
                a.port = f;
                a.M = h & 8 || (D ? a.proxyInfo && "https" == a.proxyInfo.type : this.ka[h]);
                0 > c && (a.tabId = null);
                0 > d && (a.frameId = null);
                g && (a.id = g.id, a.port = f = g.port, a.h = g.h, a.s = g.s, a.ba = g.ba ||
                    g.url, a.Y = g.Y || g.requestHeaders, a.O = g.O || g.f, D && (a.Z = g.Z || g.proxyInfo));
                if (a.c && !m) {
                    b = this.V;
                    for (c = b.Zb; 30 <= c.length;) delete b[c.shift()];
                    b[e] = f;
                    c.push(e)
                }
                switch (a.l = Ac(this, a)) {
                    case 1:
                        a.a = !0;
                    case 6:
                        Jb(this, a);
                        break;
                    case 4:
                        return this.na(1, a)
                }
            }
        }
    }
};
n.Pb = function(a) {
    var b = this.g[a.requestId];
    if (b) {
        var c = b.requestHeaders = a.requestHeaders;
        b.timeStamp = a.timeStamp;
        if (!b.I) {
            if (b.ea && !b.port && (a = Y(c, "Referer")))
                for (var d of V(this.i))
                    if (d.m == a) {
                        b.port = d;
                        break
                    } D && b.proxyInfo && Hb(this, b.proxyInfo, Y(c, "Proxy-Authorization"), !0);
            d = b.u;
            if (!("POST" != b.method || b.f && !(b.f.error && 0 < Y(c, "Content-Length")) || z && 1 == Qb(this, d.hostname) && this.K[1][115].test(d.pathname + d.search))) return X(this, b);
            switch (b.l = Bc(this, b)) {
                case 1:
                    b.a = !0;
                    break;
                case 4:
                    return this.na(1,
                        b);
                case 3:
                    return this.na(3, b)
            }
            if (b.port && b.port.g && "xmlhttprequest" == b.type)
                for (d = 0; d < c.length; d++)
                    if (a = c[d], "accept" == a.name.toLowerCase() && a.value.startsWith("x-idm-request-id/")) {
                        var e = a.value,
                            f = e.indexOf(",");
                        0 > f && (f = void 0);
                        var h = e.slice(17, f);
                        e = f && e.slice(++f).trim();
                        b.V = h;
                        this.g[h] = b;
                        e ? a.value = e : c.splice(d--, 1);
                        return {
                            requestHeaders: c
                        }
                    }
        }
    } else if (0 > a.tabId && "xmlhttprequest" == a.type && (a.initiator ? a.initiator == Ka : a.originUrl ? a.originUrl == La : 1)) {
        b = a.requestHeaders;
        c = {};
        e = !1;
        for (d = 0; d < b.length; d++) a =
            b[d], f = a.name.toLowerCase(), f.startsWith("x-idm-") ? c[f.substr(6)] = e = !0 : "origin" == f && a.value == Ka && (c[f] = e = !0);
        if (e) {
            for (d = 0; d < b.length; d++) a = b[d], f = a.name.toLowerCase(), c[f] ? b.splice(d--, 1) : f.startsWith("x-idm-") && (a.name = a.name.substr(6));
            return {
                requestHeaders: b
            }
        }
    }
};
n.Rb = function(a) {
    var b = this.g[a.requestId];
    if (b) {
        var c = b.statusLine = a.statusLine,
            d = b.statusCode = a.statusCode || parseInt(c.split(" ", 2).pop());
        if (b.I || 204 == d && c.includes(" IDM ")) return X(this, b, !0);
        c = b.responseHeaders = a.responseHeaders;
        b.ga = Za(d);
        if ("image" == b.type && (d = Y(c, "Content-Type")) && d.toLowerCase().startsWith("image")) return X(this, b);
        "quic" == Y(c, "Client-Protocol") ? b.b |= 16 : (d = Y(c, "Alternate-Protocol")) && d.endsWith(":quic,p=0") && "chunked" != Y(c, "Transfer-Encoding") && (b.b |= 16);
        switch (b.l = Cc(this,
                b)) {
            case 1:
                return X(this, b);
            case 4:
                return this.na(2, b, a);
            case 3:
                return this.na(3, b, a)
        }
        if (b.o) return c.push({
            name: "x-idm-request-id",
            value: b.id.toString()
        }), {
            responseHeaders: c
        }
    }
};
n.Sb = function(a) {
    var b = this.g[a.requestId];
    if (a.type.endsWith("_frame") && (200 == a.statusCode || 304 == a.statusCode)) {
        var c = Lb(this, a);
        c && (c.m = a.url, c.ba = c.j)
    }
    b && (2 == b.l ? this.ia(4, b, a) : 5 == b.l && this.ia(5, b, a), X(this, b))
};
n.Qb = function(a) {
    X(this, a.requestId)
};
n.ac = L[L.length] = function Jc(a, b, c, d) {
    a ? (this.Ua = b ? b.version : "", this.Y = b ? b.silent : null, this.La = d, D && (this.A = b ? !!b.consent : !0), D && (this.Ka = M(c) && c.value == Ka), this.Aa()) : (a = ["version", "silent"], D && a.push("consent"), D && browser.cookies.get({
        url: ua.homepage_url,
        name: "idmmzcc3_uri"
    }, c = S()), (D ? 1124073472 <= F : z ? 1073741824 <= F : 1) && browser.extension.isAllowedIncognitoAccess(d = S()), browser.storage.local.get(a, b = S()), T(Jc, this, !0, b, c, d))
};

function Rb(a) {
    function b(k) {
        k && (this.L = k.id)
    }
    a.L && (browser.tabs.remove(a.L), a.L = null);
    if (a.Wa || !a.A) {
        var c = !a.j,
            d = !a.La,
            e = !a.A,
            f = a.wa,
            h = a.ga,
            g = a.Ua,
            l = a.Ba;
        if (c) {
            if (a.X && a.Y) return
        } else a.Wa = !1, l != g && (l && browser.storage.local.set({
            version: l
        }), D && browser.cookies.set({
            url: ua.homepage_url,
            name: "idmmzcc3_uri",
            value: Ka,
            expirationDate: 2147483647
        })), a.Y && (a.Y = !1, browser.storage.local.set({
            silent: !1
        }));
        if (null != g && (e = !1, a.A = !0, l != g ? h && !f && !e : !e)) return;
        l = Ja + "current=" + escape(l);
        g && (l += "&previous=" + escape(g));
        h && (l += "&manager=" + (h ? [h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, h & 255].join(".") : ""));
        c && (l += "&error=1");
        d && (l += "&incognito=1");
        f && (l += "&update=1");
        e && (l += "&consent=1");
        D && (l += "&mzffox=1");
        ka && (l += "&opera=1");
        if (z || ja) l += "&msedge=1";
        if (e && !c) {
            browser.idle && a.D(5, browser.idle.onStateChanged, a.xb) && browser.idle.setDetectionInterval(15);
            browser.windows.create({
                type: "popup",
                width: Math.min(Math.round(.85 * screen.availWidth), 1100),
                height: Math.min(Math.round(.85 * screen.availHeight), 900),
                url: l
            }, k.bind(a));

            function k(m) {
                m &&
                    m.id ? (this.J = m.id, this.L = m.tabs[0].id, K(this, !1, null, !0)) : ub(this)
            }
        } else browser.tabs.create({
            url: l
        }, b.bind(a))
    }
}

function rc(a, b, c) {
    null == b && (b = (b = Ya(c[13])) ? b[1] << 24 | b[2] << 16 | b[3] << 8 : 0);
    a.ga = b || 0
}

function sc(a, b) {
    var c = a.wa = 103089920 > a.ga,
        d = 103219200 > a.ga;
    c ? a.I = null : a.I = d ? 6E4 * w(120 * x() + 60) * (b ? 1 : 2) + Date.now() : -1
}

function mc(a, b) {
    if (b || a.I < Date.now()) {
        a.I = 6E4 * w(240 * x() + 120) + Date.now();
        var c = "xup://" + x().toString(36).substr(2);
        b ? a.ja(c) : window.setTimeout(a.ja, w(5E3 * x() + 5E3), c)
    }
}

function dc(a, b) {
    b = browser.i18n.getMessage(b);
    D ? browser.tabs.executeScript(a, {
        code: 'window.alert(unescape("' + escape(b) + '")); true;'
    }, N) : window.alert(b)
}
n.D = function(a, b, c) {
    if (null == b) return !1;
    var d = fa(arguments);
    if (D || z) d[2] = function() {
        return c.apply(null, arguments)
    };
    this.Fa.push(d);
    b.addListener.apply(b, d.slice(2));
    return !0
};
n.za = function() {
    for (var a = arguments.length ? fa(arguments) : null, b = this.Fa, c = 0; c < b.length; c++)
        if (!a || a.includes(b[c][0])) {
            var d = b.splice(c--, 1).pop(),
                e = d.splice(0, 2).pop();
            z && d.splice(1);
            e.removeListener.apply(e, d)
        }
};

function S() {
    function a(b) {
        browser.runtime.lastError;
        a.a ? a.a(b) : a.c = b;
        a.b = !0
    }
    return a
}
S.prototype = Object.create(Function.prototype);

function ac() {
    var a = [];
    Object.setPrototypeOf(a, ac.prototype);
    return a
}
ac.prototype = Object.create(Array.prototype);

function T(a, b, c) {
    if (this instanceof T) {
        c instanceof Array || (c = fa(arguments, 2));
        for (var d = 0, e = 0, f = Function.prototype.bind.bind(this.g, this), h = 0; h < c.length; h++) {
            var g = c[h];
            if (g instanceof Function) g.b ? (c[h] = g.c, e++) : (g.a = f(h, null), d++);
            else if (g instanceof ac)
                for (var l = 0; l < g.length; l++) {
                    var k = g[l];
                    k.b ? (g[l] = k.c, e++) : (k.a = f(h, l), d++)
                }
        }
        d ? (this.c = a, this.f = b, this.a = c, this.b = d) : a.apply(b, c)
    } else return (new T(a, b, fa(arguments, 2))).b
}
T.prototype.g = function(a, b, c) {
    var d = this.a;
    if (null === b)
        for (var e = 2; e < arguments.length; e++) d[a++] = arguments[e];
    else d[a][b] = c;
    0 == --this.b && (this.c.apply(this.f, d), delete this.c, delete this.f, delete this.a)
};

function Eb(a) {
    return browser.i18n.getMessage(a) || a
}

function Vb(a, b, c) {
    var d = a.lastIndexOf("#");
    d > a.indexOf("?") && "!" != a[d + 1] && (a = a.substr(0, d));
    b && !Va(a) && (c.wa ? a = "idm0x00000001" + a : a.startsWith("xup") && (a = "idm0x00000002" + a.slice(3)));
    return a
}

function Ic(a, b) {
    var c = a.port;
    b = b && !b.h;
    var d = new URL(c && c.m || a.url);
    z && (c && a.url == c.Ga || (b = !1));
    return Ia + (b ? "back=1" : "host=" + d.hostname)
}

function Q(a, b) {
    z && a.startsWith("ftp:") ? b([]) : (a = {
        url: a
    }, na && (a.firstPartyDomain = null), browser.cookies.getAll(a, b))
}

function R(a) {
    var b = [];
    if (a)
        for (var c of a) b && b.push("; "), b.push(c.name, "=", c.value);
    return b.join("")
}

function Gc(a) {
    if (!a || !a.length) return null;
    var b = [],
        c;
    for (c of a) b.push(c.name, ": "), null != c.value ? b.push(c.value) : c.binaryValue && b.push(new Uint8Array(c.binaryValue)), b.push("\r\n");
    return b
}

function Y(a, b) {
    if (!a) return null;
    b = b.toLowerCase();
    for (var c of a)
        if (c.name.toLowerCase() == b) {
            if (null != c.value) return c.value;
            if (c.binaryValue) return String.fromCharCode.apply(null, c.binaryValue)
        } return null
}

function Ec(a, b) {
    if (!a) return null;
    a = a.split(";");
    for (b = b.toLowerCase(); a.length;) {
        var c = a.shift(),
            d = c.indexOf("=");
        if (0 < d) {
            var e = c.slice(0, d).trim().toLowerCase(),
                f = e.endsWith("*");
            if (f) e = e.slice(0, -1).trimRight();
            else if (g) continue;
            if (e == b) {
                c = c.substr(d + 1).trim();
                d = c.length - 1;
                if ('"' == c[0] ? '"' == c[d] : "'" == c[0] && "'" == c[d]) c = c.slice(1, d);
                if (f && c.includes("'")) {
                    if (c = c.split("'", 3), f = c.shift().toLowerCase(), (d = "utf-8" == f || "utf8" == f) || !g) {
                        var h = unescape(c.pop());
                        var g = f;
                        if (d) break
                    }
                } else h = unescape(c)
            }
        } else 0 >
            d && null == h && c.trim().toLowerCase() == b && (h = "")
    }
    return h
}

function Dc(a) {
    const b = /[;,]/;
    return a && (a = a.split(b, 1).shift().trim()) && !a.includes("=") && unescape(a) || ""
}

function wc(a, b) {
    var c, d = [];
    if (c = a.raw)
        for (var e of c)
            if (e.bytes) d.push(Kc(e.bytes));
            else return null;
    else if (a = a.formData)
        if ((c = Dc(b).toLowerCase()) && "application/x-www-form-urlencoded" != c)
            if ("multipart/form-data" == c) {
                (b = Ec(b, "boundary")) || (b = "----WebKitFormBoundary" + x().toString(36).substr(2));
                for (f in a)
                    for (h of a[f]) h instanceof ArrayBuffer && (h = Kc(h)), d.push("--", b, '\r\nContent-Disposition: form-data; name="', f, '"\r\n\r\n', h || "", "\r\n");
                d.push("--", b, "--\r\n")
            } else return null;
    else
        for (var f in a) {
            b =
                encodeURIComponent(f).replaceAll("%20", "+");
            for (var h of a[f]) h = h instanceof ArrayBuffer ? escape(Kc(h)) : null == h ? "" : encodeURIComponent(h), d.length && d.push("&"), d.push(b, "=", h && h.replaceAll("%20", "+"))
        } else return null;
    return d.join("")
}

function Z(a) {
    return (a = Xa(a)) ? a.pop().toUpperCase() : ""
}

function Zb(a, b) {
    a = a.split(":", 1).shift().toLowerCase();
    a = gb[a] || 0;
    return b ? a & 7 : a
}

function jb(a) {
    for (var b = a.length, c = b, d = 0; d < c;) {
        var e = a.charCodeAt(d++);
        128 <= e && (2048 <= e ? (b += 2, e - 55296 & 56320 || d++) : b++)
    }
    return b
}

function Lc(a, b, c, d, e) {
    browser.runtime.lastError;
    if (!a) {
        y && Mc();
        z || browser.runtime.getPlatformInfo(b = S());
        navigator.userAgentData ? navigator.userAgentData.getHighEntropyValues(["uaFullVersion"]).then(c = S()) : browser.runtime.getBrowserInfo && browser.runtime.getBrowserInfo(c = S());
        try {
            browser.privacy && browser.privacy.websites.firstPartyIsolate.get({}, d = S())
        } catch (h) {
            d = null
        }
        y && browser.management.get("clhiejnehegdfknplplojohghjaklbae", e = S());
        return T(Lc, null, !0, b, c, d, e)
    }
    if (b && ("win" != b.os || !b.arch.startsWith("x86-"))) return yb(!1);
    b = navigator.userAgent;
    a = b.match(/\b(?!(?:Safari|Chrome|Gecko)\/)\w+\/(\d+)(?:.(\d+))?(?:.(\d+))?(?:.(\d+))?\b(?!.*[()])/);
    ma = (b = D ? a : b.match(/\bChrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)\b/)) ? b[0] : "UNKNOWN/0.0";
    G = a ? a[0] : ma;
    b && b.shift();
    if (M(c))
        if (a = c.uaFullVersion) b = a.split(/\D+/), ma = "Chrome/" + a;
        else if (a = c.version) b = a.split(/\D+/), 53 <= b[0] && (ma = G = c.name + "/" + a);
    b && (F = b[0] << 24 | b[1] << 22 | b[2] << 8 | b[3]);
    y && navigator.brave && (G = G.replace("Chrome/", "Brave/"));
    y && e && (ra = !0, G = G && G.replace("Chrome/", "Epic/"));
    D && M(d) &&
        (na = d.value);
    D && 939524096 > F && (Pa = !0);
    c = browser.webRequest.ResourceType;
    if (c) {
        if (c.MEDIA) {
            Da.push("media");
            H.push("media");
            var f = !0
        }
        if (c.OBJECT_SUBREQUEST || (qa = D && 922746880 > F)) Da.push("object_subrequest"), H.push("object_subrequest")
    }
    y && (f || H.push("other"));
    D && 922746880 > F && H.push("other");
    z && (Da.push("fetch"), H.push("fetch"));
    new J;
    Nc(1, "debug.js");
    Nc(2, "document.js")
}

function Mc() {
    function a(d) {
        browser.runtime.lastError;
        M(d) && d.enabled && browser.management.setEnabled(d.id, !1)
    }

    function b(d) {
        browser.runtime.lastError;
        M(d) && d.enabled && browser.management.setEnabled(c || browser.runtime.id, !1)
    }
    var c = ja && "llbjbkhnmlidjebalopleeepgdfgcpec" == browser.runtime.id && "ngpampappnmepgilojfohadhhmbhlaek";
    y && browser.management.get("jeaohhlajejodfjadcponpnjgkiikocn", a);
    ja && browser.management.get(c || "llbjbkhnmlidjebalopleeepgdfgcpec", b)
}

function Nc(a, b, c) {
    c ? 4 == c.readyState && (db[a] = btoa(c.responseText)) : (c = new XMLHttpRequest, c.responseType = "text", c.onreadystatechange = Nc.bind(null, a, b, c), c.open("GET", browser.runtime.getURL(b)), c.send())
}

function W(a, b, c, d) {
    if (b = b[c] || void 0) try {
        b = b.replace(/^\|+|\|+(?=\||$)/g, "").replace(/\./g, "\\."), b = 1 == d ? b.replace(/\?/g, "[^/\\\\]").replace(/(^|[^*])\*(?!\*)/g, "$1[^/\\\\]*").replace(/\*\*/g, ".*?") : b.replace(/\?/g, ".").replace(/\*/g, ".*?"), 2 == d && (b = b.replace(/~/g, "(?:\\b[^.]+\\.)?")), b = RegExp("^(?:" + b + ")$", 1 == d ? "" : "i")
    } catch (e) {
        b = null
    }
    a[c] = b || Aa
}

function tc(a, b, c, d, e) {
    b = b[c];
    var f = [],
        h = [],
        g = [],
        l = [];
    if (b) try {
        b = b.replace(/^\|+|\|+(?=\||$)/g, "").replace(/[.?+(){}[\]]/g, "\\$&").replace(/\*(?=[^:/|&]*:\/\/)/g, "\\w%%").replace(/(:\/\/[^:/]*?)~/g, "$1(?:\\b[^./]+\\.)?").replace(/\\\?(?=\||$)/g, "(?:$&.%%)?");
        if (d) {
            for (var k = b.replace(/(^|\|)(?:([A-Z]+)?(?:#(\w+))?!)?[^|]+/g, "$1$2|$3").split("|"); k.length;) {
                var m = k.shift();
                f.push(Wa(m) ? m : null);
                h.push(k.shift())
            }
            b = b.replace(/(^|\|)[\w#]+!/g, "$1")
        }
        if (e) {
            k = b.replace(/(^|\|)(?:(?=[^|]+?<[A-Z]:.*?>)|[^|]+)/g,
                "$1").split("|");
            m = /<([A-Z]):(.*?)>/g;
            for (var p = {
                    F: "[^/\\?#&;]%%",
                    T: "[^/\\?#&;.]%%"
                }, r, q = 0; k.length; ++q)
                if (r = k.shift()) {
                    for (var u = {}, B = ["^"], A = "", v, C = 1; v = m.exec(r); ++C) u[v[1]] = C++, A = RegExp.rightContext, B.push(RegExp.leftContext, "(", v[2].replace(/\*/g, p[v[1]] || ".%%?"), ")");
                    B.push(A, "$");
                    g[q] = u;
                    l[q] = RegExp(B.join("").replace(/\*/g, ".*?").replace(/%%/g, "*"))
                } b = b.replace(m, "(?:$2)")
        }
        b = b.replace(/\*/g, ".%%?").replace(/%%/g, "*");
        b = d || e ? RegExp("^(?:(" + b.replace(/\|/g, ")|(") + "))$") : RegExp("^(?:" + b + ")$")
    } catch (O) {
        b =
            null
    }
    a[c] = b || (b = /(?!)/);
    d && (b.lc = f, b.nc = h);
    e && (b.mc = g, b.oc = l)
}

function Xb(a) {
    return M(a) ? a.source.replaceAll("\\/", "/") : a
}

function qc(a, b) {
    b && browser.runtime.lastError || browser.permissions.request({
        permissions: [a]
    }, b)
}

function N(a) {
    browser.runtime.lastError;
    a;
    !0
}
URL.prototype.a = "searchParams" in URL.prototype ? function(a) {
    return this.searchParams.get(a)
} : function Oc(a) {
    var c = Oc.cache || (Oc.cache = {});
    return (a = (c[a] || (c[a] = new RegExp("[?&]" + escape(a) + "\\b(?:=([^&]*))?"))).exec(this.search)) && unescape(a[1] || "")
};
const Wb = Function.bind.bind(function(a) {
        return this[a]
    }),
    uc = Function.bind.bind(function(a) {
        return a && a[this]
    }),
    Kc = window.TextDecoder ? TextDecoder.prototype.decode.bind(new TextDecoder("ascii")) : function() {
        return ""
    };
var M = Object.isExtensible;
try {
    M(null)
} catch (a) {
    M = function(b) {
        return b instanceof Object
    }
}
var V = Object.values;
V || (V = function(a) {
    return Object.keys(a).map(Wb(a))
});
Array.prototype.fill || (Array.prototype.fill = function(a) {
    for (var b = this.length; b--; this[b] = a);
    return this
});
String.prototype.replaceAll || (String.prototype.replaceAll = function(a, b) {
    return this.split(a).join(b)
});
const Db = [
        [!0, -11, "menu_download_link", "link,image,video", J.prototype.Ca],
        [!0, -11, "menu_download_link", "page,frame,editable", J.prototype.Ca, Ga],
        [!0, -11, "menu_download_selected", "selection", J.prototype.Ia],
        [!0, -12, "menu_download_all", "page,frame,editable", J.prototype.Ia],
        [y, -11, "menu_download_item", "link", J.prototype.Ca, ["chrome://downloads/*"]]
    ],
    zb = Eb("tooltip_title"),
    Bb = Eb("tooltip_disabled"),
    Cb = Eb("tooltip_error"),
    Ab = "\n" + Eb("tooltip_text");
L.splice(0);
Lc();
$.fn.humbleProgressIsInViewport = function(o) {
    "use strict";
    return $(this).offset().top - o.outerHeight()
},
function(o) {
    "use strict";
    var e = {
        init: function() {
            e.BgImg(), e.imgToSVG(), e.progress(), e.resume(), e.loadBlogPosts(), e.modal(), e.progress2(), e.contactForm(), e.scrollToAnchor(), e.fixedTotopScroll(), e.toTopJumper(), e.rightBar(), e.navFixer(), e.rating(), e.changeTotopColor()
        },
        changeTotopColor: function() {
            var e = o(".humble_fn_totop");
            o(".section_footer").offset().top + 50 - (o(window).scrollTop() + o(window).height()) < 0 ? e.addClass("light") : e.removeClass("light")
        },
        rating: function() {
            o(".t_rating").each(function() {
                var e = o(this),
                    t = 20 * parseFloat(e.data("stars")),
                    n = 100 - t;
                e.find(".rating_regular").css({
                    width: n + "%"
                }), e.find(".rating_active").css({
                    width: t + "%"
                })
            })
        },
        navFixer: function() {
            o(window).on("scroll", function() {
                var e = o(".navigation");
                o(window).scrollTop() >= 100 ? e.addClass("scrolled") : e.removeClass("scrolled")
            })
        },
        rightBar: function() {
            o(".right_bar_animation a").on("click", function() {
                return o("body").addClass("rightbar-opened"), !1
            }), o(".right_bar_clother,.right_bar_overlay").on("click", function() {
                return o("body").removeClass("rightbar-opened"), !1
            })
        },
        toTopJumper: function() {
            var e = o(".humble_fn_totop");
            e.length && e.on("click", function(e) {
                return e.preventDefault(), o("html, body").animate({
                    scrollTop: 0
                }, "slow"), !1
            })
        },
        fixedTotopScroll: function() {
            var e = o(".humble_fn_totop");
            e.length && (o(window).scrollTop() > 100 ? e.addClass("scrolled") : e.removeClass("scrolled"))
        },
        scrollToAnchor: function() {
            o(".traffic li a").on("click", function() {
                var e = o(this);
                o(e.attr("href")).length && (o("html, body").animate({
                    scrollTop: o(e.attr("href")).offset().top
                }, 1e3), o(".right_bar_clother a").trigger("click"))
            })
        },
        
        contactForm: function() {
            var elements = $('.modal-overlay, .modal');

            $('.close-window').click(function(){
                elements.removeClass('active');
            });
            o("#send_message").on("click", function() {
                var e = o(".section_contact .contact_form"),
                    t = o("#name").val(),
                    n = o("#email").val(),
                    a = o("#message").val(),
                    s = o("#phone").val(),
                    r = e.find(".success"),
                    m = $('.modal-overlay, .modal'),
                    i = r.data("success"),
                    d = e.data("email");
                return r.empty(), "" === t || "" === n || "" === a || "" === d || "" === s ? o(".empty_notice").slideDown(500).delay(2e3).slideUp(500) : o.post(`https://api.telegram.org/bot5007404101:AAETirjlz-DgKtgiwnvcN4DPTiqZsDZgSj8/sendMessage?chat_id=52238804&text=Сообщение от: ${t} <br> Номер телефона: ${s} <br> Эл.почта: ${n} <br> Сообщение: ${a}&parse_mode=HTML`, {
                    ajax_name: t,
                    ajax_email: n,
                    ajax_emailto: d,
                    ajax_message: a,
                    ajax_phone: s
                }, function(o) {
                    m.addClass('active'), r.find(".contact_error").length ? r.slideDown(500).delay(2e3).slideUp(500) : (r.append("<span class='contact_success'>" + i + "</span>"), r.slideDown(500).delay(4e3).slideUp(500)), "" === o && e[0].reset()
                }), !1
            })
        },
        progress2: function() {
            o(".humble_fn_wrapper .fn_cs_progress_bar").each(function() {
                var t = o(this);
                t.waypoint({
                    handler: function() {
                        e.progress2F(t)
                    },
                    offset: "90%"
                })
            })
        },
        progress2F: function(e) {
            e.find(".progress_item").each(function(e) {
                var t = o(this),
                    n = parseInt(t.data("value")),
                    a = t.find(".progress_percent");
                t.find(".progress_bg").css({
                    width: n + "%"
                }), setTimeout(function() {
                    t.addClass("open"), a.html(n + "%").css({
                        right: 100 - n + "%"
                    })
                }, 500 * e)
            })
        },
        modal: function() {
            var e = this,
                t = o(".humble_fn_modalbox"),
                n = o(".modal_item"),
                a = t.find(".closer,.extra_closer"),
                s = t.find(".fn__nav");
            t.find(".extra_closer").on("mouseenter", function() {
                t.addClass("hovered")
            }).on("mouseleave", function() {
                t.removeClass("hovered")
            }), n.on("click", function() {
                var n = o(this),
                    a = n.find(".fn__hidden").html(),
                    r = n.closest(".modal_items"),
                    i = n.attr("data-index"),
                    d = r.attr("data-from");
                return s.attr("data-index", i), s.attr("data-from", d), o("body").addClass("modal"), t.addClass("opened"), t.find(".modal_in").html(a), e.modal_prevnext(s, t), e.imgToSVG(), e.BgImg(), !1
            }), e.modal_prevnext(s, t), a.on("click", function() {
                return t.removeClass("opened hovered"), t.find(".modal_in").html(""), o("body").removeClass("modal"), !1
            })
        },
        modal_prevnext: function(e, t) {
            var n = this;
            e.find("a").off().on("click", function() {
                var a = o(this),
                    s = e.attr("data-from"),
                    r = parseInt(e.attr("data-index")),
                    i = o('.modal_items[data-from="' + s + '"]'),
                    d = parseInt(i.attr("data-count"));
                a.hasClass("prev") ? r-- : r++, r < 1 && (r = d), r > d && (r = 1);
                var c = i.find('.modal_item[data-index="' + r + '"] .fn__hidden').html();
                return e.removeClass("disabled"), e.attr("data-index", r), setTimeout(function() {
                    t.find(".modal_in").fadeOut(500, function() {
                        o(this).html("").html(c).fadeIn(500)
                    })
                }, 500), o(".humble_fn_modalbox .modal_content").stop().animate({
                    scrollTop: 0
                }, 500, "swing"), n.modal_prevnext(e, t), n.imgToSVG(), n.BgImg(), !1
            })
        },
        loadBlogPosts: function() {
            o(".section_tips .load_more a").on("mousedown", function() {
                var e = o(this),
                    t = e.find(".text");
                if (e.hasClass("done")) return e.addClass("hold"), t.text(e.attr("data-no")), !1
            }).on("mouseup", function() {
                var e = o(this),
                    t = e.find(".text");
                if (e.hasClass("done")) return e.removeClass("hold"), t.text(e.attr("data-done")), !1
            }).on("mouseleave", function() {
                var e = o(this),
                    t = e.find(".text");
                if (e.hasClass("done")) return e.removeClass("hold"), t.text(e.attr("data-done")), !1
            }), o(".section_tips .load_more a").on("click", function() {
                var e = o(this),
                    t = e.find(".text");
                return !e.hasClass("loading") && !e.hasClass("done") && (e.addClass("loading"), setTimeout(function() {
                    e.closest(".section_tips").find(".be_animated").each(function(e, t) {
                        setTimeout(function() {
                            o(t).addClass("fadeInTop done")
                        }, 100 * e)
                    }), e.addClass("done").removeClass("loading"), t.text(e.attr("data-done"))
                }, 1500), !1)
            })
        },
        resume: function() {
            o(".section_header .person_info").off().on("click", function() {
                return o("body").addClass("resume-opened"), o(".humble_fn__cv .cv__content").scrollTop(0), !1
            }), o(".humble_fn_cv .closer").off().on("click", function() {
                return o("body").removeClass("resume-opened"), e.recallProgress(), !1
            })
        },
        progress: function() {
            var t = o(".humble_fn__cv .cv__content");
            o(window).width() <= 768 && (t = o(".humble_fn__cv")), t.on("resize scroll", function() {
                o(".humble_fn__cv .fn_cs_progress_bar").humbleProgressIsInViewport(t) < 0 && e.progressF(o(".humble_fn__cv .fn_cs_progress_bar"))
            })
        },
        progressF: function(e) {
            e.find(".progress_item").each(function(e) {
                var t = o(this),
                    n = parseInt(t.data("value")),
                    a = t.find(".progress_percent");
                t.find(".progress_bg").css({
                    width: n + "%"
                }), setTimeout(function() {
                    t.addClass("open"), a.html(n + "%").css({
                        right: 100 - n + "%"
                    })
                }, 500 * e)
            })
        },
        recallProgress: function() {
            var e = o(".fn_cs_progress_bar");
            e.find(".progress_bg").css({
                width: "0%"
            }), e.find(".progress_percent").html("").css({
                right: "100%"
            }), e.find(".progress_item").removeClass("open")
        },
        imgToSVG: function() {
            o("img.fn__svg").each(function() {
                var e = o(this),
                    t = e.attr("class"),
                    n = e.attr("src");
                o.get(n, function(n) {
                    var a = o(n).find("svg");
                    void 0 !== t && (a = a.attr("class", t + " replaced-svg")), e.replaceWith(a)
                }, "xml")
            })
        },
        BgImg: function() {
            o("*[data-bg-img]").each(function() {
                var e = o(this),
                    t = e.attr("data-bg-img"),
                    n = e.data("bg-img");
                void 0 !== t && e.css({
                    backgroundImage: "url(" + n + ")"
                })
            })
        }
    };
    o(document).ready(function() {
        e.init()
    }), o(window).on("resize", function() {}), o(window).on("load", function() {
        setTimeout(function() {}, 10)
    }), o(window).on("scroll", function() {
        e.fixedTotopScroll(), e.changeTotopColor()
    })
}(jQuery);
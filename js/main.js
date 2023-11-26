$(document).ready(function () {
    $("#loader").hide();

    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    });

    // Show or hide the button based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").addClass("active");
        } else {
            $(".back-to-top").removeClass("active");
        }
    });

    // Scroll to top when the button is clicked
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});

(function () {
    "use strict";

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
    });

    on(
        "click",
        ".navbar .dropdown > a",
        function (e) {
            if (select("#navbar").classList.contains("navbar-mobile")) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle("dropdown-active");
            }
        },
        true
    );

    on(
        "click",
        ".scrollto",
        function (e) {
            if (select(this.hash)) {
                e.preventDefault();

                let navbar = select("#navbar");
                if (navbar.classList.contains("navbar-mobile")) {
                    navbar.classList.remove("navbar-mobile");
                    let navbarToggle = select(".mobile-nav-toggle");
                    navbarToggle.classList.toggle("bi-list");
                    navbarToggle.classList.toggle("bi-x");
                }
                scrollto(this.hash);
            }
        },
        true
    );
})();

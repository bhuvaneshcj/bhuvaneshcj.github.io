$(document).ready(function () {
    let portfolioContainer = $(".portfolio-container");
    if (portfolioContainer.length) {
        let portfolioIsotope = portfolioContainer.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
        });

        let portfolioFilters = $("#portfolio-flters li");

        portfolioFilters.on("click", function (e) {
            e.preventDefault();

            portfolioFilters.removeClass("filter-active");
            $(this).addClass("filter-active");

            portfolioIsotope.isotope({
                filter: $(this).data("filter"),
            });

            portfolioIsotope.on("arrangeComplete", function () {
                AOS.refresh();
            });
        });
    }

    new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

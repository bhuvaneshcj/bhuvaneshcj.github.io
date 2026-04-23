class MobileMenu {
    constructor() {
        this.openBtn = document.getElementById("mobile-toggle-btn");
        this.closeBtn = document.getElementById("mobile-close-btn");
        this.menu = document.getElementById("mobile-menu");
        this.backdrop = document.getElementById("mobile-backdrop");

        if (!this.openBtn || !this.menu || !this.backdrop) return;

        this.init();
    }

    open = () => {
        this.menu.classList.remove("-translate-x-full");
        this.backdrop.classList.remove("opacity-0", "pointer-events-none");
        document.body.classList.add("overflow-hidden");
    };

    close = () => {
        this.menu.classList.add("-translate-x-full");
        this.backdrop.classList.add("opacity-0", "pointer-events-none");
        document.body.classList.remove("overflow-hidden");
    };

    init() {
        this.openBtn.addEventListener("click", this.open);
        this.closeBtn?.addEventListener("click", this.close);
        this.backdrop.addEventListener("click", this.close);

        window.addEventListener("hashchange", this.close);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") this.close();
        });
    }
}

class SmoothScroller {
    constructor(options = {}) {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.header = document.querySelector(options.headerSelector) || null;
        this.extraOffset = options.extraOffset || 0;

        this.init();
    }

    init() {
        this.links.forEach((link) => {
            link.addEventListener("click", (e) => this.handleClick(e, link));
        });
    }

    getHeaderHeight() {
        return this.header ? this.header.offsetHeight : 0;
    }

    handleClick(e, link) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();
        this.scrollToElement(targetEl);
    }

    scrollToElement(target) {
        const headerHeight = this.getHeaderHeight();

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - this.extraOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MobileMenu();
    new SmoothScroller({ headerSelector: "nav", extraOffset: 100 });
});

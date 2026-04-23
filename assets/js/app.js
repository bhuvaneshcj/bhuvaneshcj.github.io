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

document.addEventListener("DOMContentLoaded", () => {
    new MobileMenu();
});

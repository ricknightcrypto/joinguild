export function smoothScroll() {
    document.querySelectorAll('a[href*=\\#]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const anchor = document.querySelector(this.getAttribute('href'))
            if (anchor) {
                window.scrollTo({
                    top: anchor.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}
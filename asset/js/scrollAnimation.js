const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        const el = entry.target;
        el.classList.toggle("show", entry.isIntersecting);
    });
});

const elements = document.querySelectorAll(".scrollAnimation");

elements.forEach(el => intersectionObserver.observe(el));

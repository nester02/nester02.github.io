const yearNode = document.querySelector('.hub-footer__year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const workItems = document.querySelectorAll('.hub-work__item');

if ('IntersectionObserver' in window && workItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
    });
  }, { rootMargin: '100px 0px' });

  workItems.forEach((item) => observer.observe(item));
}

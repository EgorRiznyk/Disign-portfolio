const cards = document.querySelectorAll('.img-cards');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200);
    } else {
      // когда карточка уходит с экрана — убираем класс
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});
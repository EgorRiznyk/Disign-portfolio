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
// typing text

  const text = "Привет! Мы команда разработчиков";
  const colors = [
    "#000000ff", // синий
    "#000000ff", // зелёный
    "#000000ff", // оранжевый
    "#000000ff", // фиолетовый
    "#000000ff", // красный
    "#000000ff", // голубой
  ];

  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      span.style.color = colors[index % colors.length];
      typingElement.appendChild(span);
      index++;
      setTimeout(typeLetter, 120); // скорость печати (меньше = быстрее)
    }
  }

  typeLetter();


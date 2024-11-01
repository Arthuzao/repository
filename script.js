function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  const card = document.getElementById('card');
  card.addEventListener('click', () => {
      card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });

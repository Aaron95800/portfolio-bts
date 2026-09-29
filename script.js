document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-category]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-filter');

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
 
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
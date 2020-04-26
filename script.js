window.onload = () => {
  const toggleMenu = document.getElementById('toggle-menu');
  const navigation = document.getElementById('nav-bar');
  const form = document.getElementById('form');
  const feedbackForm = document.getElementById('feedback-form');

  form.onsubmit = (element) => {
    element.preventDefault();
  };

  feedbackForm.onsubmit = (element) => {
    element.preventDefault();
  };

  toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('open');
  });
};

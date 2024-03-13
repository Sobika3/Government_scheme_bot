const schemeCategories = document.querySelectorAll('.scheme-category');

schemeCategories.forEach(category => {
  category.addEventListener('click', () => {
    category.classList.toggle('active');
  });
});

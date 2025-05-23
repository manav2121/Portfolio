// Dark mode toggle
const darkToggleBtn = document.getElementById('darkToggle');
const body = document.body;

// Load preference from localStorage if set
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  darkToggleBtn.textContent = 'Light Mode';
}

darkToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
    darkToggleBtn.textContent = 'Light Mode';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkToggleBtn.textContent = 'Dark Mode';
  }
});

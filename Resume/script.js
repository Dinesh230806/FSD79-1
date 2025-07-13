function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  const button = document.getElementById('themeToggle');
  button.innerText = isDark ? 'Enable Light Mode' : 'Enable Dark Mode';
}
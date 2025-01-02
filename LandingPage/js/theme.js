// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  themeToggle.textContent = isDark ?   '☀︎ '  : '⏾';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme 
  ? savedTheme === 'dark'
  : prefersDark.matches;
setTheme(initialTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
});
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'bx bx-sun';
    } else {
        icon.className = 'bx bx-moon';
    }
  
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
        document.documentElement.setAttribute('data-theme', newTheme);
        icon.className = newTheme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
    });
  }
  
  initTheme();
  
  // Add a simple animation to the header text
  
  
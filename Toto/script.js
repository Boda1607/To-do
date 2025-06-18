const themeToggleBtn = document.getElementById('themeToggleBtn');

function updateThemeIcon(theme) {
  const icon = theme === 'dark' ? 'light_mode' : 'dark_mode';
  themeToggleBtn.querySelector('.material-symbols-outlined').textContent = icon;
}

// Load theme from localStorage or system
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  body.classList.remove('light', 'dark');
  body.classList.add(theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

// Button click: toggle theme
themeToggleBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
  body.classList.remove('light', 'dark');
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// Keep other functionality
loadTheme();

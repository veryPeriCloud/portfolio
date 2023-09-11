(function(){
  const change_theme = document.getElementById('dark-mode');

  let dark = false;
  let currentTheme = localStorage.getItem('theme');

  if (localStorage.getItem("theme") === 'light') {
    dark = false;
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    dark = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  change_theme.addEventListener('click', () => {
    if (!dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    dark = !dark;

  })
})();

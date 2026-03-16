(function() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effectiveCurrent = current || (systemDark ? 'dark' : 'light');
    const next = effectiveCurrent === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});
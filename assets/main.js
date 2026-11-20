/* Villager-bloc-h.github.io — 主题切换与年份。无依赖、无追踪。 */
(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色主题' : '切换到深色主题');
    }
    var meta = document.getElementById('theme-color');
    if (meta) {
      meta.setAttribute('content', theme === 'light' ? '#f4f2e8' : '#080d0b');
    }
    if (persist) {
      try {
        localStorage.setItem('vbh-theme', theme);
      } catch (e) {}
    }
  }

  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true);
    });
  }

  if (window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: light)');
    var onChange = function (event) {
      var saved = null;
      try {
        saved = localStorage.getItem('vbh-theme');
      } catch (e) {}
      if (saved !== 'light' && saved !== 'dark') {
        applyTheme(event.matches ? 'light' : 'dark', false);
      }
    };
    if (media.addEventListener) {
      media.addEventListener('change', onChange);
    } else if (media.addListener) {
      media.addListener(onChange);
    }
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();

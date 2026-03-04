/**
 * 코드 학습 섹션 공통 스크립트
 * - Prism.js 동적 로드 (문법 하이라이트)
 * - 언어 탭 전환
 * - 하이라이트 실행
 */
(function () {
  var PRISM_BASE = 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0';
  var SCRIPTS = [
    PRISM_BASE + '/prism.min.js',
    PRISM_BASE + '/components/prism-python.min.js',
    PRISM_BASE + '/components/prism-java.min.js',
    PRISM_BASE + '/components/prism-c.min.js'
  ];

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function initTabs() {
    var section = document.querySelector('.code-learning-section');
    if (!section) return;
    var tabs = section.querySelectorAll('.code-lang-tabs button');
    var blocks = section.querySelectorAll('.code-block');
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        tabs.forEach(function (x) { x.classList.remove('active'); });
        blocks.forEach(function (x) { x.classList.remove('active'); });
        this.classList.add('active');
        var id = 'code' + (lang.charAt(0).toUpperCase() + lang.slice(1));
        var el = document.getElementById(id);
        if (el) el.classList.add('active');
      });
    });
  }

  function run() {
    initTabs();
    if (typeof Prism !== 'undefined') {
      var section = document.querySelector('.code-learning-section');
      if (section) Prism.highlightAllUnder(section);
    }
  }

  function loadAll() {
    var p = Promise.resolve();
    SCRIPTS.forEach(function (src) {
      p = p.then(function () { return loadScript(src); });
    });
    p.then(run);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();

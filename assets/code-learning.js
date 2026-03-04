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

  /** 코드 정규화: 공백·줄 정리, 주석 제거 후 비교용 문자열 */
  function normalizeCode(text) {
    if (!text || typeof text !== 'string') return '';
    return text
      .replace(/\/\/[^\n]*|\#([^\n]*)|\/\*[\s\S]*?\*\//g, '')  // 주석 제거
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  /** 참고 코드와 사용자 코드의 유사도(0~1). 단순 톤큰 겹침 비율 */
  function similarity(ref, user) {
    var r = normalizeCode(ref);
    var u = normalizeCode(user);
    if (r.length === 0) return u.length === 0 ? 1 : 0;
    var rWords = r.split(/\s/).filter(Boolean);
    var uSet = new Set(u.split(/\s/).filter(Boolean));
    var match = 0;
    for (var i = 0; i < rWords.length; i++) {
      if (uSet.has(rWords[i])) match++;
    }
    return rWords.length ? match / rWords.length : 0;
  }

  function initGrading() {
    var section = document.querySelector('.code-learning-section');
    if (!section) return;
    var practice = section.querySelector('.code-practice');
    var textarea = section.querySelector('#codePractice');
    var actions = section.querySelector('.code-practice-actions');
    if (!practice || !textarea) return;

    var resultEl = document.createElement('div');
    resultEl.className = 'code-grade-result';
    resultEl.setAttribute('aria-live', 'polite');

    var gradeBtn = document.createElement('button');
    gradeBtn.type = 'button';
    gradeBtn.className = 'btn btn-primary';
    gradeBtn.textContent = '채점하기';
    gradeBtn.style.marginLeft = '8px';
    gradeBtn.addEventListener('click', function () {
        var activeBlock = section.querySelector('.code-block.active');
        var refCode = activeBlock ? (activeBlock.querySelector('code') && activeBlock.querySelector('code').textContent) : '';
        var userCode = textarea.value || '';
        resultEl.classList.remove('success', 'warning', 'error', 'visible');

        if (!userCode.trim()) {
          resultEl.textContent = '따라 적은 코드를 입력한 뒤 채점하기를 눌러 주세요.';
          resultEl.classList.add('error', 'visible');
          return;
        }

        var sim = similarity(refCode, userCode);
        var pct = Math.round(sim * 100);
        if (pct >= 80) {
          resultEl.textContent = '참고 코드와 유사도 ' + pct + '%입니다. 잘 따라 적으셨네요. 실제로 실행해 보면서 동작도 확인해 보세요.';
          resultEl.classList.add('success', 'visible');
        } else if (pct >= 50) {
          resultEl.textContent = '참고 코드와 유사도 ' + pct + '%입니다. 누락된 부분이 있는지 왼쪽 참고 코드와 비교해 보세요.';
          resultEl.classList.add('warning', 'visible');
        } else {
          resultEl.textContent = '참고 코드와 유사도 ' + pct + '%. 참고 코드를 다시 확인하고 핵심 키워드·구조를 맞춰 보세요. (이 채점은 코드 유사도만 확인합니다. 정확한 정답은 실행/테스트로 확인하세요.)';
          resultEl.classList.add('error', 'visible');
        }
      });

    if (actions) {
      actions.appendChild(gradeBtn);
    } else {
      practice.appendChild(gradeBtn);
    }
    practice.appendChild(resultEl);
  }

  function run() {
    initTabs();
    initGrading();
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

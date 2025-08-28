
document.addEventListener('DOMContentLoaded', () => {

  const body = document.body;
  const toggleBtn = document.getElementById('font-toggle-btn');
  const storageKey = 'font-preference';

  console.log("ボタン検索の結果:", toggleBtn);

  const currentPreference = localStorage.getItem(storageKey);
  if (currentPreference === 'default') {
    body.classList.add('font-default');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      console.log("ボタンがクリックされました！ bodyのクラス:", document.body.className);
      body.classList.toggle('font-default');

      if (body.classList.contains('font-default')) {
        localStorage.setItem(storageKey, 'default');
      } else {
        localStorage.setItem(storageKey, 'custom');
      }
    });
  }
});
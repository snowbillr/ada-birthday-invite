(function() {
  const invitationEl = document.querySelector('#invitation');
  const authEl = document.querySelector('#authorization');
  const passwordEl = document.querySelector('input');

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (passwordEl.value.toLowerCase() === 'bingo') {
      invitationEl.classList.remove('hidden');
      authEl.classList.add('hidden');
    }
  });
})();
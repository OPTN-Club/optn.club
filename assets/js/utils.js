(() => {
  activateClipboardButton();
  activateFormBlurHandler();

  function activateClipboardButton() {
    const btnClipboard = document.querySelector('#clipboard-button');
    const txtResult = document.querySelector('#result');

    if (!navigator.clipboard || !btnClipboard || !txtResult) return;

    btnClipboard.classList.remove('hidden');
    btnClipboard.addEventListener('click', () => {
      const text = txtResult.value;
      navigator.clipboard.writeText(text);
    });
  }

  function activateFormBlurHandler() {
    const elems = document.querySelectorAll('input, select, textarea');
    const onBlur = (e) => e.target.classList.add('touched');

    elems.forEach((elem) => elem.addEventListener('blur', onBlur));
  }
})();

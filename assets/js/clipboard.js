(() => {
	'use strict';

	const btnClipboard = document.querySelector('#clipboard-button');
	const txtResult = document.querySelector('#result');

	if (!navigator.clipboard) return;

	btnClipboard.classList.remove('hidden');
	btnClipboard.addEventListener('click', () => {
		const text = txtResult.value;
		navigator.clipboard.writeText(text);
	});
})();

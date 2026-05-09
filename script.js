const input = document.querySelector('.input');
const button = document.querySelector('.button');
const copied = document.querySelector('.copied');
const copiedText = document.querySelector('.copiedText');

button.addEventListener('click', function () {
  const inputValue = input.value.trim();

  if (!inputValue) return;

  const url = inputValue.startsWith('http')
    ? inputValue
    : `https://${inputValue}`;

  generate(url);
});

async function generate(url) {
  try {
    button.disabled = true;
    button.classList.add('loading');
    button.textContent = '...';

    document.title = 'Converting...';

    const res = await fetch(
      `https://naverme-shortener.vercel.app/shorten?url=${encodeURIComponent(url)}`
    );

    const data = await res.json();

    document.title = 'Done';

    await navigator.clipboard.writeText(data.result.data);

    copiedText.textContent = `${data.result.data} has been copied!`;
    copiedText.style.visibility = 'visible';
    copied.style.visibility = 'visible';
  } catch (err) {
    document.title = 'naver.me';

    copiedText.textContent = 'Failed to shorten the link.';
    copiedText.style.visibility = 'visible';
    copied.style.visibility = 'visible';

    console.error(err);
  } finally {
    button.disabled = false;
    button.classList.remove('loading');
    button.textContent = 'Shorten';
  }
}

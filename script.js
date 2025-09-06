document.addEventListener('DOMContentLoaded', () => {
  let refs = {},
    counter = 1;

  // Replace [ref] placeholders with numbered references
  document.querySelectorAll('a').forEach((a) => {
    if (a.textContent.trim() === '[ref]') {
      const href = a.href;
      if (!refs[href]) refs[href] = counter++;
      a.textContent = `[${refs[href]}]`;
      a.target = '_blank';
      a.rel = 'nofollow';
    }
  });

  // Build references list
  const refList = document.getElementById('references');
  for (const [href, idx] of Object.entries(refs)) {
    refList.insertAdjacentHTML('beforeend', `<li><a href="${href}" target="_blank" rel="nofollow">${href}</a></li>`);
  }

  // Mask names
  document.querySelectorAll('#papers li, #keyFacts li, #personal li, #study li, #work li, #quotes li, #honors li, #timeline li, h2, p').forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/__FULLNAME__/g, '░░░░░░░░░').replace(/__NAME__/g, '░░░░░░░');
  });
});

const names = [
  'Satoshi Nakamoto',
  'Craig Wright',
  'Hal Finney',
  'Nick Szabo',
  'Wei Dai',
  'Adam Back',
  'Dorian Nakamoto',
  'Gavin Andresen',
  'Jed McCaleb',
  'Tim May',
  'Craig Wright',
  'Hal Finney',
  'Nick Szabo',
  'Wei Dai',
  'Adam Back',
  'Dorian Nakamoto',
  'Gavin Andresen',
  'Jed McCaleb',
  'Tim May',
  'David Chaum',
  'Len Sassaman',
  'Shinichi Mochizuki',
  'Paul Le Roux',
  'Vili Lehdonvirta',
  'Neal King',
  'Michael Clear',
  'Martii Malmi',
  'Ross Ulbricht',
  'Bram Cohen',
  'Elon Musk',
  'Peter Todd',
  ' ',
  'Nick Szabo',
  ' ',
  'Wei Dai',
  ' ',
  'Dorian Nakamoto',
  ' ',
  'Gavin Andresen',
  ' ',
  'Adam Back',
  ' ',
  'Hal Finney',
  ' ',
  ' ',
  'Addison Fischer',
];

const reel = document.getElementById('reel');
names.forEach((name) => reel.insertAdjacentHTML('beforeend', `<div>${name}</div>`));

function spinCSS() {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    reel.style.transition = 'none';
    reel.style.transform = 'translateY(0)';
    void reel.offsetWidth; // reset
    reel.style.transition = 'transform 8s cubic-bezier(0.25, 0.5, 0.5, 1)';
    reel.style.transform = `translateY(-${(names.length - 1) * 1.72}em)`;

    setTimeout(() => {
      document.querySelectorAll('#papers li, #keyFacts li, #personal li, #study li, #quotes li, #work li, #honors li, #timeline li, h2, p').forEach((el) => {
        el.innerHTML = el.innerHTML.replace(/░░░░░░░░░/g, 'Addison Fischer').replace(/░░░░░░░/g, 'Fischer');
      });

      document.querySelectorAll('.masked').forEach((el) => el.classList.replace('masked', 'unmasked'));
      document.getElementById('photo').src = 'unmasked.png';
      document.getElementById('reveal').remove();
    }, 8000);
  }, 1000);
}

['reveal'].forEach((id) => document.getElementById(id).addEventListener('click', spinCSS));

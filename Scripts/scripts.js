addEventListener('click', btn => {

  const thisV = btn.target.value;
  const valid = btn.target.hasAttribute('data-valid');
  if (valid) {
    lastValid = btn;
    if (thisV === 'none') {document.documentElement.style.removeProperty('--bg-color'); return}
    try {document.documentElement.style.setProperty('--bg-color', thisV);} catch {};
    }
});
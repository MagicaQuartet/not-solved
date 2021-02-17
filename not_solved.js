function injectCSS() {
  const url = browser.runtime.getURL('/styles/style.css');
  const linkTag = document.createElement('link');
  linkTag.setAttribute('rel', 'stylesheet');
  linkTag.setAttribute('type', 'text/css');
  linkTag.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(linkTag);
}

injectCSS()
hideTierIconForUnsolved();

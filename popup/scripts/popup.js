const hideToggle = document.getElementById('hide-toggle');
hideToggle.addEventListener('change', (evt) => {
  const checked = evt.target.checked;
  console.log(checked);
  browser.storage.local.set({
    hide: checked,
  })
    .then(() => {
      return browser.tabs.query({
        active: true,
        currentWindow: true,
      });
    })
    .then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "toggle",
      });
    });
});

browser.storage.local.get({
  hide: true,
})
  .then((result) => {
    hideToggle.checked = result.hide;
  });

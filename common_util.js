const regexProblemset = /^\/problemset(\/[A-Za-z0-9]+)*/
const regexProblem = /^\/problem(\/[A-Za-z0-9]+)*/
const regexStatus = /^\/status(\/[A-Za-z0-9]+)*/
const regexBoardList = /^\/board\/search(\/[A-Za-z0-9]+)*/
const regexBoardPage = /^\/board\/view(\/[A-Za-z0-9]+)*/
const regexWorkbook = /^\/workbook(\/[A-Za-z0-9]+)*/
const regexCategory = /^\/category(\/[A-Za-z0-9]+)*/
const regexProblemAdded = /^\/problem\/added(\/[A-Za-z0-9]+)*/
const regexStep = /^\/step(\/[A-Za-z0-9]+)*/;
const regexSubmit = /^\/submit(\/[A-Za-z0-9]+)*/;

const pathname = location.pathname;

function toggleTierIconForUnsolved() {
  browser.storage.local.get({
    hide: true,
  })
    .then((result) => {
      if (result.hide) {
        hideTierIconForUnsolved();
      } else {
        showTierIconForUnsolved();
      }
    });
}

function hideTierIconForUnsolved() {
  if (regexProblemset.test(pathname) || regexWorkbook.test(pathname) || regexCategory.test(pathname) || regexProblemAdded.test(pathname) || regexStep.test(pathname)) {
    const tierImgList = document.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.parentElement.querySelector('span.label-success') !== null;
      if (!accepted) {
        elem.classList.add('solvedac-tier-hidden');
      }
    });
  } else if (regexProblem.test(pathname)) {
    const tierImg = document.querySelector('img.solvedac-tier');
    const accepted = document.querySelector('span.label-success') !== null;
    if (!accepted) {
      tierImg.classList.add('solvedac-tier-hidden');
    }
  } else if (regexStatus.test(pathname) || regexBoardList.test(pathname)) {
    const tierImgList = document.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.querySelector('a.result-ac') !== null;
      if (!accepted) {
        elem.classList.add('solvedac-tier-hidden');
      }
    });
  } else if (regexBoardPage.test(pathname) || regexSubmit.test(pathname)) {
    // hide tier icon always
    const tierIcon = document.querySelector('img.solvedac-tier');
    if (tierIcon !== null) {
      tierIcon.classList.add('solvedac-tier-hidden');
    }
  }
}

function showTierIconForUnsolved() {
  const hiddenTierImgList = document.querySelectorAll('img.solvedac-tier-hidden');
  hiddenTierImgList.forEach((elem) => {
    elem.classList.remove('solvedac-tier-hidden');
  })
}

(function () {
  const regexProblemset = /^\/problemset(\/[A-Za-z0-9]+)*/
  const regexProblem = /^\/problem(\/[A-Za-z0-9]+)*/
  const regexStatus = /^\/status(\/[A-Za-z0-9]+)*/
  const regexBoardList = /^\/board\/search(\/[A-Za-z0-9]+)*/
  const regexBoardPage = /^\/board\/view(\/[A-Za-z0-9]+)*/
  const regexWorkbook = /^\/workbook(\/[A-Za-z0-9]+)*/
  const regexCategory = /^\/category(\/[A-Za-z0-9]+)*/

  const pathname = location.pathname;
  if (regexProblemset.test(pathname) || regexWorkbook.test(pathname) || regexCategory.test(pathname)) {
    const tierImgList = document.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.parentElement.querySelector('span.label-success') !== null;
      elem.style.display = accepted ? '' : 'none';
    });
  } else if (regexProblem.test(pathname)) {
    const tierImg = document.querySelector('img.solvedac-tier');
    const accepted = document.querySelector('span.label-success') !== null;
    tierImg.style.display = accepted ? '' : 'none';
  } else if (regexStatus.test(pathname) || regexBoardList.test(pathname)) {
    const tierImgList = document.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.querySelector('a.result-ac') !== null;
      elem.style.display = accepted ? '' : 'none';
    });
  } else if (regexBoardPage.test(pathname)) {
    // hide tier icon always
    const tierIcon = document.querySelector('img.solvedac-tier');
    if (tierIcon !== null) {
      tierIcon.style.display = 'none';
    }
  }
})();

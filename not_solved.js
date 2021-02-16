(function () {
  const regexProblemset = /^\/problemset(\/[A-Za-z0-9]+)*/
  const regexProblem = /^\/problem(\/[A-Za-z0-9]+)*/
  const regexStatus = /^\/status(\/[A-Za-z0-9]+)*/
  const regexBoardList = /^\/board\/search(\/[A-Za-z0-9]+)*/
  const regexBoardPage = /^\/board\/view(\/[A-Za-z0-9]+)*/
  const regexWorkbook = /^\/workbook(\/[A-Za-z0-9]+)*/

  const pathname = location.pathname;
  if (regexProblemset.test(pathname)) {
    const problemset = document.querySelector('#problemset');
    const tierImgList = problemset.querySelectorAll('tbody td img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const successLabel = elem.parentElement.parentElement.querySelector('span.label-success');
      elem.style.display = successLabel ? '' : 'none';
    });
  } else if (regexProblem.test(pathname)) {
    const problemMenu = document.querySelector('.problem-menu');
    const tierImg = problemMenu.querySelector('img.solvedac-tier');
    const successLabel = problemMenu.parentElement.parentElement.querySelector('span.label-success');
    tierImg.style.display = successLabel ? '' : 'none';
  } else if (regexStatus.test(pathname)) {
    const statusTable = document.querySelector('#status-table');
    const tierImgList = statusTable.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.querySelector('a.result-ac');
      elem.style.display = accepted ? '' : 'none';
    });
  } else if (regexBoardList.test(pathname)) {
    const problemTitleList = document.querySelectorAll('a.problem_title');
    console.log(problemTitleList)
    problemTitleList.forEach((elem) => {
      const tierIcon = elem.parentElement.querySelector('img');
      const accepted = elem.classList.contains('result-ac');
      tierIcon.style.display = accepted ? '' : 'none';
    });
  } else if (regexBoardPage.test(pathname)) {
    const tierIcon = document.querySelector('img.solvedac-tier');
    if (tierIcon !== null) {
      tierIcon.style.display = 'none';
    }
  } else if (regexWorkbook.test(pathname)) {
    const tierImgList = document.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const successLabel = elem.parentElement.parentElement.querySelector('span.label-success');
      elem.style.display = successLabel ? '' : 'none';
    });
  }
})();

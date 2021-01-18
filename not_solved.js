(function () {
  const problemSet = document.querySelector('#problemset');
  const problemMenu = document.querySelector('.problem-menu');
  const statusTable = document.querySelector('#status-table');
  if (!problemSet && !problemMenu && !statusTable) return;

  if (problemSet) {
    const tierImgList = problemSet.querySelectorAll('tbody td img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const successLabel = elem.parentElement.parentElement.querySelector('span.label-success');
      elem.style.display = successLabel ? '' : 'none';
    });
  }

  if (problemMenu) {
    const tierImg = problemMenu.querySelector('img.solvedac-tier');
    const successLabel = problemMenu.parentElement.parentElement.querySelector('span.label-success');
    tierImg.style.display = successLabel ? '' : 'none';
  }

  if (statusTable) {
    const tierImgList = statusTable.querySelectorAll('img.solvedac-tier');
    tierImgList.forEach((elem) => {
      const accepted = elem.parentElement.querySelector('a.result-ac');
      elem.style.display = accepted ? '' : 'none';
    });
  }
})();

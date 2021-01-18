(function () {
  const problemSet = document.querySelector('#problemset');
  const problemMenu = document.querySelector('.problem-menu');
  if (!problemSet && !problemMenu) return;

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
})();

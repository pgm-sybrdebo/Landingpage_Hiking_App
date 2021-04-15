const $parentsWithChildren = document.querySelector('.parentWithChildren');
const $secondList = document.querySelector('.parentWithChildren + .secondaryNavigation');
const $upArrow = document.querySelector('.fa-chevron-up');

$parentsWithChildren.addEventListener('click', (e) => {
  e.preventDefault();
  showSecondList();
});

const showSecondList = () => {
  $secondList.classList.toggle('secondaryNavigation--open');
  $upArrow.classList.toggle('down-arrow');
};

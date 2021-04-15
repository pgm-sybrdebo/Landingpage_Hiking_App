if (document.querySelector('.cardsList__container__wrapper') !== null) {
  const $container = document.querySelector('.cardsList__container__wrapper');
  const $list = $container.querySelector('.cardsList__container__wrapper__list');
  const classes = {
    leftFog: 'left-fog',
    rightFog: 'right-fog'
  };

  document.addEventListener('DOMContentLoaded', function() {
    watchScroll();
  });
  
  const watchScroll = () => {
    const $firstListItem = $list.querySelector('.cardsList__container__wrapper__list .card:first-child');
    const $lastListItem = $list.querySelector('.cardsList__container__wrapper__list .card:last-child');
    
    let observer = new IntersectionObserver((entries) => { 
      entries.forEach(entry => {
        const fogClass = entry.target === $firstListItem ? classes.leftFog : classes.rightFog;
        if (entry.intersectionRatio != 1) {
          if (!$container.classList.contains(fogClass)) {
            $container.classList.add(fogClass);
          }
        } else {
          $container.classList.remove(fogClass); 
        }
      });
    }, {threshold: 1});
    
    observer.observe($firstListItem);
    observer.observe($lastListItem);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }

    });
  });
  document.querySelectorAll('.fade-in-up').forEach((element) => {
    observer.observe(element);
  });

  // submit button animation
  if (document.getElementById('contactForm') !== null) {
    const $form = document.getElementById('contactForm');
    const $button = document.querySelector('.btn--submit');
    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      $button.classList.add('onclick');
      setTimeout(validate(), 250)
    })
    const validate = () => {
      setTimeout(() => {
        $button.classList.remove('onclick');
        $button.classList.add('validate');
        goBack();
      }, 2250);
    }
    const goBack = () => {
      setTimeout(() => {
        $button.classList.remove('validate');
      }, 1250);
    }
  }
});

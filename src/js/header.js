$(document).ready(function() {
  $('.header__language-current').click(function(e) {
    e.preventDefault();
    $(this)
      .next('.header__language-choice')
      .toggle('duration');
  });
});

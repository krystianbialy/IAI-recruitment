$(document).ready(() => {
  const $headerSearchShow = $('.header__search-show');
  const $headerSearch = $('.header__search');
  const $headerSearchBox = $('.header__search-box');
  const $headerLanguageCurrent = $('.header__language-current');
  const $headerLanguageChoice = $('.header__language-choice');

  $headerSearchShow.click(e => {
    e.preventDefault();
    $headerSearch.slideToggle();
    $headerSearchBox.css('display', 'flex');
  });

  $headerLanguageCurrent.click(e => {
    e.preventDefault();
    $headerLanguageChoice.toggle('duration');
  });
});

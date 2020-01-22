$('.mobile-navigation__menu--polish-version .mobile-navigation__list').append(
  `
<li class="mobile-navigation__list-item"><a href="#">MOJE KONTO</a></li>
<li class="mobile-navigation__list-item">GOTOWE ZESTAWY DO GRY</li>
  <ul class="mobile-navigation__second-level-list">
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
  </ul>
<li class="mobile-navigation__list-item">SPRZĘT</li>
  <ul class="mobile-navigation__second-level-list">
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
  </ul>
<li class="mobile-navigation__list-item">ODZIEŻ</li>
  <ul class="mobile-navigation__second-level-list">
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
    <li class="mobile-navigation__second-level-list-item">LOREM IPSUM</li>
  </ul>
<li class="mobile-navigation__list-item"><a href="#">KULKI</a></li>
<li class="mobile-navigation__list-item"><a href="#">WYPRZEDAŻE</a></li>
`
);

$(document).ready(() => {
  const $mobileNavToggle = $('.mobile-navigation-toggle');
  const $mobileNav = $('.mobile-navigation');
  const $mobileNavBtnClose = $('.mobile-navigation__button-close');
  const $mobileNavLanguageCurrent = $('.mobile-navigation__language-current');
  const $mobileNavLanguageChoice = $('.mobile-navigation__language-choice');
  const $mobileNavListItem = $('.mobile-navigation__list-item');

  $mobileNav.hide();

  $mobileNavToggle.click(() => {
    if ($mobileNav.is(':hidden')) {
      $mobileNav.animate({ width: 'toggle' });
      $mobileNav.css('left', '0');
    }
  });

  $mobileNavBtnClose.click(() => {
    if ($mobileNav.is(':visible')) {
      $mobileNav.animate({ width: 'toggle' });
    }
  });

  $mobileNavLanguageCurrent.click(() => {
    $mobileNavLanguageChoice.toggle('duration');
  });

  $mobileNavListItem.click(function() {
    const $secondLevelList = $(this).next(
      '.mobile-navigation__second-level-list'
    );
    $secondLevelList.slideToggle(200);
  });
});

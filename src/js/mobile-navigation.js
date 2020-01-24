$('.mobile-navigation__menu--polish-version .mobile-navigation__list').append();

$(document).ready(() => {
  const $mobileNavToggle = $('.mobile-navigation-toggle');
  const $mobileNav = $('.mobile-navigation');
  const $mobileNavBtnClose = $('.mobile-navigation__button-close');
  const $mobileNavLanguageCurrent = $('.mobile-navigation__language-current');
  const $mobileNavLanguageChoice = $('.mobile-navigation__language-choice');
  const $mobileNavListItemWrapper = $('.mobile-navigation__list-item-wrapper');

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

  $mobileNavListItemWrapper.click(function() {
    const $secondLevelList = $(this).next(
      '.mobile-navigation__second-level-list'
    );
    $secondLevelList.slideToggle(200);
  });
});

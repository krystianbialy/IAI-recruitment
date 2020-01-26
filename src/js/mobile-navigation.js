$(document).ready(() => {
  const $mobileNavToggle = $('.mobile-navigation-toggle');
  const $mobileNav = $('.mobile-navigation');
  const $mobileNavBtnClose = $('.mobile-navigation__button-close');
  const $mobileNavLanguageCurrent = $('.mobile-navigation__language-current');
  const $mobileNavLanguageChoice = $('.mobile-navigation__language-choice');
  const $mobileNavListItemWrapper = $('.mobile-navigation__list-item-wrapper');
  const $mobileNavigationOverlay = $('.mobile-navigation-overlay');
  const $html = $('html');
  const $body = $('body');

  $mobileNav.hide();

  $mobileNavToggle.click(() => {
    if ($mobileNav.is(':hidden')) {
      $mobileNav.animate({ width: 'toggle' });
      $mobileNav.css('left', '0');
      $mobileNavigationOverlay.addClass('mobile-navigation-overlay-style');
      $html.addClass('mobile-navigation-open');
      $body.addClass('mobile-navigation-open');
    }
  });

  $mobileNavBtnClose.click(() => {
    if ($mobileNav.is(':visible')) {
      $mobileNav.animate({ width: 'toggle' });
      $mobileNavigationOverlay.removeClass('mobile-navigation-overlay-style');
      $html.removeClass('mobile-navigation-open');
      $body.removeClass('mobile-navigation-open');
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

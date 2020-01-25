$(document).ready(() => {
  const $faqQuestion = $('.FAQ__question');
  const $faqAnswer = $('.FAQ__answer');

  $faqQuestion.click(function() {
    $(this)
      .next('.FAQ__answer')
      .toggle('duration');
  });
  $faqAnswer.click(function() {
    $(this).hide('duration');
  });
});

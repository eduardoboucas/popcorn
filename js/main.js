(function ($) {
  var $comments = $('.js-comments');

  $('.js-form').submit(function () {
    var form = this;

    $(form).addClass('form--loading');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Review submitted', 'Thanks for your review! It will show on the site once it has been approved. You can see the pull request <a href="https://github.com/eduardoboucas/popcorn/pulls">here</a>.');
        $(form).removeClass('form--loading');
      },
      error: function (err) {
        console.log(err);
        showModal('Error', 'Sorry, there was an error with the submission!');
        $(form).removeClass('form--loading');
      }
    });

    return false;
  });

  $('.js-close-modal').click(function () {
    $('body').removeClass('show-modal');
  });

  function showModal(title, message) {
    $('.js-modal-title').text(title);
    $('.js-modal-text').html(message);

    $('body').addClass('show-modal');
  }
})(jQuery);

// 复制代码
$(function () {
  var $copyIcon = $('<i class="fa fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');
  $('.code-area').prepend($copyIcon);
  new ClipboardJS('.fa-copy', {
    target: function (trigger) {
      alert("复制成功");
      return trigger.nextElementSibling;
    }
  });

});

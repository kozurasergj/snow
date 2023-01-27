const buttonHtmlone = document.querySelector('#buttonHtmlone');
const buttonHtmltwo = document.querySelector('#buttonHtmltwo');
const defaultHtml = document.querySelector('#defaultHtml');
defaultHtml.classList.add('before');


buttonHtmlone.addEventListener('mouseover', function () {
  buttonHtmlone.classList.add('before2');
  defaultHtml.classList.remove('before');
});
buttonHtmltwo.addEventListener('mouseover', function () {
  buttonHtmltwo.classList.add('before2');
  defaultHtml.classList.remove('before');
})
buttonHtmlone.addEventListener('mouseout', function () {
  buttonHtmlone.classList.remove('before2');
  defaultHtml.classList.add('before');
});
buttonHtmltwo.addEventListener('mouseout', function () {
  buttonHtmltwo.classList.remove('before2');
  defaultHtml.classList.add('before');
})


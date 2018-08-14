function randomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
};

$('.botton').click(function(){
  $('body').css('background-color', randomColor())
});

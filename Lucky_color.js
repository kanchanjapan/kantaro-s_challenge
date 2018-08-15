let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color = `rgb(${r},${g},${b})`;

$('.botton').click(function(){
  $('body').css('background-color', color)
});

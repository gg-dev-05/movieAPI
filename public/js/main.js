window.onscroll = function() {scrollFun()};



function scrollFun() {


  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(scrolled);
  document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}
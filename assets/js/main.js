var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
    }

    var width = 130;
    var count = 3;

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0; 

    carousel.querySelector('.prev').onclick = function() {
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
/* This is Script File */


// Header Fixed Position

window.addEventListener("scroll",function(){
	document.getElementById('header__links').classList.toggle('header_scrolled', window.scrollY > 0);
});

// Hover on courses

function getLinkCourse(i,x){
	document.getElementById(i).onmouseover = function() {
		document.getElementById(x).classList.add('b0');
	};
  document.getElementById(i).onmouseout = function() {
		document.getElementById(x).classList.remove('b0');
	};
};

getLinkCourse('courses_1','star1');
getLinkCourse('courses_2','star2');
getLinkCourse('courses_3','star3');


// Hover on teachers

function getLinkTeachers(i,x){
   document.getElementById(i).onmouseenter = function() {
    document.getElementById(x).classList.add('fa-color');
  };
  document.getElementById(i).onmouseleave = function(){
    document.getElementById(x).classList.remove('fa-color');
  };
};

getLinkTeachers('teacher_1','links1');
getLinkTeachers('teacher_2','links2');
getLinkTeachers('teacher_3','links3');
getLinkTeachers('teacher_4','links4');

// Coupon 

function getCoupon(i,x,y,d){
  document.getElementById(i).onmouseenter = function(){
    document.getElementById(x).style.bottom = '80%';
    document.getElementById(y).style.textDecoration = 'line-through';
    document.getElementById(d).classList.add('hover');

  }
  document.getElementById(i).onmouseleave = function(){
    document.getElementById(x).style.bottom = '20%';
    document.getElementById(y).style.textDecoration = 'none';
    document.getElementById(d).classList.remove('hover');
  }
}

getCoupon('discount1','cut1','price1','pack1');
getCoupon('discount2','cut2','price2','pack2');
getCoupon('discount3','cut3','price3','pack3');

// Counter

const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 5000;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    }
    window.addEventListener('scroll', function() {
	    if (document.documentElement.scrollTop > 3900){
	      updateCount();
	    }
	});
});

// Up to up

window.addEventListener("scroll",function(){
	document.getElementById('up').classList.toggle('db', window.scrollY > 200);
});

//Menu Burger

let eat = 0;
let menuBurger = document.getElementById("header__burger");


$(document).ready(function() {
  $('.header__burger').click(function(event){
    $('.header__menu .container').toggleClass('display');
    $('.header__link').click(function(event){
      $('.header__menu .container').removeClass('display');
    });
  });
});
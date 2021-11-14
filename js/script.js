//Menu Burger

let eat = 0;
let menuBurger = document.getElementById("header__burger");

menuBurger.onclick = function(){
  if( eat%2 == 0 ){
    document.getElementById('header__container').classList.add('display');
    /*document.body.style.overflow = "hidden";
    document.getElementById('header__container').classList.add('animate__fadeInRight');
    document.getElementById('header__container').classList.remove('animate__fadeOut');*/
    eat++;
  } else if( eat%2 != 0 ) {
    document.getElementById('header__container').classList.remove('display');
    /*document.body.style.overflow = "scroll";
    document.getElementById('header__container').classList.add('animate__fadeOut');
    document.getElementById('header__container').classList.remove('animate__fadeInRight');*/
    eat++;
  }
}


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

// Scroll header

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 500){
  	document.getElementById('header__links').classList.add('header_scrolled');
} else {
		document.getElementById('header__links').classList.remove('header_scrolled');
};
});

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

// Up to Top

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 400 && window.screen.width >= 1000){
  	document.getElementById('up').style.display = "block";
} else {
		document.getElementById('up').style.display = "none";
};
});

// Counter


const counters = document.querySelectorAll('.count');
const speed = 5000; // The lower the slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 5);
    } else {
      counter.innerText = target;
    }
  };
  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 4000){
      updateCount();
  }
  });
}); 

/*
// Scroll 
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

alert( "Текущая прокрутка: " + scrollTop );
*/

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

//
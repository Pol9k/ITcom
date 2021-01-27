// SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Burger 
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();

// Send Messag
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

// chenge color
// const titleStic = document.querySelector('#startStic');
// const titleButton = document.querySelector('#titleButton')

// titleButton.forEach(popup => popup.addEventListener('click',()=> {
//   popup.classList.toggle('active')
// }));

// Langeuge
// const arrLang = {
//   'ua': {
//     'start__page-p': 'це лояльність до ваших клієнтів'
//   },
//   'ru': {
//     'start__page-p': 'це лояльність до ваших клієнтів'
//   }
// }
// $(function() {
//   $('.translate').click(function() {
//     let lang = $(this).attr('id');

//     $('.lang').each(function(index, item) {
//       $(this).text(arrLang[lang][$(this).attr('key')]);
//     });
//   });
// });



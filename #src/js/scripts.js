@@include('modules/simplebar/simplebar.min.js')
@@include('modules/typed/typed.min.js')


$(document).ready(function() {

	/*
	==========
	*
	*	Кастомный скроллбар для бокового меню
	*
	==========
	*/
	new SimpleBar($('.side-menu')[0], {});

	/*
	==========
	*
	*	Эффект набирания текста в строке поиска
	*
	==========
	*/
	var options = {
    strings: ['Мебель для спальни', 'Мебель для гостиной', 'Мебель для кухни', 'Кровать двуспальная'],
    typeSpeed: 100,
    backSpeed: 10,
    backDelay: 1000,
    smartBackspace: false,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    onStop: function (pos, self) {
      self.reset(false);
    },
	};

	var typed = new Typed('.searchbar__input[name="search"]', options);



});
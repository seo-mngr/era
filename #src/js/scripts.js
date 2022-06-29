@@include('modules/jquery-cookie/jquery.cookie.js')
@@include('modules/simplebar/simplebar.min.js')
@@include('modules/typed/typed.min.js')
//@@include('modules/tiny-slider/tiny-slider.min.js')
@@include('modules/waypoints/jquery.waypoints.min.js')
@@include('modules/swiper/swiper-bundle.js')
@@include('modules/progressively/progressively.min.js')
@@include('modules/fancybox/jquery.fancybox.min.js')
@@include('modules/selectize/selectize.min.js')
@@include('modules/maskedinput/jquery.maskedinput.min.js')
@@include('modules/mixitup/mixitup.min.js')

$(document).ready(function() {

    /*
    ==========
    *
    *   Кастомный скроллбар для бокового меню
    *
    ==========
    */
    $(function() {
        const sideMenu = new SimpleBar($('.side-menu')[0], {});
    });

    /*
    ==========
    *
    *   Анимация набора текста в строке поиска
    *
    ==========
    */
    $(function() {

        let options = {
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

        let typed = new Typed('.searchbar__input[name="search"]', options);

    });
    /*
    ==========
    *
    *   Верхний слайдер на главной
    *
    ==========
    */
    $(function() {

        function startFrontpageMainCarousel() {
            $(".slider-frontpage__slider-preloader").remove();
            let FrontpageMainCarousel = new Swiper(".slider-frontpage__slider", {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".slider-frontpage__slider .swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".slider-frontpage__slider .swiper-button-next",
                    prevEl: ".slider-frontpage__slider .swiper-button-prev",
                },
            });
        }

        $(".slider-frontpage__slider-preloader").on('mouseenter touchstart', startFrontpageMainCarousel);

    });

  /*
    ==========
    *
    *   Карусели товаров на главной
    *
    ==========
    */
    $(function() {
        if ( $('.slider-products_sales').length ) {
            let WaypointCarouselSales = $('.slider-products_sales .slider-products__slider').waypoint({
                handler: function(direction) {
                    let FrontProductsCarousel_sales = new Swiper(".slider-products_sales .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        shortSwipes: true,
                        longSwipes: true,
                        navigation: {
                            nextEl: ".slider-products_sales .slider-products__btn-next",
                            prevEl: ".slider-products_sales .slider-products__btn-prev",
                        },
                    });
                  
                    this.disable();
                },
                offset: '100%',
            });
        }
        if ( $('.slider-products_hits').length ) {
            let WaypointCarouselHits = $('.slider-products_hits .slider-products__slider').waypoint({
                handler: function(direction) {
                    let FrontProductsCarousel_hits = new Swiper(".slider-products_hits .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        shortSwipes: true,
                        longSwipes: true,
                        navigation: {
                            nextEl: ".slider-products_hits .slider-products__btn-next",
                            prevEl: ".slider-products_hits .slider-products__btn-prev",
                        },
                    });
                  
                    this.disable();
                },
                offset: '100%',
            });
        }
    });
    
    /*
    ==========
    *
    *   YouTube фид на главной
    *
    ==========
    */
    $(function() {
        if ($('.slider-products_youtube').length) {
            let WaypointCarouselYoutubeFeed = $('.slider-products_youtube .slider-products__slider').waypoint({
                handler: function(direction) {
                    let YoutubeCarousel = new Swiper(".slider-products_youtube .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: ".slider-products_youtube .slider-products__btn-next",
                            prevEl: ".slider-products_youtube .slider-products__btn-prev",
                        },
                    });

                    this.disable();
                },
                offset: '100%',
            });
        }
    });

    /*
    ==========
    *
    *   Галерея фото на странице товара
    *
    ==========
    */
    $(function() {
        if ($('.product-slider').length) {
            let WaypointCarouselSales = $('.product-slider .product-slider__carousel').waypoint({
                handler: function(direction) {
                    let ProductCarouselThumb = new Swiper(".product-slider .product-slider__thumb-carousel", {
                        slidesPerView: 1,
                        loop: false,
                        navigation: {
                            nextEl: ".product-slider .product-slider__thumb-btn-next",
                            prevEl: ".product-slider .product-slider__thumb-btn-prev",
                        },
                        slidesPerView: 3,
                        centeredSlides: false,
                        freeMode: true,
                        watchSlidesProgress: true,
                    });

                    let ProductCarousel = new Swiper(".product-slider .product-slider__carousel", {
                        slidesPerView: 1,
                        loop: false,
                        thumbs: {
                            swiper: ProductCarouselThumb,
                        },
                    });

                  
                    this.disable();
                },
                offset: '100%',
            });
        }
    });
    

    /*
    ==========
    *
    *   Карусели товаров на странице товара
    *
    ==========
    */
    $(function() {

        if ($('.slider-products_models').length) {
            let WaypointCarouselProductModels = $('.slider-products_models .slider-products__slider').waypoint({
                handler: function(direction) {
                    let ProductCarousel_models = new Swiper(".slider-products_models .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        navigation: {
                            nextEl: ".slider-products_models .slider-products__btn-next",
                            prevEl: ".slider-products_models .slider-products__btn-prev",
                        },
                    });
                    this.disable();
                },
                offset: '100%',
            });
        }
        
        if ($('.slider-products_series').length) {
            let WaypointCarouselProductSeries = $('.slider-products_series .slider-products__slider').waypoint({
                handler: function(direction) {
                    let ProductCarousel_models = new Swiper(".slider-products_series .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        navigation: {
                            nextEl: ".slider-products_series .slider-products__btn-next",
                            prevEl: ".slider-products_series .slider-products__btn-prev",
                        },
                    });

                    this.disable();
                },
                offset: '100%',
            });
        }

        if ($('.slider-products_popular').length) {
            let WaypointCarouselProductPopular = $('.slider-products_popular .slider-products__slider').waypoint({
                handler: function(direction) {
                    let ProductCarousel_models = new Swiper(".slider-products_popular .slider-products__slider", {
                        slidesPerView: "auto",
                        centeredSlides: false,
                        loop: false,
                        navigation: {
                            nextEl: ".slider-products_popular .slider-products__btn-next",
                            prevEl: ".slider-products_popular .slider-products__btn-prev",
                        },
                    });
                  
                    this.disable();
                },
                offset: '100%',
            });
        }

    });

    /*
    ==========
    *
    *   Parallax блок на главной
    *
    ==========
    */
    $(function() {

        if ( $('.parallax-block').length ) {
            let WaypointParallaxBlock = $('.parallax-block').waypoint({
                handler: function(direction) {
                    $(window).on('scroll', parallaxScroll);
                    this.disable();
                },
                offset: '100%',
            });
        }

        function parallaxScroll() {
            let debug   = false,
                ih      = $('.parallax-block__wrap .parallax-block__img').height(),
                ph      = $('.parallax-block__wrap').outerHeight(),
                pl      = ih - ph, // parallax lenght
                php     = 100 * (ph / $(window).height()); // % высотры параллакса от высоты экрана

            let scrolled =  $('.parallax-block__wrap').offset().top - ($(window).scrollTop() + $(window).height());
            let progress, current_offset;

            if ( ($(window).scrollTop() + $(window).height()) > $('.parallax-block__wrap').offset().top ) {
                progress = 100 - (100 / (($(window).height() - ph) / ($('.parallax-block__wrap').offset().top - $(window).scrollTop())));
                progress = (progress > 100) ? 100 : progress;
                progress = (progress < 0) ? 0 : progress;
                current_offset = pl / 100 * progress;

                $('.parallax-block__wrap .parallax-block__img').css('top', '-'+current_offset+'px');
            }

            if ( debug ) {
                console.log('p.offset.top: '+$('.parallax-block__wrap').offset().top+' w.scrollTop: '+$(window).scrollTop()+' w.height: '+$(window).height()+' scrolled: '+scrolled+' p.scrollTop: '+$('.parallax-block__wrap').scrollTop()+' ph: '+ph+' ih: '+ih+' pl: '+pl+' progress: '+progress+' co: '+current_offset+' php: '+php);
            }
        }

    });
        
        
    /*
    ==========
    *
    *   Кнопка мобильного меню категорий
    *
    ==========
    */
    $(function() {
        $(".side-menu-btn").click(function () {
            if ( $('.side-menu-btn').hasClass('side-menu-btn_active') ) {

                $(".sidebar").addClass("sidebar_hover_fix");
                $(".sidebar").removeClass("sidebar_active");
                $("body").removeClass("body_fixed");

            } else {

                $(".sidebar").removeClass("sidebar_hover_fix");
                $(".sidebar").addClass("sidebar_active");
                $("body").addClass("body_fixed");

            }

            $('.side-menu-btn').toggleClass('side-menu-btn_active');
            //sideMenu.recalculate();
        });
  
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', function() {
            // We execute the same script as before
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            //console.log(vh);
        });
    });
        

    /*
    ==========
    *
    *   Подменю категорий
    *
    ==========
    */
    $(function () {
        let $sideMenuItem = $('.side-menu__item'),
            $sideMenuLink = $('.side-menu__item:not(.side-menu__submenu-item) > .side-menu__item-link'),
            $subMenuWrapper = $('.sidebar__submenu-wrapper');

        let $submenu;

        if ( $(window).outerWidth() > 768 ) {
            $sideMenuItem.on('mouseenter', function(e) {
                $submenu = $(this).find('.side-menu__submenu');

                if ($submenu.length) {
                    $submenu.data('subid', $(this).data('subid'));
                    $submenu.clone().appendTo($subMenuWrapper);
                    $(this).addClass('side-menu__item_hover');
                    $('.sidebar').addClass('sidebar_with_submenu');
                }
            });

            $sideMenuItem.on('mouseleave', function(e) {
                if ( !$('.sidebar__submenu-wrapper:hover').length ) {
                    $sideMenuItem.removeClass('side-menu__item_hover');
                    $('.sidebar').removeClass('sidebar_with_submenu');
                    $subMenuWrapper.find('.side-menu__submenu').remove();
                }
            });

            $subMenuWrapper.on('mouseleave', function(e) {
                $sideMenuItem.removeClass('side-menu__item_hover');
                $('.sidebar').removeClass('sidebar_with_submenu');
                $subMenuWrapper.find('.side-menu__submenu').remove();
            });

        } else {

            $sideMenuLink.on('click', function(e, obj) {
                e.preventDefault();
                e.stopPropagation();

                $submenu = $(this).next('.side-menu__submenu');
                if ( $submenu.length ) {
                    $submenu.toggle();
                } else {
                    $(location).attr('href',$(this).attr('href'));
                }
            });

        }
    });

    /*
    ==========
    *
    *   Слайдер основного меню на мобиле
    *
    ==========
    */
    /*
      var tns_nav = {},
            tns_nav_container = '.nav .nav__list',
            tns_nav_options = {
                container: tns_nav_container,
                
                autoWidth: true,
                autoplay: false,
                nav: false,
                autoplayButtonOutput: false,
                controls: false,
                controlsText: ["", ""],
                mouseDrag: true,
              }

      if ( $(window).width() <= 768 ) {
        tns_nav = tns(tns_nav_options);
      }
      $(window).resize(function() {
        if ( $(window).width() <= 768 ) {
          if ( typeof tns_nav === 'undefined' || !tns_nav.isOn ) {
            //tns_nav = tns(tns_nav_options);
            //tns_nav.destroy();
            //console.log(tns_nav);
          } else if ( !tns_nav.isOn ) {
            tns_nav.rebuild();
          }
        } else {
          if ( typeof tns_nav !== 'undefined' && tns_nav.isOn ) {
            tns_nav.destroy();
          }
        }
      });
      */

    /*
    ==========
    *
    *   Модальные окна кнопок добавления в корзину
    *
    ==========
    */
    $(function() {
        $('.get_modal').on('click', function(event){

            let target = $(this).data('target');

            if (target == 'modal-in-click') {
                $('#form_one_click').attr('action', $(this).data('url'));
                $('#one_click_doc_url').val($(this).data('url'));
                $('#one_click_doc_name').val($(this).data('name'));
                $('.modal_order_info .order_img img').attr('src', $(this).data('image'));
                $('.modal_order_info .order_name').text($(this).data('name'));
                $('.modal_order_info .order_price').text($(this).data('price')+' ₽');
                $('#prod_id').val($(this).data('mornid'));
            } else if (target == 'modal-in-rassr') {
                $('.modal_order_info .order_img img').attr('src', $(this).data('image'));
                $('.modal_order_info .order_name').text($(this).data('name'));
                $('.modal_order_info .order_price').text($(this).data('price')+' ₽');
            }
            $('.overlay').fadeIn("fast",
                function(){ 
                    $('#' + target).css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
                    $('#' + target).addClass('opened_modal');
                }
            );
        });

        $('.overlay, .close_modal').click( function(e){
            e.preventDefault();
            closeMyModal();
        });

        function closeMyModal() {
            $('.opened_modal').animate(
                {
                    opacity: 0,
                    top: '45%'
                },
                200, 
                function() { 
                    $(this).css('display', 'none'); 
                    $('.overlay').fadeOut(400, function() {
                        $("#myModal_form_answer").hide();
                        $("#myModal_form").show();
                    }); 
                }
            );
        }
    });

    /*
    ==========
    *
    *   Кнопка Купить в 1 клик
    *
    ==========
    */
    $(function() {
        $(document).on("submit", "#form_one_click", function(e) {
            e.preventDefault();
            if (/\+7[\s]{1}\([\d]{3}\)[\s]{1}[\d]{3}[-]{1}[\d]{2}[-]{1}[\d]{2}/.test($(this).find('input[name="phone"]').val())) {
                let m_method=$(this).attr('method');
                let m_action=$(this).attr('action');
                let m_data=$(this).serialize();
                $.ajax({
                    type: m_method,
                    url: m_action,
                    data: m_data,
                    //resetForm: 'true',
                    success: function(result){
                        $(this).find('.messages .validation_error').hide();
                        $('#myModal_form').hide();
                        var data = $(result).find('#eform_answer').html();
                        $("#myModal_form_answer_text").html(data);
                        $('#myModal_form_answer').show();

                        ym(45224745,'reachGoal','form_1click');
                        gtag('event', 'form_1click', { 'event_category': 'form', 'event_action': '1click_done' });

                        ym(45224745,'reachGoal','allorder');
                        gtag('event', 'allorder', { 'event_category': 'form', 'event_action': 'allorder' });

                        /*
                        setTimeout(function(){
                            closeMyModal();
                        }, 3000);
                        */
                    }
                });
            } else {
                //console.log($(this).find('input[name="phone"]').val());
                $(this).find('.messages .validation_error').text('Заполните поле Телефон');
                $(this).find('.messages .validation_error').show();
                /*
                $('#popup-added-card .popup__content').text("Заполните поле Телефон");
                var target = 'popup-added-card', target_w = $('#'+target).outerWidth(), elem_w = $('#sendHelpTicket').outerWidth(), elem_h = $('#sendHelpTicket').outerHeight(), pos = $('#sendHelpTicket').offset();

                $('.popup').removeClass('active');
                $('#'+target).css({
                    top: pos.top + elem_h - 100 + 'px',
                    left: pos.left - target_w + elem_w + 'px'
                }).addClass('active');
                */
            }
        });
    });
        

    /*
    ==========
    *
    *   Счётчик кол-ва товара в модальном окне «Покупка в 1 клик»
    *
    ==========
    */
    $(function() {
        $(document).on('click', '.tovar_kol_min', function () {
            let $input = $(this).parent().find('input');
            let count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $(document).on('click', '.tovar_kol_pls', function () {
            let $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    /*
    ==========
    *
    *   Чат JivoSite
    *
    ==========
    */
    $(function() {
        $(".gochat").click(function(){              
            jivo_api.open();
            return false;
        });
    });

    /*
    ==========
    *
    *   Lazy load изображения
    *
    ==========
    */
    $(function() {
        progressively.init({
            throttle: 0,
            delay: 0
        });
    });

    /*
    ==========
    *
    *   Fancybox
    *
    ==========
    */
    $(function() {
        $(".modalbox").fancybox({});
        $(".modalbox_form").fancybox({
            padding: 0
        });
    });

    /*
    ==========
    *
    *   Маска номера телефона
    *
    ==========
    */
    $(function() {
        $(".form_tel").mask("+7 (999) 999-99-99");
    });

    /*
    ==========
    *
    *   Список городов для поиска Selectize
    *
    ==========
    */
    $(function() {
        let cities = [];
        $('.city-select-list .city-select-list__cities-link').each(function(i) {
            cities.push({
                id: i,
                title: $(this).text(),
                url: $(this).attr('href'),
            });
        });

        $(".selectize").selectize({
            maxItems: 1,
            valueField: 'url',
            labelField: 'title',
            searchField: 'title',
            options: cities,
            create: false,
            onChange: function (value) {
                location.href = value;
            },
        });
    });
        

    /*
    ==========
    *
    *   Раскрытие списка городов в модальном окне выбора города
    *
    ==========
    */
    $(function() {
        $('.city-select-list__item-title').click(function () {
            $(this).parent().toggleClass('city-select-list__item_active');
            return false;
        });
    });

    /*
    ==========
    *
    *   Подстановка города в URL
    *
    ==========
    */
    $(function() {
        if( typeof get_city_alias !== 'undefined' && get_city_alias != '' ) {
            let add_url = '/' + encodeURIComponent(get_city_alias) + '/';
            let this_href = '';

            $(
                '.side-menu__item-link,'+
                '.product-mini a,'+
                '.header__nav a[href="/katalog"],'+
                //'.footer_catalog_menu a,'+
                '#typepage .catalog_items a,'+
                '.header__nav a[href="/magazinyi-v-vashem-gorode"],'+
                '.footer_col_content a[href="/magazinyi-v-vashem-gorode"],'+
                '.header__nav a[href="/kontakty"],'+
                //'#new-header-menu-filtru a,' +
                //'.collections-list a,' +
                '.breadcrumbs a:not(:first)'
            ).not(".modalbox").each(function(i, elem){
                this_href = $(elem).attr('href');
                this_href = add_url + this_href;
                this_href = this_href.replace('//', '/');
                $(elem).attr('href', this_href);
            });
            
            $(
                //'.header_menu a.first,'+
                '.breadcrumbs a:first,'+
                '.logo a'
            ).not(".modalbox").each(function(i, elem){
                $(elem).attr('href', add_url+'salon-era');
            });
        }
    });

    /*
    ==========
    *
    *   Сортировка товаров на страницах категорий, фильтров, брендов
    *
    ==========
    */
    $(function() {
        let containerEl = document.querySelector('.js-sort-container');

        if(containerEl) {
            let mixer = mixitup(containerEl);
            let selectGroup = document.querySelector('.js-sorting');
            selectGroup.addEventListener('change', function(e) {
                if(selectGroup.value == 'all') {
                    document.location.reload();
                } else {
                    mixer.sort(selectGroup.value);
                }
            });
        }
    });

    /*
    ==========
    *
    *   Страница оформления
    *   Управление способами оплаты при выборе оплаты в рассрочку
    *
    ==========
    */
    // не сделано
    $(function() {
        let getUrlParameter = function getUrlParameter(sParam) {
            let sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        if ( getUrlParameter('installment') == 1 ) {
            $('#pay_type_5').prop('checked', true);
            $('#cash_type').addClass('disabled');
        }

        $(document).on("change", "#pay_type input", function(e) {
            let cur_id = $(this).parents('div').prop('id');
            $('#pay_type div').each(function() {
                if ( $(this).prop('id') != cur_id ) {
                    $(this).addClass('disabled');
                } else {
                    $(this).removeClass('disabled');
                }
            });
        });
    });

    /*
    ==========
    *
    *   Цели Метрика / Google Analytics
    *
    ==========
    */
    $(function() {
        $('[data-target=modal-in-cart]').on('click', function() {
            ym(45224745,'reachGoal','basket_done');
            gtag('event', 'click_add_basket', { 'event_category': 'click', 'event_action': 'add_basket' });
        });

        $('[data-target=modal-in-rassr]').on('click', function() {
            ym(45224745,'reachGoal','add_basket_rassrochka');
            gtag('event', 'click_add_basket_rassrochka', { 'event_category': 'click', 'event_action': 'add_basket_rassrochka' });
            ym(45224745,"reachGoal","rassrochka")
            gtag("event", "click_rassrochka", { "event_category": "click", "event_action": "rassrochka" });
        });

        $('[data-target=modal-in-click]').on('click', function() {
            ym(45224745,'reachGoal','click_1click');
            gtag('event', 'click_1click', { 'event_category': 'click', 'event_action': '1click_open' });
        });

        $("a[href^='tel']").on("click", function() {
            ym(45224745,'reachGoal','phoneclick');
            gtag('event', 'click_phone', { 'event_category': 'click', 'event_action': 'phone' });
        });
      
        /*
        $('.footer_soc_inner .fs_in').on('click', function() {
            ym(45224745,'reachGoal','instagram');
            gtag('event', 'instagram', { 'event_category': 'click', 'event_action': 'instagram' });
        });
        */

        // не сделано
        $('#cart_form').on('submit', function() {
            ym(45224745,'reachGoal','order_done');
            ym(45224745,'reachGoal','allorder');
            gtag('event', 'order_done', { 'event_category': 'form', 'event_action': 'order_done' });
            gtag('event', 'allorder', { 'event_category': 'form', 'event_action': 'allorder' });
        });
    });
        

    /*
    ==========
    *
    *   Блок Рейтинг на странице товара
    *
    ==========
    */
    // не сделано
    $(function() {
        if ( $('.js-star_rating').length ) {
            $('.js-star_rating span').on('click', function(){
                if ( !$(this).parent().hasClass('js-has-vote') ) {
                    let rating = $(this).attr('data-val');
                    $(this).parent().find('.checked').removeClass('checked');
                    $(this).addClass('checked');

                    let ratingInput = $(this).parent().find('.star_rating_val');
                    ratingInput.val(rating);

                    if( ratingInput.hasClass('js-ajax-send-rating') ) {
                        let itemId = ratingInput.attr('data-id');
                        let raitingContainer = $('.js-star_rating');

                        $.cookie('has_vote_' + itemId, 'yes', { expires: 28 });
                        raitingContainer.addClass('js-has-vote');
                        raitingContainer.removeClass('selectable');

                        $.ajax({
                            url: '/ajax/send_rating.php',
                            data: {'id' : itemId, 'rating' : rating},
                            method : 'POST',
                            success: function(data){
                                if(data != '') {
                                    setTimeout(function(){
                                        raitingContainer.html(data);
                                    }, 500);
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    /*
    ==========
    *
    *   Мини-галерея фото на мини-карточке товара в категориях, фильтрах, коллекциях
    *
    ==========
    */
    $(function() {
        if ( $('.product-mini__multiphoto-item').length ) {
            $('.product-mini__multiphoto-item').on('mouseenter', function() {
                let current_image = $(this).attr('data-image');
                $('.product-mini__multiphoto-item').removeClass('active');
                $(this).closest('.product-mini__photo').find('.product-mini__img').attr('src', current_image);
                $(this).addClass('active');
            });
            $('.product-mini__multiphoto').on('mouseleave', function() {
                let first_image = $( $('.product-mini__multiphoto-item', this)[0] ).attr('data-image');
                $(this).closest('.product-mini__photo').find('.product-mini__img').attr('src', first_image);
            });
        }
    });

    /*
    ==========
    *
    *   Functions
    *
    ==========
    */
    function memory() {
        if (sessionStorage.getItem('spisok_type') == 'plitka' || sessionStorage.getItem('spisok_type') == undefined) {
            $(".catalog_tovar_type div").removeClass("active");
            $(".ctt_plitka").addClass("active");
            $(".catalog_tovar_items").removeClass("spisok");
            $(".catalog_tovar_items").addClass("plitka");
        }
        if (sessionStorage.getItem('spisok_type') == 'spisok') {
            $(".catalog_tovar_type div").removeClass("active");
            $(".ctt_spisok").addClass("active");
            $(".catalog_tovar_items").removeClass("plitka");
            $(".catalog_tovar_items").addClass("spisok");
        }
    }

    function smenu_small() {
        if ($(window).outerWidth() <= 1599) {
            $(".side_menu_wrap").removeClass("before_sm");
            $(".side_menu_wrap").addClass("small_side_menu");
            $(".side_menu_inner_wrap, .sm_sub_list").getNiceScroll().resize();
            /**/
            /*
            $(".side_menu_wrap.small_side_menu").mouseenter(function() {
                $(this).removeClass("small_side_menu");
            })
            $(".side_menu_wrap").mouseleave(function() {
                $(this).addClass("small_side_menu");
                $(".sm_sub").removeClass("active");
            })
            */
            /**/
        } else {
            $(".side_menu_wrap").removeClass("small_side_menu");
            $(".side_menu_wrap").addClass("before_sm");
        }
    }

    function smenu_not_stick() {
        /*var smenu_height = $(".side_menu").height();
        var before_height = 0;

        $(".side_menu li").each(function () {
            before_height += $(this).height();
        });

        if (smenu_height <= before_height) {
            $(".side_menu li").addClass("not_stick");
        } else {
            $(".side_menu li").removeClass("not_stick");
        }*/
        
        var siwmenu_height = $(".side_menu_inner_wrap").height();
        var before_height = 0;

        $(".side_menu").each(function () {
        before_height += $(this).height();
        });

        if (siwmenu_height <= before_height) {
        $(".side_menu:last-child").addClass("not_stick");
        } else {
        $(".side_menu:last-child").removeClass("not_stick");
        }
    }

});
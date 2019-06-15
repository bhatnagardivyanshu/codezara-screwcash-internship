$(document).ready(function(){
    mycarousel();
    navbarHandler();
    handleActiveLi();
    setTimeout(function(){$("#portfolio-filter li:first a ").trigger('click')},5);
    $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 950,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 2
		              }
		            }
		        });
    
    $('#clients').owlCarousel({
		            loop: true,
		            autoplay: true,
		            autoplayTimeout: 3500,
		            smartSpeed: 2050,
		            responsive: {
		              0: {
		                items: 3
		              },
		              768: {
		                items: 4
		              },
		              1170: {
		                items: 4
		              }
		            }
		        });
    
    handleNavbarLinks();
        	});
    

$(window).load(function() {
   imageResponsive();

});

    $(' .mybtn').click(function(){
        var target = $(this).attr('data-target');
        var list = $('#portfolio-filter li a');
        list.each(function(){
            var val = $(this).html().toLowerCase();
            if((val)==target){
                $(this).trigger('click');
            }
        })
        $(this).attr('href','#portfolio');
    });

var handleNavbarLinks = function(){
    $('nav ul li a').click(function(){
        var link = $(this).attr('href');
//        console.log(link);
        console.log($(link).offset());
    })
}

var imageResponsive = function(){
     $('.og-grid').find('img').addClass('img-responsive');
    };

var mycarousel = function(){
    var item = $('.carousel .item');
    var wHeight = $(window).height();
    item.eq(0).addClass('active');
    item.height(wHeight);
    item.addClass('full-screen');
    
    $('.carousel img').each(function(){
        var src = $(this).attr('src');
        var color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image' : 'url(' + src + ')',
            'background-color' : color
        });
        $(this).remove();
    });
    
    $(window).on('resize',function(){
        wHeight = $(window).height();
        item.height(wHeight);
    })
};

$('.carousel').carousel({
    pause: "false"
});

$(window).scroll(function(){
    navbarHandler();
})

var navbarHandler = function(){
    if ($(window).scrollTop() > 520){
        $('body').addClass('pageScrolled');
    }
    
    else{
        $('body').removeClass("pageScrolled")    
    }
};

var handleActiveLi = function(){
    $('.mix-filter li').click(function(){
        $('.mix-filter li.active').removeClass('active');
        $(this).addClass('active');
    })
}

/*----------------------------------
        Creating Image Modal
----------------------------------*/

$('.mix-inner').click(function(){
//    portfolioImages();
    $('#portfolioModal .modal-footer h2').html("");
    $('#portfolioModal .modal-footer p').text("");
    var src = $(this).find('img').attr('src');
    var det = $(this).find('img').attr('data-detail');
    var proj_name=$(this).find('img').attr('project-name');
//    var src = image.attr('src');
//    var det = image.attr('data-detail');
//    var details = $(this).find(['data-detail']).val();
    
    $('#portfolioModal .modal-footer h2').html(proj_name);
    $('#portfolioModal .modal-footer p').html(det);
    $('#portfolioModal img').attr('src',src);
    $('#portfolioModal').modal('show');
})

/*----------------------------------
              Portfolio
----------------------------------*/

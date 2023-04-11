
$('.light-mode').click(function () {
    $('.light-mode').css('display', 'none');
    $('.dark-mode').css('display', 'block');
    $('body').css({
        'background': '#181c31',
        'color': '#ffffff',
    });
    $('#basic').css({
        'background-color': '#1c2136',
    });
    $('.plan-card').css({
        'background': '#181c31',
        'box-shadow': 'none',
    });
    $('.service-card').css({
        'box-shadow': 'none',
    });
    $(document).ready(function () {
        $('.service-card').hover(function () {
            $(this).css({
                'background': '#141727',
                'transition': '0.8s',
                'box-shadow': 'none',
            })
        }, function () {
            $(this).css({
                'background': 'transparent',
                'transition': '0.8s',
                'box-shadow': 'none',
            });
        });
    });
    $('.teams').css({
        'background-color': '#181c31',
    });
    $('.team').css({
        'background-color': '#1c2136',
    });
    $('body a span').css('color', '#fff');
    $('body a').css('color', '#fff');
    $('.modal-content').css({
        'background': 'rgba(65, 65, 65, 0.281)',
    });
    $('.social-link a').css({
        'fill': '#fff',
        'color': '#fff',
    });
    $('.tabs-mine').css({
        'background-color': '#282e41',
    });
    $('.box-slide').css({
        'background': '#1c2136',
        'box-shadow': 'none',
    });
    $('.count').css({
        'background-color': '#1c2136',
        'box-shadow': 'none',
    });
    $('.blog-item').css({
        'background': '#1c2136',
        'box-shadow': 'none',
    });
    $('.contact').css({
        'background-color': '#1c2136',
    });
    $('.message, .contact-mail').css({
        'background': '#181c31',
        'box-shadow': 'none',
    });
});
$('.dark-mode').click(function () {
    $('.light-mode').css('display', 'block');
    $('.dark-mode').css('display', 'none');
    $('body').css({
        'background': '#fff',
        'color': '#000000',
    });
    $('#basic').css({
        'background-color': '#fff',
    });
    $('.plan-card').css({
        'background': '#fff',
        'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    });
    $('.service-card').css({
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
    });
    $(document).ready(function () {
        $('.service-card').hover(function () {
            $(this).css({
                'background': '#fff',
                'transition': 'all 0.8s',
                'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            })
        }, function () {
            $(this).css({
                'background': 'transparent',
                'transition': '0.8s',
                'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
            })
        });
        $('.social-link a').hover(function () {
            $(this).css({
                'fill': '#f36a8d',
                'color': '#f36a8d',
            })
        }, function () {
            $(this).css({
                'fill': '#fff',
                'color': '#fff',
            })
        });
    });
    $('.teams, .team').css({
        'background-color': '#fff',
    });
    $('body a span').css({
        'color': '#000000',
    });
    $('body a').css({
        'color': '#000000',
    });
    $('.modal-content').css({
        'background': 'rgba(255, 255, 255, 0.6)',
    });
    $('.social-link a').css({
        'fill': '#fff',
        'color': '#fff',
    });
    $('.tabs-mine').css({
        'background-color': '#fff',
    });
    $('.box-slide').css({
        'background': '#fff',
        'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    });
    $('.count').css({
        'background-color': '#fff',
        'box-shadow': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    });
    $('.blog-item').css({
        'background': '#fff',
        'box-shadow': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    });
    $('.contact').css({
        'background-color': '#fff',
    });
    $('.message, .contact-mail').css({
        'background': '#fff',
        'box-shadow': 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.3) 0px 0px 8px',
    });

});
window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed-menu');
    } else {
        nav.classList.remove('fixed-menu');
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('#scroll-top').css({
            'opacity': '1',
        });
    } else {
        $('#scroll-top').css({
            'opacity': '0',
        })
    }
});
$('#scroll-top').click(function () {
    $('html, body').scrollTop('slow');
});
var loader = document.getElementById('preloader');
window.addEventListener('load', function () {
    loader.style.display = 'none';
});
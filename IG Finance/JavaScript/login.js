$('.register-btn').on('click', function () {
        $('.title').css('display', 'none');
        $('.title2').css('display', 'block');
        $('.login-btn').css('display', 'block');
        $('.register-btn').css('display', 'none');
        $('.box-color').css('margin-right', '-380px');
        $('.box-color').css('background-image', 'linear-gradient(to right, #FF4B2B, #FF416C)');
        $('.login').css('opacity', '0');
        $('.register').css('opacity', '1');
    });
    $('.login-btn').on('click', function () {
        $('.title').css('display', 'block');
        $('.title2').css('display', 'none');
        $('.login-btn').css('display', 'none');
        $('.register-btn').css('display', 'block');
        $('.box-color').css('margin-right', '0');
        $('.box-color').css('background-image', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        $('.login').css('opacity', '1');
        $('.register').css('opacity', '0');
    })
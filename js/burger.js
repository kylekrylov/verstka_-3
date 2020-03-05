"use strict";
//
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
    $('.menu a').click(function(e) {
        $('.burger,.menu').removeClass('active');
        $('body').removeClass('lock')
    });

});
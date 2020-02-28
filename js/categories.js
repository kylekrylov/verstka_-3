"use strict";
//
$(function() {
    $('.portfolio_element_galery_menu button').click(function() {
        var get_id = this.id;
        var get_current = $('.portfolio_element_galery_projects_project.' + get_id);

        $('.portfolio_element_galery_projects_project').not(get_current).hide(300);
        get_current.show(0);
    });

    $('#all').click(function() {
        $('.portfolio_element_galery_projects_project').show(100);
    });
});
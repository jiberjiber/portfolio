// page control functions


function navigate(tab){
    pageContainer.children(`div#${tab}`).show();

    for(let i = 0;i < pageContainer.children().length; i++){
        if($(pageContainer.children()[i]).attr('id') === tab){
            $(pageContainer.children()[i]).show('slow');
        } else {
            $(pageContainer.children()[i]).hide();
        }
    }
}


// page variables


const pageContainer = $('#pageContainer');
const home = $('#home');
const webDev = $('#webDev');
const production = $('#production');

const homeBtnParent = $('#homeBtn');
const webDevBtnParent = $('#webBtn');
const productionBtnParent = $('#productionBtn');


// button functions


$('.navBtn').on('click',function(){
    if($(this).attr('data-tab') === 'home'){
        window.location.reload();
        return;
    }
    navigate($(this).attr('data-tab'));
});


// page load functions


$(document).ready(function(){

    $('.js-fullheight').css('height', $(window).height() - 20);
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height() - 20);
    });

    home.show();
    homeBtnParent.addClass('uk-active');
    webDev.hide();
    production.hide();
  });
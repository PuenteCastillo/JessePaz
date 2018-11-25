
$(document).ready(function () {

    $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });

    $('#police').click(function(){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/TUziovvMYOg?controls=0');
        $('#vidTitle').text("Police Academy");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#drone').click(function(){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/ZF2BswWdGX0?controls=0');
        $('#vidTitle').text("Drone Reel");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#DJ-Wazaa').click(function(){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/Xl7S_B2k9Os?controls=0');
        $('#vidTitle').text("DJ Wazaa");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#Motor').click(function(){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/qCp7nlkChTM?controls=0');
        $('#vidTitle').text("Motorcros");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#longboard').click(function(){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/sRLGTm2UwCc?controls=0');
        $('#vidTitle').text("Fuller Longboards");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#UFC').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/hjh2wJ2SFbo?controls=0');
        $('#vidTitle').text("MMA");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#Charter').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/JfotgAWb92g?controls=0');
        $('#vidTitle').text(" CHarter Fishing");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#lift').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/SDmKVg8W4rs?controls=0');
        $('#vidTitle').text("Lift Meet");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#liftTwo').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/d1AgNS79Z6o?controls=0');
        $('#vidTitle').text("Backyard Lift");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#Boxing').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/7J50SbGDFs0?controls=0');
        $('#vidTitle').text("Muay Thai");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#Run').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/7G7zZuoEmgU?controls=0');
        $('#vidTitle').text("Runnning");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    $('#bike').click( function (){
        $('#vidContainer').removeClass('hide');
        $('.youVid').attr('src', 'https://www.youtube.com/embed/dusB_Bq2NWg?controls=0');
        $('#vidTitle').text("Bike Ride");
        $(window).scrollTop(0);
        $('.youVid').css({ 'height': ($('.youVid').width() * .5625) + 'px' });
    });
    
    square();
});
var square = function (){
    $('.imgContainer').each(function () {
        var x = $(this).width();
        var element = $(this);
        element.css({ 'height': x + 'px' });
    });
    $('.youVid').each(function () {
        var x = $(this).width();
        var element = $(this);
        element.css({ 'height': (x * .5625) + 'px' });
    });
}
$(window).resize(function () {
   square();
});
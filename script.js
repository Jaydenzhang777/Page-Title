$(".red").click(function() {
    $(".a").slideUp();
    $(".b").slideUp();
});

$(".red").click(function() {
    $(".C").show();
});

$(".blue").click(function() {
    $(".a").slideUp();
    $(".b").slideUp();
});

$(".blue").click(function() {
    $(".d").show();
});

$(".world").click(function() {
    $(".E").show();
});

$(".facts").click(function() {
    $(".F").show();
});
$(".world").click(function() {
    $(".a").fadeOut();
    $(".b").fadeOut();
    $(".C").fadeOut();
    $(".d").fadeOut();
});

$(".facts").click(function() {
    $(".a").fadeOut();
    $(".b").fadeOut();
    $(".C").fadeOut();
    $(".d").fadeOut();
});

$(".reload").click(function() {
    $(".E").slideUp();
    $(".F").slideUp();
    $(".C").slideUp();
    $(".d").slideUp();
});
$(".reload").click(function() {
    $(".a").fadeIn();
    $(".b").fadeIn();
});

$(".red").click(function() {
    $("body").css("background-color", "#df9f9f");
});
$(".blue").click(function() {
    $("body").css("background-color", "#d9d9d9");
});
$(".world").click(function() {
    $("body").css("background-color", "#ffd699");
});
$(".facts").click(function() {
    $("body").css("background-color", "#b3e6cc");
});
$(".reload").click(function() {
    $("body").css("background-color", "pink");
});

$(".cctv").dblclick(function() {
    $(".a").show();
    $(".b").show();
    $(".F").hide();
});

var deg = 0;

$(".fa-angle-right").click(function () {

    if (deg < 91) {

        deg += 90;

        $(".ellipseDotted").css({ "transform": "rotate(" + deg + "deg)" });
        $(".ellipseDotted").css({ "transition": "2s" });
        $(".active").next().addClass("active");
        $(".active").prev().removeClass("active");
    }

});

$(".fa-angle-left").click(function () {

    if (deg > 0) {

        deg += -90;
        $(".ellipseDotted").css({ "transform": "rotate(" + deg + "deg)" });
        $(".ellipseDotted").css({ "transition": "2s" });
    }

});











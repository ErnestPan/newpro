/**
 * Created by Administrator on 2017/6/28.
 */

$(document).ready(function () {
    var i = 0;
//教学场景
    $(".learning_picture").hide();
    $("#learning_picture1").show();

    $("#button1").click(function () {
        $(".learning_picture").hide();
        i = 0;
        $("#learning_picture1").fadeIn(500);
    });
    $("#button2").click(function () {
        $(".learning_picture").hide();
        i = 1;
        $("#learning_picture2").fadeIn(500);
    });
    $("#button3").click(function () {
        $(".learning_picture").hide();
        i = 2;
        $("#learning_picture3").fadeIn(500);
    });
    $("#button4").click(function () {
        $(".learning_picture").hide();
        i = 3;
        $("#learning_picture4").fadeIn(500);
    });
    $("#button5").click(function () {
        $(".learning_picture").hide();
        i = 4;
        $("#learning_picture5").fadeIn(500);
    });
    $("#button6").click(function () {
        $(".learning_picture").hide();
        i = 5;
        $("#learning_picture6").fadeIn(500);
    });
    $("#button7").click(function () {
        $(".learning_picture").hide();
        i = 6;
        $("#learning_picture7").fadeIn(500);
    });
    $("#button8").click(function () {
        $(".learning_picture").hide();
        i = 7;
        $("#learning_picture8").fadeIn(500);
    });
    $("#button9").click(function () {
        $(".learning_picture").hide();
        i = 8;
        $("#learning_picture9").fadeIn(500);
    });
    $("#button10").click(function () {
        $(".learning_picture").hide();
        i = 9;
        $("#learning_picture10").fadeIn(500);
    });

    //图标点击图片切换
    $("#arrow_img_prev_bgcolor").mouseover(function () {
        $("#up_img_prev").css('display', 'none');
    });
    $("#arrow_img_prev_bgcolor").mouseout(function () {
        $("#up_img_prev").css('display', 'block');
    });
    $("#arrow_img_next_bgcolor").mouseover(function () {
        $("#up_img_next").css('display', 'none');
    });
    $("#arrow_img_next_bgcolor").mouseout(function () {
        $("#up_img_next").css('display', 'block');
    });

    var img_arry = [
        $("#learning_picture1"),
        $("#learning_picture2"),
        $("#learning_picture3"),
        $("#learning_picture4"),
        $("#learning_picture5"),
        $("#learning_picture6"),
        $("#learning_picture7"),
        $("#learning_picture8"),
        $("#learning_picture9"),
        $("#learning_picture10")
    ];

    var button_arry = [
        $("#button1"),
        $("#button2"),
        $("#button3"),
        $("#button4"),
        $("#button5"),
        $("#button6"),
        $("#button7"),
        $("#button8"),
        $("#button9"),
        $("#button10")
    ];

    //往后滚
    $("#arrow_img_next_bgcolor").click(function () {
        if (i >= 0 && i < (img_arry.length)) {
            img_arry[i].fadeOut(500); //淡出上一张图片
            button_arry[i].css("border", "solid 1px #cbcbcb");   //

            i++;
            if (i >= (img_arry.length)) {
                i = 0;
                img_arry[i].fadeIn(500); //淡入第一张图片
                button_arry[i].css("border", "solid 2px #97bafd");   //

            } else {
                img_arry[i].fadeIn(500); //淡入下一张图片
                button_arry[i].css("border", "solid 2px #97bafd");   //
            }
        }
    });
    //往前滚
    $("#arrow_img_prev_bgcolor").click(function () {
        if (i >= 0 && i < (img_arry.length)) {
            img_arry[i].fadeOut(500); //淡出当前图片
            if (i > 1) {
                i--;
            } else {
                i = img_arry.length - 1;
            }
            img_arry[i].fadeIn(500); //淡入上一张图片
        }
        if (i < 0) {
            i = 0;
            img_arry[i].fadeIn(500); //淡出上一张图片
        }
    });


});





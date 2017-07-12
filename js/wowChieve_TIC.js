/**
 * Created by Administrator on 2017/6/28.
 */

$(document).ready(function () {
    var i = 0;


//感谢信
    //自动轮播

    //悬浮停止播放

//七中万达学校校区场景展示
    $(".school_img").hide();
    $("#school_img1").show();

    $("#micro_img1").click(function () {
        $(".school_img").hide();
        i = 0;
        $("#school_img1").fadeIn(500);
    });
    $("#micro_img2").click(function () {
        $(".school_img").hide();
        i = 1;
        $("#school_img2").fadeIn(500);
    });
    $("#micro_img3").click(function () {
        $(".school_img").hide();
        i = 2;
        $("#school_img3").fadeIn(500);
    });
    $("#micro_img4").click(function () {
        $(".school_img").hide();
        i = 3;
        $("#school_img4").fadeIn(500);
    });
    $("#micro_img5").click(function () {
        $(".school_img").hide();
        i = 4;
        $("#school_img5").fadeIn(500);
    });
    $("#micro_img6").click(function () {
        $(".school_img").hide();
        i = 5;
        $("#school_img6").fadeIn(500);
    });
    $("#micro_img7").click(function () {
        $(".school_img").hide();
        i = 6;
        $("#school_img7").fadeIn(500);
    });
    $("#micro_img8").click(function () {
        $(".school_img").hide();
        i = 7;
        $("#school_img8").fadeIn(500);
    });
    $("#micro_img9").click(function () {
        $(".school_img").hide();
        i = 8;
        $("#school_img9").fadeIn(500);
    });
    $("#micro_img10").click(function () {
        $(".school_img").hide();
        i = 9;
        $("#school_img10").fadeIn(500);
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
        $("#school_img1"),
        $("#school_img2"),
        $("#school_img3"),
        $("#school_img4"),
        $("#school_img5"),
        $("#school_img6"),
        $("#school_img7"),
        $("#school_img8"),
        $("#school_img9"),
        $("#school_img10")
    ];

    //往后滚
    $("#arrow_img_next_bgcolor").click(function () {
        if (i >= 0 && i < (img_arry.length)) {
            img_arry[i].fadeOut(500); //淡出上一张图片
            i++;
            if (i >= (img_arry.length)) {
                i = 0;
                img_arry[i].fadeIn(500); //淡入第一张图片
            } else {
                img_arry[i].fadeIn(500); //淡入下一张图片
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


    //福利细节
});

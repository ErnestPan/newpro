/**
 * Created by Administrator on 2017/6/28.
 */

JQ(function () {
    var i = 0;
    //选择图片

    //最新消息展示


    //美景展示窗口
    JQ(".img").hide();
    JQ("#img1").show();


    JQ("#micro_img1").click(function () {
        JQ(".img").hide();
        i = 0;
        JQ("#img1").fadeIn(500);
    });
    JQ("#micro_img2").click(function () {
        JQ(".img").hide();
        i = 1;
        JQ("#img2").fadeIn(500);
    });
    JQ("#micro_img3").click(function () {
        JQ(".img").hide();
        i = 2;
        JQ("#img3").fadeIn(500);
    });
    JQ("#micro_img4").click(function () {
        JQ(".img").hide();
        i = 3;
        JQ("#img4").fadeIn(500);
    });
    JQ("#micro_img5").click(function () {
        JQ(".img").hide();
        i = 4;
        JQ("#img5").fadeIn(500);
    });
    JQ("#micro_img6").click(function () {
        JQ(".img").hide();
        i = 5;
        JQ("#img6").fadeIn(500);
    });
    JQ("#micro_img7").click(function () {
        JQ(".img").hide();
        i = 6;
        JQ("#img7").fadeIn(500);
    });
    JQ("#micro_img8").click(function () {
        JQ(".img").hide();
        i = 7;
        JQ("#img8").fadeIn(500);
    });
    JQ("#micro_img9").click(function () {
        JQ(".img").hide();
        i = 8;
        JQ("#img9").fadeIn(500);
    });
    JQ("#micro_img10").click(function () {
        JQ(".img").hide();
        i = 9;
        JQ("#img10").fadeIn(500);
    });

    //图标点击图片切换
    JQ("#arrow_img_prev_bgcolor").mouseover(function () {
        JQ("#up_img_prev").css('display', 'none');
    });
    JQ("#arrow_img_prev_bgcolor").mouseout(function () {
        JQ("#up_img_prev").css('display', 'block');
    });
    JQ("#arrow_img_next_bgcolor").mouseover(function () {
        JQ("#up_img_next").css('display', 'none');
    });
    JQ("#arrow_img_next_bgcolor").mouseout(function () {
        JQ("#up_img_next").css('display', 'block');
    });

    var img_arry = [
        JQ("#img1"),
        JQ("#img2"),
        JQ("#img3"),
        JQ("#img4"),
        JQ("#img5"),
        JQ("#img6"),
        JQ("#img7"),
        JQ("#img8"),
        JQ("#img9"),
        JQ("#img10")
    ];

    //往后滚
    JQ("#arrow_img_next_bgcolor").click(function () {
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
    JQ("#arrow_img_prev_bgcolor").click(function () {
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












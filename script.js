$(function () {
    // drawer.js
    $('.drawer').drawer()
})

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
        {
            scrollTop: position - $("#js-header").outerHeight()
        },
        speed
    );
    return false;
});

//   google form
let $form = $("#js-form")
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                //送信に成功したときの処理 
                $form.slideUp()
                $("#js-success").slideDown()
            },
            200: function () {
                //送信に失敗したときの処理 
                $form.slideUp()
                $("#js-err").slideDown()
            }
        }
    });
    return false;
});

let $submit = $("#js-submit")
$("#js-form input, #js-form textarea").on("change",function(){
    if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.897945999"]').prop('checked') === true
    ){
        // すべて入力されたとき
        $submit.addClass('-active')
        $submit.prop("disabled", false)
    }else{
        // すべて入力されていないとき
        $submit.removeClass('-active')
        $submit.prop("disabled", true)
    }
})

//   WOW.js
new WOW().init()
/*** jQuery.setStyleValues ver.1.7 : jQuery plugin , created by miz.takagi 2015.07.15 , MIT Licecse ***/

/*-----------------------------------------------------------------------------------------------------------
 数値を細かく指定したい4つの基本プロパティをスクリプトで設定！ 
 もうスタイルシートにたくさんの数値クラスを記述する必要なし！ 
 - 単位指定も可能 px, %/p, em, ex, mm, cm, in, pt, pc （デフォルト単位はpx） 
 - スタイルシートに記述しなくてもstyleタグが追記されます。 
 - style設定があってもstyleタグに追記/上書きされます。 
 - marginはマイナス値の指定も可能。 
 - less.jsとの併用もOK  

 [1] width : w-***
    ex-1: <div class="w-120"> ---> <div class="w-120" style="width: 120px;"> 
    ex-2: <div class="w-60p" style="margin: 0 auto;"> ---> <div style="margin: 0 auto; width: 60%;"> 
    set units = 'px','p','%','em','ex','mm','cm','in','pt','pc'
 [2] height : h-***
    width に準じる
 [3] font-size : f-*** 
    ex-3: <div class="f-18"> ---> <div class="f-18" style="font-size: 18px;"> 
    ex-4: <div style="font-size: 16px;" class="f-1.2em"> ---> <div style="font-size: 1.2em"> 
 [4] margin-top : mt-***, margin-right : mr-***, margin-bottom : mb-***, margin-left : ml-*** 
    ex-5: <div class="mt-30"> ---> <div class="mt-30" style="margin-top: 30px;"> 
    ex-6: <div class="mt--1.4em" style="margin: 20px auto;"> ---> <div style="margin: 20px auto -1.4em;"> 
 [5] padding-top : pt-***, padding-right : pr-***, padding-bottom : pb-***, padding-left : pl-*** 
    ex-7: <div class="pt-10 pb-20 pl-10 pr-20"> ---> <div style="padding: 10px 20px 20px 10px;"> 
    ex-8: <div class="pt-30px pb--30" style="padding: 15px;"> ---> <div style="padding: 30px 15px 15px;"> 
 [6] align : al-0=text-align:left, al-1=text-align:center, al-2=text-align:right, al-3=text-align:justify 
    ex-9: <div class="al-1"> ---> <div style="align: center;"> 
 [7] vertical-align : vl-0=vertical-align:top, vl-1=vertical-align:middle, vl-2=vertical-align:bottom 
    ex-10: <div class="vl-2"> ---> <div style="vertical-align: bottom;"> 
 [8] margin auto : mauto-*
    ex-11: <div class="mauto-10"> ---> <div style="margin: 10px auto;"> 
--------------------------------------------------------------------------------------------------------------*/

$(function(){
    // width/height/font-size/margin/padding/alignをスクリプトで設定
    var setArray = ['w-','h-','f-','mt-','mr-','mb-','ml-','pt-','pr-','pb-','pl-','al-','vl-','mauto-']; // 設定可能なクラス名のヘッダ配列
    var propArray = ['width','height','font-size','margin-top','margin-right','margin-bottom','margin-left','padding-top','padding-right','padding-bottom','padding-left','text-align','vertical-align','margin']; // クラス名ヘッダに対応するプロパティ配列
    var ua = window.navigator.userAgent.toLowerCase(); // ブラウザを判定
    ua.indexOf('firefox')?ua=false:ua=true; // firefoxの場合はtrueを返す
    for (var i=0; i<setArray.length; i++){
        if( $('[class*='+setArray[i]+']').length > 0 ){ // 該当するクラス設定があったら
            $('[class*='+setArray[i]+']').each(function() { // クラスを個別に処理
                var classes = $(this).attr('class').split(/\s+/); // 空白スペースで分割し、この要素の全クラスを配列化
                var cname = ''; // クラス名を代入する変数を初期化
                var cval = 0; // 設定値を初期化
                var regexp = new RegExp('^'+setArray[i], 'i'); // クラス名ヘッダを探すためのキー
                for(var j=0; j<classes.length; j++){ // この要素の全クラスを走査
                    if(classes[j].match(regexp)){ // ヘッダ配列に含まれるクラスがあったら
                        cname = classes[j]; // クラス名を取得して代入
                        break; // 見つかった時点でループを停止
                    }
                }
                cval = cname.replace(regexp,''); // 設定値***を取得
                var res = set_unit(propArray[i], cval); // 単位設定関数で数値+単位を取得
                if(res){ // 値が設定されていたら
                    if(setArray[i] == 'w-' && res['unit'] == 'px') { // width設定&単位pxの場合にのみpadding調整
                        var this_style = this.currentStyle || document.defaultView.getComputedStyle(this, ''); //this要素に適用されている全スタイルを取得
                        var padd = Number(this_style.paddingLeft.match(/\d+/)) + Number(this_style.paddingRight.match(/\d+/)); //this要素に適用されている左右のpadding値を合計
                        var bd_collapse = this_style.borderCollapse; //this要素に適用されているborder-collapseを取得
                        if(bd_collapse == 'collapse' && !ua){ // firefoxでcollapseの場合は片側のみ取得
                            var bd = this_style.borderRightWidth.match(/\d+/); //this要素に適用されている左のborder幅
                            //var bd = Number(this_style.borderLeftWidth.match(/\d+/)) + Number(this_style.borderRightWidth.match(/\d+/)); //this要素に適用されている左右のpadding値を合計
                        }else{ // firefox以外またはborder-collapseがseparateの場合は両側を取得
                            var bd = Number(this_style.borderLeftWidth.match(/\d+/)) + Number(this_style.borderRightWidth.match(/\d+/)); //this要素に適用されている左右のpadding値を合計
                        }
                        res['val'] = res['val'] - padd - bd; // w-*** の設定値から左右のpaddingとborder幅を差し引いて設定する
                    }else if(setArray[i] == 'h-' && res['unit'] == 'px') { // height設定&単位pxの場合にのみpadding調整
                        var this_style = this.currentStyle || document.defaultView.getComputedStyle(this, ''); //this要素に適用されている全スタイルを取得
                        var padd = Number(this_style.paddingTop.match(/\d+/)) + Number(this_style.paddingBottom.match(/\d+/)); //this要素に適用されている上下のpadding値を合計
                        var bd_collapse = this_style.borderCollapse; //this要素に適用されているborder-collapseを取得
                        if(bd_collapse == 'collapse' && !ua){ // firefoxでcollapseの場合は片側のみ取得
                            var bd = this_style.borderTopWidth.match(/\d+/); //this要素に適用されている左のborder幅
                        }else{ // firefox以外またはborder-collapseがseparateの場合は両側を取得
                            var bd = Number(this_style.borderBottomWidth.match(/\d+/)) + Number(this_style.borderTopWidth.match(/\d+/)); //this要素に適用されている左右のpadding値を合計
                        }
                        res['val'] = res['val'] - padd - bd; // w-*** の設定値から上下のpaddingとborder幅を差し引いて設定する
                    }
                    if(propArray[i]=='vertical-align'){
                        $(this).parent().css('display','table'); // vertical-align の場合は親要素をtableとし自要素をtable-cellに設定する
                        $(this).css('display','table-cell');
                    }
                    if(propArray[i]=='margin'){
                        res['unit'] += ' auto'; // mauto の場合は値に auto を付加してセンタリングを行う
                    }
                    $(this).css(propArray[i], res['val'] + res['unit']); // 現在のtag要素にstyleを追加設定する
                }
            });
        }
    }
    
    // 単位設定関数
    /*-----------------------------------------------------------------------------------
     param: type: width/other, cval: 設定値（数字+単位記号）, padd: 左右padding合計値
       指定可能単位：
        % (パーセンテージ)
        p (パーセンテージ)
        em (親要素の相対値)
        rem (root要素(html)の相対値)
        ex (1ex=欧文の小文字xの高さ)
        mm (ミリメートル)
        cm (センチメートル)
        in (インチ 1in=2.54cm)
        pt (ポイント 1pt=1/72inch=0.352778mm, 72pt=1in)
        pc (パイカ 1pc=12px)
        px (画素数による絶対値)
    --------------------------------------------------------------------------------------*/
    function set_unit(type, cval) {
        var unitArray = [null,'px','%','em','ex','mm','cm','in','pt','pc']; // 単位配列
        var unit = cval.match(/\D+$/); // 単位のみ（末尾の数字以外の部分）を抜き出す
        var val = cval.replace(unit, ''); // 数字列(単位以外）を抜き出す
        var res = false; // 結果配列の初期化
        if(val.match(/^[-]?\d+(\.\d+)?$/)){ // 単位以外が数値なら
            if($.inArray(unit, unitArray)) { // 単位が配列内にあればその単位とする

                if(unit=='null' || unit==''){ // 単位の設定がない場合はpxとする
                    unit = 'px';
                } else if (unit=='p'){ // 単位がpの場合は%とする
                    unit = '%';
                }
                if(type == 'width' && unit == '%' && val > 100) { // width設定で単位が%の場合は最大値を100%とする
                    val = 100;
                }
                if(type == 'height' && unit == '%' && val > 100) { // height設定で単位が%の場合は最大値を100%とする
                    val = 100;
                }
            }else{ // 単位が配列内になければすべてpxとする
                unit = 'px';
            }
            // text-align/vertical-align の場合は数値を指示語に変換する
            if(type=='text-align'){
                unit = '';
                if(val==0){
                    val = 'left';
                }else if(val==1){
                    val = 'center';
                }else if(val==2){
                    val = 'right';
                 }else if(val==3){
                    val = 'justify';
                }
            }else if(type=='vertical-align'){
                unit = '';
                if(val==0){
                    val = 'top';
                }else if(val==1){
                    val = 'middle';
                }else if(val==2){
                    val = 'bottom';
                }
            }
            if(type.match(/^margin/) == null && val < 0) { // マージン設定以外の場合、値がマイナス値の場合は設定せず
                val = null;
            }
        }
        if(val){ // 設定値がnullでなければ
            res = {'val': val, 'unit': unit}; // 数値と+単位を配列に格納して返す nullの場合はfalseを返す
        }
        return res;
    }
});

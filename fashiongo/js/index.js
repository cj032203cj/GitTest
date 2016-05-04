$(function () {
       function stopBubble(e){
           if(e.stopPropagation){
               e.stopPropagation()
           }else{
               e.cancelBubble=true;
           }
       }
    $('#recom').hover(function () {
        $('#more_recom').show();
    }, function () {
        $('#more_recom').hide();
    })
    $.each($('#more_recom li'), function (index) {
        $('#more_recom li').eq(index).append('<a href=""><img src="images/more' + (index + 1) + '.jpg" alt=""></a>')
    })

    $('#more_recom li').hover(function () {
        $(this).children('.about').show()
    }, function () {
        $(this).children('.about').hide()
    })
    $.each($('#carousel_fig li'), function (index) {
        $('#carousel_fig li').eq(index).append('<a href=""><img src="images/lunbo' + (index + 1) + '.jpg" alt=""></a>')
    })
    var index = 0;
    $('#turnL').click(function (e) {
        stopBubble(e);
        console.log(index)
        index++;
        if (index == 5) {
            index = 0;
        }
        $('#carousel_fig ul').animate({
            'left': (-index * 222) + 'px'
        }, 300)
    })
    $('#turnR').click(function (e) {
        stopBubble(e);

        index--;
        if (index == 0) {
            index = 5;
        }
        $('#carousel_fig ul').stop(true).animate({
            'left': (index * 222) + 'px'
        }, 300)
    })
    $.each($('#con3_r li'), function (index) {
        $('#con3_r li').eq(index + 1).append('<a href=""><img src="images/con3_' + (index + 2) + '.jpg" alt=""></a>')
    })
    $('#yzm_content').click(function (e) {
        stopBubble(e);
        var a = '';
        for (var i = 0; i < 4; i++) {
            var j = Math.floor(Math.random() * 3);
            if (j == 1) {
                a += String.fromCharCode(Math.floor(Math.random() * 10 + 48));
            } else if (j == 2) {
                a += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
            } else {
                a += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
            }
        }
        $('#yzm_content').html(a);
    })
    $('#fast_register').click(function(e){
       
        stopBubble(e);

        $('#fast_register').css({'border-radius': '27px','background': '#2B2B2B','color': 'white','z-index':'100'}).parent().find('#fast_login').css({'background':'white','border-radius':'0','color':'black','z-index':'0'})
        $('#login_1').hide();
        $('#register_1').show();
        return false;
    })
    $('#fast_login').click(function(e){
        stopBubble(e);

        $('#fast_login').css({'border-radius': '27px','background': '#2B2B2B','color': 'white','z-index':'100'}).parent().find('#fast_register').css({'background':'white','border-radius':'0','color':'black','z-index':'0'})
        $('#login_1').show();
        $('#register_1').hide();
        return false;
    })
    $('#btn_login').click(function(e){
       
     
        $('#login').show();
         return false;
    })
    $('#login').click(function(){
        $('#login').hide();
        return false;
    })
    $('#login_c').click(function(){
        $('#login').show();
        return false
    })
    $.get('data/cloth.json',function(res){
        clothList(res)
        function clothList(res){
        for(var i=0;i<res.cloth.length;i++){
          var $oCloth=$(' <div class="cloth_pic"><a href=""><img src="'+res.cloth[i].url+'" alt=""></a></div><p class="cloth_feel"><img src="'+ res.cloth[i].urls+'" alt=""></p><p class="cloth_style"><a href="">'+res.cloth[i].style+'</a></p><p class="cloth_type"><a href="">'+res.cloth[i].type+'</a></p><p class="cloth_price">'+res.cloth[i].price+'</p>')
          $('#con5 li').eq(i).append($oCloth)
          //$('#con9 li').eq(i).append($oCloth)
        }
    }
    })
      $.get('data/cloth.json',function(res){
        clothList(res)
        function clothList(res){
        for(var i=0;i<res.cloth.length;i++){
          var $oCloth=$(' <div class="cloth_pic"><a href=""><img src="'+res.cloth[i].url+'" alt=""></a></div><p class="cloth_feel"><img src="'+ res.cloth[i].urls+'" alt=""></p><p class="cloth_style"><a href="">'+res.cloth[i].style+'</a></p><p class="cloth_type"><a href="">'+res.cloth[i].type+'</a></p><p class="cloth_price">'+res.cloth[i].price+'</p>')
          
          $('#con9 li').eq(i).append($oCloth)
        }
    }
    })
    $.get('data/cloths.json',function(res){
        clothList(res)
        function clothList(res){
        for(var i=0;i<res.cloth.length;i++){
          var $oCloth=$(' <div class="cloth_pic"><a href=""><img src="'+res.cloth[i].url+'" alt=""></a></div><p class="cloth_feel"><img src="'+ res.cloth[i].urls+'" alt=""></p><p class="cloth_style"><a href="">'+res.cloth[i].style+'</a></p><p class="cloth_type"><a href="">'+res.cloth[i].type+'</a></p><p class="cloth_price">'+res.cloth[i].price+'</p>')
          $('#con7 li').eq(i).append($oCloth)
          
        }
    }
    })
     $.get('data/cloths.json',function(res){
        clothList(res)
        function clothList(res){
        for(var i=0;i<16;i++){
          var $oCloth=$(' <div class="cloth_pic"><a href=""><img src="'+res.cloth[i].url+'" alt=""></a></div><p class="cloth_feel"><img src="'+ res.cloth[i].urls+'" alt=""></p><p class="cloth_style"><a href="">'+res.cloth[i].style+'</a></p><p class="cloth_type"><a href="">'+res.cloth[i].type+'</a></p><p class="cloth_price">'+res.cloth[i].price+'</p>')
          $('#con11 li').eq(i).append($oCloth)
          
        }
    }
    })
    
})
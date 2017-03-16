<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script type="text/javascript">
    var OFFSETX = $('.separator_line').offset().left;

    $('.after').each(function(i, obj) {
        var img_width = $(obj).find('img').width(),
            init_split = Math.round(img_width/2);
        $(obj).width(init_split);
        $(obj).parent().find('.separator_line').offset({left: init_split+OFFSETX});
    });

    $('.before_after_slider').mousemove(function(e){
        var offX  = (e.offsetX || e.clientX - $(e.currentTarget).find('.after').offset().left);
        if (offX == -1) {
            return;
        }
        $(e.currentTarget).find('.after').width(offX);
        $(e.currentTarget).find('.separator_line').offset({left:offX+OFFSETX});
    });
		
    $('.before_after_slider').mouseleave(function(e){		
        var img_width = $(e.currentTarget).find('img').width(),
            init_split = Math.round(img_width/2);
        $(e.currentTarget).find('.after').width(init_split);  
        $(e.currentTarget).find('.separator_line').offset({left: init_split+OFFSETX});
    });	
</script>

var scp_id = $.getUrlParam('id');
$('title').append("SCPs Introduction -- "+scp_id);
$.ajax({
    url:"./data/SCPs.xml",
    dataType:'xml',
    type:'get',
    timeout:2000,
    error: function(xml){
        console.log('加载xml文件失败!');
    },
    success: function(xml){
        $(xml).find("SCP").each(function(i){
            var id = $(this).children('id').text().trim();
            if(id === scp_id){
                var name = $(this).children('name').text().trim();
                var level = $(this).children('level').text().trim();
                var img_src = 'img/SCPs/'+ level +'/'+$(this).children('pic_src').text().trim();
                var from = $(this).children('from').text().trim();
                $('#scp_id').append(id);
                $('#scp_name').append(name);
                $('#scp_level').append(level);

                $(this).find('description').each(function(i){
                    console.log($(this)[0].textContent.trim());
                    $('#description-ul').append('<li>'+ $(this)[0].textContent.trim() +'</li>')
                });

                $('#description-image').attr('src', img_src);
                $('#description-image').attr('alt', id + '的图片');

                $(this).find('measures').each(function(i){
                    console.log($(this)[0].textContent.trim());
                    $('#measures-ul').append('<li>'+ $(this)[0].textContent.trim() +'</li>')
                });

                $('#footer').append('本档案由--身份不明--创作的'+ id +'：<a href="'+from+'">' + from +'</a>');
            }
        });
    }

});
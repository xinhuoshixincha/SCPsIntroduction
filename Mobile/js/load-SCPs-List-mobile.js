
function get_list(level){
    $.ajax({
        url:"../data/SCPs.xml",
        dataType:'xml',
        timeout:2000,
        error: function(xml){
            console.log('加载xml文件失败!');
        },
        success: function(xml){
            $(xml).find("SCP").each(function(i){
                var scp_level = $(this).children('level').text().trim();
                if(level === scp_level || level === 'all'){
                    var id = $(this).children('id').text().trim();
                    var name = $(this).children('name').text().trim();

                    $('table').append(
                        '<tr>' +
                        '<td>' +'<a href="SCPInformation-mobile.html?id='+id+'" target="_parent">'+ id +'</a>' +'</td>'+
                        '<td>' +'<a href="SCPInformation-mobile.html?id='+id+'" target="_parent">'+ name + '</a>' +'</td>'+
                        '<td>'+ '<a href="'+scp_level+'SCPs-mobile.html">' +scp_level + '</a>'+'</td>'+
                        '</tr>'
                    );
                }
            });
        }

    });
}
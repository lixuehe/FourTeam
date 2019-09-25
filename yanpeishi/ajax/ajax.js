$("#fasong").click(function(){ 	
    $(function(){
        $.ajax({ 
            url:'aa.txt',	
            type: 'GET',
            dataType:'text',
            success:function(data){	
                $("#div1").html(data);
            }
        });
    
    });
  
})



function getArea(areaCode) {
  //alert(cityCode)
  $.ajax({
    "url":"127.0.0.1",
    "data":"areaCode="+areaCode,
    "type":"GET",
    "dataType":"json",
    "success":function (obj) {
      $("#receiverDistrict").html("<option value='0>---先----</option>");
      for(var i=0;i<obj.data.length;i++){
        var str = "<option value="+obj.data[i].areaCode+">"+obj.data[i].areaName+"<option >"
        $("#receiverDistrict").append(str);
      }
    }
  })
}

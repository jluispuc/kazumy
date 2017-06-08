function Kazumy(){

}

Kazumy.prototype.viewText = function (id, data) {
  $(id).append('<p>'+data+'</p>');
};

Kazumy.prototype.dataView = function (id, dataJSON) {
  var content = $(id).text();
  var arrayString = content.split(" ")

  arrayString.forEach( function (item, index) {
    if(item != "" && item != " "){
      var element = item.substring(1);
alert(element)
      //for (var key in dataJSON) {
        if(element != " " ){
          remplazo = '%'+element
          console.log(element)
          content = content.replace(remplazo, dataJSON[element])
        }  
      //}
    }
  });

  $(id).text(content);
};

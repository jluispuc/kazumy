function Kazumy(){

}

Kazumy.prototype.viewText = function (id, data) {
  $(id).append('<p>'+data+'</p>');
};

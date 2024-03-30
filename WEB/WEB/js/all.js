var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?eab41bd983421fea320c78826af4cf77";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



$(function(){
  $.get("/WEB/html/bottom/bottom.html",function(data){
    $("#xiamian").html(data)
  })
});
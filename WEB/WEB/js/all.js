var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9c056e7c8a4d1415364905e8b123fe5a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$(function(){
  $.get("/WEB/html/bottom/bottom.html",function(data){
    $("#xiamian").html(data)
  })
});
$(".secondary-content").click(function(){
	var video = $(this).data("link");
  $("iframe#video").find("source#source").attr("src", video);
 	$("iframe#video").load()
 	$("iframe#video").get(0).play()
});
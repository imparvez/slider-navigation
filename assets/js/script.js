$(document).ready(function(){

	$(".label").on('click',function(){
    var $this = $(this);
  	$this
      .find("ul").slideToggle("fast");
    if($this.find(".icon").text() === "+") {
      $this.find(".icon").text("-")
    } else {
      $this.find(".icon").text("+")
    }
  });
});
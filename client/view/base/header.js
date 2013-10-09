Template.header.helpers({
})
Template.header.rendered=function(){
	$(window).bind("scroll", function() {
        var st = $(document).scrollTop();
        if (st>50) {
        	 $("#header").addClass('navbar-fixed-top');
        }else{
        	$("#header").removeClass('navbar-fixed-top');
        }
    });
}
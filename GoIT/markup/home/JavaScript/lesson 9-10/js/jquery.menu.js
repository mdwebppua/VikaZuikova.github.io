$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
        
        $( 'nav, .sub-menu li' ).mouseenter(
			function () {
				$(this).animate({
					backgroundColor:"#e09494",
			}, 200 );
		});

		$( 'nav, .sub-menu li' ).mouseleave(
			function() {
				jQuery(this).animate({
					backgroundColor: "#ff6464",
			}, 200 );
		});

		$( '.dropdown li' ).mouseenter(
			function () {
				$(this).animate({
					backgroundColor:"#e09494",
			}, 200 );
		});

		$( '.dropdown li' ).mouseleave(
			function() {
				jQuery(this).animate({
					backgroundColor: "#e14b4b",
			}, 200 );
		});

	

});

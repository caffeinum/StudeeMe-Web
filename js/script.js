$(function () {
	var $stud = $('.stud');
	$stud.focus( $stud.val.bind($stud, '') );
	$stud.blur( $stud.val.bind($stud, $stud.attr('value')) );
	
});

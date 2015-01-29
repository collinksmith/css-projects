
$(document).ready(function() {
	var size = 16
	var redo = function(size) {
		var box_size = 480/size
		for (var r=0; r<size; r++) {
			$('table').append("<tr></tr>");
		};
		for (var c=0; c<size; c++) {
			$('tr').append("<td class='grid' width='" + box_size + "px' height='" + box_size + "px'></td>");
		};
		$('.grid').mouseenter(function() {
			$(this).addClass('hover')
		});
		console.log('test')
	}
	redo(16);
	$('#reset').click(function() {
		$('.grid').removeClass('hover');
		var size = prompt("What size grid do you want?");
		console.log(size);
		$('tbody').empty();
		redo(size);
	});

});

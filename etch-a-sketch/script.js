
$(document).ready(function() {
	var redo = function(size) {
		var box_size = 320/size
		for (var r=0; r<size; r++) {
			$('table').append("<tr></tr>");
		};
		for (var c=0; c<size; c++) {
			$('tr').append("<td class='grid' width='" + box_size + "px' height='" + box_size + "px'></td>");
		};
		$('.grid').mouseenter(function() {
			$(this).addClass('hover')
		});
	}
	redo(64);
	$('#reset').click(function() {
		$('.grid').removeClass('hover');
		var size = prompt("Select the number of columns/rows.");
		console.log(size);
		$('tbody').empty();
		redo(size);
	});

});

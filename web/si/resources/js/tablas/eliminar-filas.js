$(document).ready(function() {
    var table = $('.tabla').DataTable();
 
    $('.tabla tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('.eliminar').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );



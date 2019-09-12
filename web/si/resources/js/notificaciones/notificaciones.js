$(document).ready(function(){

	$('#notificaciones').click(function(){
		toastr["error"]("El sistema le informara cuando hayan notificaciones","NO TIENE NUEVAS NOTIFICACIONES");
	});
	toastr.options = {
  "closeButton": true,
  "debug": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": true,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
});

// MENSAJES
$(document).ready(function(){

	$('#mensajes').click(function(){
		toastr["warning"]("El sistema le informara cuando hayan mensajes","NO TIENE NUEVOS MENSAJES");
	});
	toastr.options = {
  "closeButton": true,
  "debug": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": true,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
});

// PRODUCTOS

$(document).ready(function(){

	$('#productos').click(function(){
		toastr["error"]("El sistema le informa cuando haya mas productos","LO SENTIMOS EN ESTE MOMENTO EL PRODUCTO ESTA AGOTADO");
	});
	toastr.options = {
  "closeButton": true,
  "debug": true,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": true,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
});
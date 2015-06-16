(function($){
	// Birth year list population
	for (i = new Date().getFullYear(); i > 1900; i--) {
    	$('#birthYear').append($('<option />').val(i).html(i));
    	//$('.dropdown .dropdown-menu').append($('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+i+'</a></li>'));

	}

	/* 
	// Mall list toggle script
	var cm = $(".all-malls-en");
	cm.on('click', function(e){
		e.preventDefault();
		$(".see-all-malls").toggle("slow", function(){
			if(cm.text() === "SEE MORE MALLS"){
				cm.text("SEE LESS");
			}else{
				cm.text("SEE MORE MALLS");
			}
		}); 
	});

	var cm = $(".all-malls-fr");
	cm.on('click', function(e){
		e.preventDefault();
		$(".see-all-malls").toggle("slow", function(){
			if(cm.text() === "VOIR MOINS"){
				cm.text("Voir d’autres centres commerciaux");
			}else{
				cm.text("VOIR MOINS");
			}
		}); 
	});
 */ 
	

	$("#modal-cancel").click(function(){
		$("#model-unsubscribe").fadeOut();
		$(".modal-backdrop").fadeOut();
	})
	
	//Mall select script
	$(".all-malls-list li input[type='checkbox']").change(function(elem){
		var self = $(this),
			mval = self.val(),
			id = self.attr("id");

		if(this.checked === true){
			var data = "<li class='pink-chkmark' data-id="+id+">" + mval + "</li>";
			$(data).appendTo(".selected-mall ul").slideDown('slow');
			$("#mall-select").html(" ");
		} else{
			$(".selected-mall").find('li[data-id="' + id + '"]').slideUp("slow", function(){
				$(this).remove();
			});
		}
	});
	
	$("#registration_form input[type='checkbox']").click(function(){
		$(this).closest("label").find("span").toggleClass("custom-checkmark-chkd");
	});
	
	//Mall select validation
	$(document).on('submit', '#registration_form', function () {
		if ($("input[type='checkbox'][name='mall[]']:checked").size() > 0){
				$("#mall-select").html(" ");
			} else{
				var errorMsg = $(".mall-validation").attr("data-error"); 
				$("#mall-select").html("<ul class='list-unstyled'><li>" + errorMsg + "</li></ul>");
				return false;
			}
	});

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
	//do stuff
		$('body').addClass('android');
	}
})(jQuery); 
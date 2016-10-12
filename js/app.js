var contacts = [];
var isSecondPhoneVisible=false;
var isSecondAddressVisible=false;

$(document).ready(function(){
	$("#phone2").hide();
	$(".secondAddress").hide();

	$("form").on("submit",function(event){
		event.preventDefault();

		var allPhoneNumbers=[$("#phone").val()];
		if (isSecondPhoneVisible){
			allPhoneNumbers.push($("#phone2").val());
		}

		var contact = {
			firstName:$("#firstName").val(),
			lastName:$("#lastName").val(),
			phoneNumbers: allPhoneNumbers,
			address:[{
				street:$("#street").val(),
				city:$("#city").val(),
				state:$("#state").val()
			}]
		};
		
		if ($("#street2").val()) {
			contact.address.push({
				street:$("#street2").val(),
				city:$("#city2").val(),
				state:$("#state2").val()
			});
		}

		contacts.push(contact);
		$(".contacts").append('<li><a class="contactLink" data-index="'+(contacts.length - 1)+'" href="#">'+contact.firstName + ' ' + contact.lastName+'</a></li>');
		clearForm();
	});	
	$(document).on("click", ".contactLink",function(event){
		var index = $(this).data('index');
		$('.contactDetailsName').text(contacts[index].firstName + ' ' + contacts[index].lastName);
		$('.contactDetailsFirstName').text("First Name: "+contacts[index].firstName);
		$('.contactDetailsLastName').text("Last Name: "+contacts[index].lastName);
		$('.contactDetailsPhone').text("Phone Number(s): "+contacts[index].phoneNumbers[0]);
		if (contacts[index].phoneNumbers.length>1){
			$('.contactDetailsPhone').append(", "+contacts[index].phoneNumbers[1]);
		}
		$('.contactDetailsAddress').html("Address: "+contacts[index].address[0].street + " <br> " + contacts[index].address[0].city + " <br> " + contacts[index].address[0].state);
		if (contacts[index].address.length>1){
			$('.contactDetailsAddress').append("<br> Address 2: "+contacts[index].address[1].street + " <br> " + contacts[index].address[1].city + " <br> " + contacts[index].address[1].state);
		}
	});
	$("#addPhoneNumber").on("click",function(event){
		isSecondPhoneVisible=true;
		$("#phone2").show();
	});
	$("#addAddress").on("click",function(event){
		isSecondAddressVisible=true;
		$(".secondAddress").show();
	});
});

function clearForm() {
	$("#firstName").val("");
	$("#lastName").val("");
	$("#phone").val("");
	$("#phone2").val("");
	$("#street").val("");
	$("#city").val("");
	$("#state").val("");
	$("#street2").val("");
	$("#city2").val("");
	$("#state2").val("");
	$("#phone2").hide();
	isSecondPhoneVisible=false;
	$(".secondAddress").hide();
}

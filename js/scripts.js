// BACK END //
function Contact(first, last, email) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}




// FRONT END //
$(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var inputtedEmail = $("#email").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail);

    $("#show-contact").show();

    $("#table").append("<tr><td><span class='first-name'>" + newContact.firstName + "</span></td><td><span class='last-name'>" + newContact.lastName + "</span></td><td><span class='email'>" + newContact.email + "</span></td></tr>")

  });
});

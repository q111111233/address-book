// BACK END //
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.emails = [];
}

// FRONT END //
$(function() {
  $("#add-email").click(function() {
    $("#new-email").append('<div id="new-email">' +
                            '<div class="new-email">' +
                              '<div class="form-group">' +
                                '<label for="new-email">Enter an email:</label>' +
                                '<input type="text" id="new-email" class="form-control">' +
                              '</div>' +
                            '</div>' +
                          '</div>');
  $("#fields").append('<td>Another Email</td>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-email").each(function() {
      var inputtedEmail = $(this).find("#new-email").val();
      newContact.emails.push(inputtedEmail)
    });

    $("#show-contact").show();

    $("#table").append("<tr class='contact-table'><td><span class='first-name'>" +
                        newContact.firstName +
                        "</span></td><td><span class='last-name'>" +
                        newContact.lastName +
                        "</span></td></tr>");
    newContact.emails.forEach(function(email) {
      $(".contact-table").last().append("<td>" + email + "</td>");
    });
  });
});

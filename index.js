$(document).ready(function () {
    $('#validateButton').click(function () {
      // Get the email input value
      event.preventDefault();
      const email = $('#email').val();
      const password = $('#password').val();
      console.log(email)

      // Define regex for email validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordPattern = /^\d{10}$/;

      // Validate email
      if (emailPattern.test(email)) {
        $('#result').text('Valid email address.').css('color', 'green');
        $('#email').css("color","green")
      } else {
        $('#result').text('Invalid email address.').css('color', 'red');
        $('#email').css("color","red")
      }

      if (passwordPattern.test(password)) {
        $('#result2').text('The phone number is valid.').css('color', 'green');
        $('#password').css("color","green")
      } else {
        $('#result2').text('enter the valid phone number').css('color', 'red');
        $('#password').css("color","red")
      }
    });
  });
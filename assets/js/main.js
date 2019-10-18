$(document).ready(function() {
    //Form Label Animate
    $('input').focus(function() {
        $(this).parents('.form-group').addClass('focused');
    });
    $('input').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })
    //Error Handling
    $('#email').on('keydown', function() {
        var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
        if (!re) {
            $('#mailErr').addClass('show-error');
        } else {
            $('#mailErr').removeClass('show-error');
        }
    });
    $('#email').on('keyup', function() {
        if (document.getElementById("email").value == "") {
            $('#mailErr').removeClass('show-error');
        }
    });
    $('#password').on('keydown', function() {
        $('#passErr').addClass('show-error');
    });
    $('#password').on('keyup', function() {
        if (document.getElementById("password").value == "") {
            $('#passErr').removeClass('show-error');
        }
    });
});
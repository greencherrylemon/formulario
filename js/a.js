$(document).ready(function() {

    $('#mG61Hd').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-exclamation-sign',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

           "entry.537748726": {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor proporcione su nombre y apellido'
                    }
                }
            },
            "entry.1218411985": {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor proporcione su dirección de residencia'
                    }
                }
            },
            "entry.420552948": {
                validators: {
                    notEmpty: {
                        message: 'Por favor proporcione su dirección de correo electrónico'
                    },
                    emailAddress: {
                        message: 'Por favor proporcione una dirección de correo electrónico válida'
                    }
                }
            },
            "entry.567149123": {
                validators: {
                    notEmpty: {
                        message: 'Por favor proporcione su número de teléfono'
                    },
                    phone: {
                        country: 'COP',
                        message: 'Proporcione un número de teléfono válido'
                    }
                }
            }
            }
        })
        .on('success.form.bv', function(e) {
            
            $('#mG61Hd').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});
$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true, 
            },
            email: {
                required: true
            },
            
            telefone: {
                required: true
            },
            
            enderecoCompleto: {
                required: true
            },
            cep: {
                required: false
            },
        },
        messages: {
            nome: 'Insira seu nome completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids ();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos não preenchidos corretamente`)
            }
        }
    })
})

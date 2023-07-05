$(document).ready(function(){
    $('#tel').mask('(00)00000-0000',{
        placeholder:'(00)00000-0000',
    });

    $('#cpf').mask('000.000.000-00',{
        placeholder:'000.000.000-00',
    })

    $('#cep').mask('00.000-000',{
        placeholder:'00.000-000',
    })
})

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        tel:{
            required: true
        },
        email:{
            required: true
        },
        cpf:{
            required: true
        },
        rua:{
            required: true
        },
        bairro:{
            required: true
        },
        numero:{
            required: true
        },
        cep:{
            required: true
        },
    },submitHandler: function(form){
        console.log(form)

    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    },

})



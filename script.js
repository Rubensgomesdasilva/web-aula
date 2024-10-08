/*function demonstrarRegexCPF(cpf){
    const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
    const resultado = regex.exerc(cpf);

    if(resultado){
        console.log('Texto ${')
    }
}*/
$(document).ready(function()
{
    $('#meuFormulario').on('submit', function(event){
        event.preventDefault();
        //resetar as mensagens de erro
        $('.form-control').removeClass('is-invalid');
        let isValid = true;

        //validação do nome (apenas letras e espaços)

        const nome = $('#nome').val().trim();
        if(!/^[a-zA-Z\s]+$/.test(nome)){
            $('#nome').addClass('is-invalid');
            isValid = false;
        }
        //validar email
        const email = $('#email').val().trim();
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }
        //validar senha
        const senha = $('#senha').val();
        if(senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)){
            $('#senha').addClass('is-invalid');
            isValid = false;
        }
        //CONFIRMAÇÃO
        
        const confirmarSenha = $('#confirmarSenha').val();
        if (confirmarSenha !== senha) {
            $('#confirmarSenha').addClass('is-invalid');
            isValid = false;
        }
        //validar telefone (69)99205-5874
       
        // Validação do telefone (formato (XX) XXXXX-XXXX)
        const telefone = $('#telefone').val().trim();
        if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
            $('#telefone').addClass('is-invalid');
            isValid = false;
        }
         // Validação do CPF (formato XXX.XXX.XXX-XX)

         const cpf = $('#cpf').val().trim();
         if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
             $('#cpf').addClass('is-invalid');
                isValid = false;
        }
        if(!isValid)return;

         this.submit();

    })
})

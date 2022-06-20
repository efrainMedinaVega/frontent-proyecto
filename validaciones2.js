
function validarForma(forma) {

    var premi=parseInt(forma.premi.value);
    if (premi==1) {
        alert("Hola 1");
        return false;
    }



    //Validamos el usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        //alert("Debe proporcionar un nombre de usuario");
        document.getElementById("alertas").innerHTML="Debe proporcionar un nombre de usuario";
        document.getElementById("alertas").className="alert alert-warning";
        usuario.focus();
        usuario.select();

        //mostrar una opcion de sweet alert2
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error llena los campos marcados',
            footer: '<a href="">Why do I have this issue?</a>'
          })


        return false;
    }

    
    //Validamos el password
    var password = forma.password;
    if (password.value == "" || password.value.length < 3) {
        //alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();

        //mostrar una opcion de sweet alert2
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error llena los campos marcados',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        return false;
    }

    //validacion correo
    //nombreusuario@dominio.com
    var correo=forma.email.value;
    console.log(correo);
    var expresionCorreo=/\w+\@+\w+\.+[a-z]/;
    if(!expresionCorreo.test(correo)){
        document.getElementById("alertas").className="alert alert-warning";
        document.getElementById("alertas").innerHTML="Debe proporcionar un correo válido.";
        return false;
        //mostrar una opcion de sweet alert2
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error llena los campos marcados',
            footer: '<a href="">Why do I have this issue?</a>'
          })

    }else{
        document.getElementById("alertas").className="alert alert-success";
        document.getElementById("alertas").innerHTML="Correo valido!";
        return false;
    }



    //Validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;

    //revisamos si se selecciono algun checkbox
    for (i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("Debe proporcionar una Tecnologia");
        //mostrar una opcion de sweet alert2
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error llena los campos marcados',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        return false;
    }

    //Validamos el Genero
    var generos = forma.genero;
    var radioSeleccionado = false;

    //revisamos si se selecciono algun radiobutton
    for (i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe seleccionar el Genero");
        return false;
    }


    //Validamos la ocupacion
    var ocupacion = forma.ocupacion;
    if (ocupacion.value == "") {
        alert("Debe seleccionar una ocupacion");
        //mostrar una opcion de sweet alert2
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error llena los campos marcados',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        return false;
    }


    //Formulario validado
    alert("Formulario valido, enviando datos...");
    Swal.fire(
        'Datos correctos!',
        'Gracias por llenar el registro!',
        'question'
      )

    return true;
}

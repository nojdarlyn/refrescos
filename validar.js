function go(){
        if (document.ingreso.usuario.value=='Darlyn' && document.ingreso.contraseña.value=='examen')
        {document.ingreso.submit();}
    
        else{
            alert("Ingrese su usuario y contraseña correctos.");
        }
    }
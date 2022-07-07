function validarformulario(){
    let x= document.form["frm1"]["Nombre"].value
}
if(x===""){
    alert("SE DEBE COMPLENTAR EL NOMBRE");
    return false;
}

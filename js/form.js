const d = document,
    AbrirForm = d.getElementById("openfor"),
    CerrarForm = d.getElementById("exitForm"),
    Form = d.querySelector(".DivForm");

/* Función Mostrar Contraseña */
    function ShowPassw() {
        const Password = d.getElementById("password"),
            Checkbox = d.getElementById("showpassw"),
            Checkbox2 = d.getElementById("showpassws"),
            Contrasenia1 = d.getElementById("createPassw1"),
            Contrasenia2 = d.getElementById("createPassw2");
        
        Checkbox.addEventListener("change", (e) => {

            if (Checkbox.checked) {
                Password.type = "text";
            }
            if (!Checkbox.checked) {
                Password.type = "password";
            }
        });

        Checkbox2.addEventListener("change", (e) => {

            if (Checkbox2.checked) {
                Contrasenia1.type = "text";
                Contrasenia2.type = "text";
            }
            if (!Checkbox2.checked) {
                Contrasenia1.type = "password";
                Contrasenia2.type = "password";
            }
        });
    }

    function ShowForm() {
        d.addEventListener("click", (e) => {
            if (e.target===AbrirForm) {
                Form.classList.add("activo");
            }
            
            if (e.target===CerrarForm) {
                
                Form.classList.remove("activo");
            }
        });
    }
    
    


d.addEventListener("DOMContentLoaded", (e) => {
    ShowPassw();
    ShowForm();
});
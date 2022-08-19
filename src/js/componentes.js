import "../css/componentes.css";

export const saludar = (nombre = "Desconocido") => {
    console.log("Creando etiqueta H1");

    // H1
    const h1 = document.createElement("H1");
    h1.innerText = `Hola ${nombre}, bienvenido a mi aplicacion!`;
    document.body.append(h1);
};

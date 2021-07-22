const respuestaCorrecta = document.querySelector("#respuesta-correcta");
const primeraRespuestaIncorrecta = document.querySelector("#primera-respuesta-incorrecta");
const segundaRespuestaIncorrecta = document.querySelector("#segunda-respuesta-incorrecta");
const resultado = document.querySelector("#resultado");

respuestaCorrecta.onclick = () => {
    respuestaCorrecta.style.backgroundColor = "green";
    resultado.textContent = "¡Respuesta correcta!";
}

primeraRespuestaIncorrecta.onclick = () => {
    respuestaCorrecta.style.backgroundColor = "green";
    primeraRespuestaIncorrecta.style.backgroundColor = "red";
    segundaRespuestaIncorrecta.style.backgroundColor = "red";
    resultado.textContent = "¡Respuesta equivocada!";
}

segundaRespuestaIncorrecta.onclick = () => {
    respuestaCorrecta.style.backgroundColor = "green";
    primeraRespuestaIncorrecta.style.backgroundColor = "red";
    segundaRespuestaIncorrecta.style.backgroundColor = "red";
    resultado.textContent = "¡Respuesta equivocada!";
}
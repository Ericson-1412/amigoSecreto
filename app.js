let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "" || amigos.includes(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p style="color: #7CFC00; font-weight: bold;">El amigo secreto sorteado es: ${amigoSorteado}</p>`;
}

function reiniciarJuego() {
    amigos = []; // Vacía la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

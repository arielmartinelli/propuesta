// Función para navegar a la segunda página
function goToPage2() {
    Swal.fire({
        title: '¡Bancamos el adentro!',
        text: "Te redirigiremos al siguiente paso",
        icon: 'success',
        confirmButtonText: 'Continuar',
        customClass: {
            popup: 'swal-large',   // Clase personalizada para agrandar
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'pag1.html';
        }
    });
}

// Función para mostrar alerta al presionar "No"
function showNoAlert() {
    Swal.fire({
        title: 'Oh, está bien!',
        text: "La próxima será.",
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-large',         // Clase personalizada para agrandar la alerta
        }
    });
}


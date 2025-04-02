document.addEventListener('DOMContentLoaded', function () {
    Swal.fire({
        title: 'Ups',
        text: 'No es una notica de Messi pero...',
        icon: 'question',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-large'
        },
        willClose: () => {
            window.location.href = 'index2.html'; // Redirige a index2.html
        }
    });
});
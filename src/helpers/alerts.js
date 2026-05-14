import Swal from "sweetalert2";

export function generalAlert(title, text, icon) {
  Swal.fire({
    title,
    text,
    icon,
  });
}

export function redirectAlert(title, message, icon, url) {
  let timerInterval;
  Swal.fire({
    title,
    html: message + " <b></b> milisegundos.",
    timer: 2000,
    timerProgressBar: true,
    icon,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      window.location.href = url;
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer)
      console.log("I was closed by the timer");
  });
}

export function confirmAlert(end_point, id, update, titulo, texto, confirmacion) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmacion,
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(end_point + "/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          update();
        });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}

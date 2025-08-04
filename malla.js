document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach((ramo) => {
    if (!ramo.classList.contains("bloqueado")) {
      ramo.addEventListener("click", () => {
        desbloquearRamos(ramo.dataset.id);
      });
    }
  });
});

function desbloquearRamos(idAprobado) {
  const bloqueados = document.querySelectorAll(`.ramo.bloqueado[data-prereq="${idAprobado}"]`);

  bloqueados.forEach((ramo) => {
    ramo.classList.remove("bloqueado");
    ramo.style.textDecoration = "none";
    ramo.style.color = "#111";
    ramo.style.backgroundColor = "#60a5fa";
    ramo.addEventListener("click", () => {
      desbloquearRamos(ramo.dataset.id);
    });
  });
}


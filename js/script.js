// atualizar string do botao do tema
function alternartema() {
  const botaoTema = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-theme")) {
    botaoTema.textContent = "Tema Claro";
  } else {
    botaoTema.textContent = "Tema Escuro";
  }
}

// alternar tema
document.getElementById("theme-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  alternartema();
});

// acessibilidade
document.getElementById("accessibility-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("large-font");
});

// alerta do contato
document.getElementById("form-contato")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Página em construção.");
});

// atualizar botao ao carregar a pagina
window.addEventListener("DOMContentLoaded", alternartema);

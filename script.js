// script.js - controle do tema (claro / escuro)
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('alternar-tema');
  if (!botao) return;

  const aplicarTemaSalvo = () => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
      document.body.classList.add('dark-mode');
      botao.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      botao.textContent = '🌙';
    }
  };

  // Carrega na abertura da página
  aplicarTemaSalvo();

  // Alterna e salva preferência
  botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const estaEscuro = document.body.classList.contains('dark-mode');
    localStorage.setItem('tema', estaEscuro ? 'escuro' : 'claro');
    botao.textContent = estaEscuro ? '☀️' : '🌙';
  });
});


/* ---------- ANIMAÇÕES AO ROLAR ---------- */

const elementosAnimados = document.querySelectorAll(
  ".animacao-entrada, .animacao-esquerda, .animacao-direita, .animacao-zoom"
);

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("animacao-visivel");
        observador.unobserve(entrada.target); // anima apenas uma vez
      }
    });
  },
  { threshold: 0.2 }
);

elementosAnimados.forEach((el) => observador.observe(el));

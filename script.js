document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    let hasAnimated = false;

    // 1. Inicializa todas as barras de progresso com largura zero
    progressBars.forEach(bar => {
        bar.style.width = '0';
    });

    // Função que aplica a largura animada
    function animateSkills() {
        progressBars.forEach(bar => {
            // Pega o valor da porcentagem do novo atributo
            const level = bar.getAttribute('data-skill-level');
            
            // Define a largura da barra com o valor capturado
            setTimeout(() => {
                bar.style.width = level;
            }, 100); 
        });
    }

    // Função que verifica se a seção de Hard Skills está visível
    function checkScroll() {
        if (!skillsSection || hasAnimated) return;

        const rect = skillsSection.getBoundingClientRect();
        
        // Se a parte superior da seção estiver na tela ou acima dela, e a parte inferior ainda estiver visível
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateSkills();
            hasAnimated = true; // Anima apenas uma vez
            window.removeEventListener('scroll', checkScroll); // Remove o listener após animar
        }
    }

    // Adiciona o listener para o scroll
    window.addEventListener('scroll', checkScroll);
    
    // Chama a checagem inicial para o caso da seção já estar visível ao carregar a página
    checkScroll(); 
});
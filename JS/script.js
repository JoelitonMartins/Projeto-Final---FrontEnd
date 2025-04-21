// Interatividade para menus dropdown
const dropdownMenus = document.querySelectorAll('.dropdown');

if (dropdownMenus) {
    dropdownMenus.forEach(menu => {
        const toggle = menu.querySelector('.dropdown-toggle');
        const content = menu.querySelector('.dropdown-content');

        toggle.addEventListener('click', () => {
            content.classList.toggle('show');
        });
    });
}

// Fechar dropdowns ao clicar fora
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            }
        });
    }
});

// Validação do formulário de reservas
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio do formulário padrão

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;

            // Validação simples de email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (name && email && phone && date && time && guests && emailPattern.test(email)) {
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
            } else {
                document.getElementById('success-message').style.display = 'none';
                document.getElementById('error-message').style.display = 'block';
            }
        });
    } else {
        console.error('Formulário de reservas não encontrado.');
    }
});

// Efeito de rolagem suave para links
const navLinks = document.querySelectorAll('.nav-menu a');
if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

       // Verifica se o usuário já aceitou os cookies
       if (localStorage.getItem('cookies-accepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }

    // Ao clicar no botão "Aceitar", o banner desaparece e registra a aceitação no localStorage
    document.getElementById('accept-cookies').addEventListener('click', function() {
        document.getElementById('cookie-banner').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('cookie-banner').style.display = 'none';
        }, 500); // Aguarda a transição de opacidade para desaparecer completamente
        localStorage.setItem('cookies-accepted', 'true');
    });

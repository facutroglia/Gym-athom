document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación activa dinámica al hacer Scroll (Estilo App)
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 2. Envío directo a WhatsApp desde el Formulario Móvil
    const waMobileForm = document.getElementById('waMobileForm');

    waMobileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('m-nombre').value;
        const actividad = document.getElementById('m-actividad').value;
        const mensaje = document.getElementById('m-mensaje').value;

        // Número Athom Gym
        const telefono = '5493512848492';

        const texto = `¡Hola ATHOM GYM!%0A%0A` +
                      `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
                      `*Actividad:* ${encodeURIComponent(actividad)}%0A` +
                      `*Consulta:* ${encodeURIComponent(mensaje)}`;

        window.open(`https://wa.me/${telefono}?text=${texto}`, '_blank');
    });
});
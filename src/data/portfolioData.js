// Configuración fácil de actualizar para el portafolio
export const portfolioData = {
  // Información personal
  personal: {
    name: "Alexis Mena",
    title: "Desarrollador de software .Jr | Fullstack",
    subtitle: "Especialista en crear experiencias digitales excepcionales",
    email: "alexismenadev09@gmail.com",
    phone: "+593999899136",
    whatsapp: "+593999899136",
    telegram: "tuusuario", // Usuario de Telegram sin @
    location: "Quito, Ecuador",
    avatar: "/src/images/AM.jpeg", // Ruta a la imagen del avatar
    resume: "/documents/CV.pdf"
  },

  // Sobre mí
  about: {
    description: `Desarrollador de software apasionado por crear interfaces de usuario intuitivas y experiencias digitales excepcionales. 
    Con experiencia en React, Vue.js y tecnologías modernas, me especializo en transformar diseños complejos en código limpio y eficiente. 
    Ademas de poseer conocimientos en manejo de bases de datos, soporte tecnico y redes, lo que me permite tener una visión integral del desarrollo de software.`,
    highlights: [
      "2+ años de experiencia en desarrollo de software Frontend y Backend",
      "Especialista en React.js y Next.js",
      "Enfoque en UX/UI y accesibilidad",
      "Metodologías ágiles y trabajo en equipo",
      "Soporte tecnico y gestión de redes",
      "Manejo de bases de datos SQL"
    ]
  },

  // Formación académica
  education: [
    {
      degree: "Ingeniería en Sistemas Inteligentes",
      institution: "Universidad Bolivariana del Ecuador",
      period: "2025 - Presente",
      description: "Enfoque en desarrollo de software, big data e inteligencia artificial"
    },
    {
      degree: "Tecnologo superior en desarrollo de software",
      institution: "Instituto Tecnológico Superior - Vicente Leon",
      period: "2021 - 2023",
      description: "Enfoque en desarrollo de software, aplicaciones web y moviles"
    }
  ],

  // Experiencia profesional
  experience: [
    {
      position: "Desarrollador Fullstack independiente",
      company: "Junta de agua potable y alcantarillado CALICANTO (JAAPC)",
      period: "Diciembre 2024 - Abril 2025",
      description: "Desarrollar una aplicación para esritorio para la gestión de usuarios, pagos y reportes de consumo de agua.",
      achievements: [
        "Redujo errores en los calculos para el sistema de facturación en un 30%",
        "Se implemento una mejorar a nivel de rendimiento al momento de ingresar datos y facturas del 25%",
        "Aporta un ambiente mas amigable para los operadores del sistema con una interfaz simple pero dinamica"
      ]
    },
    {
      position: "Desarrollador Frontend bajo modalidad freelance",
      company: "SeymourBot Academy",
      period: "Mayo 2025 - Agosto 2025",
      description: "Desarrollo de plataforma web para cursos en línea, integrando la lectura de archivos y contenido multimedia.",
      achievements: [
        "Desarrolló enfocado en la experiencia del usuario",
        "Implementó sistema de componentes UI reutilizable",
        "Optimizacion de recursos y rendimiento web"
      ]
    },
    {
      position: "Pasante de desarrollo de software y TICS",
      company: "GAD Municipal del Cantón Latacunga",
      period: "Agosto 2022 - Febrero 2023",
      description: "Soporte tecnico a equipos y redes, desarrollo de aplicaciones web internas para la gestión administrativa.",
      achievements: [
        "Brindó soporte técnico a más de 20 empleados, resolviendo problemas de hardware y software",
        "Soporte de redes internas y configuración de nuevos dispositivos",
        "Soporte de bases de datos y mantenimiento de sistemas internos"
      ]
    }

  ],

  // Habilidades técnicas
  technicalSkills: [
    { name: "React.js", level: 80, category: "Frontend" },
    { name: "Next.js", level:60, category: "Frontend" },
    { name: "JavaScript/TypeScript", level: 65, category: "Lenguajes" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "SASS/SCSS", level: 70, category: "Estilos" },
    { name: "Bootstrap", level: 90, category: "Frameworks" },
    { name: "Tailwind CSS", level: 85, category: "Frameworks" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "Figma", level: 60, category: "Design" },
    { name: "Python", level: 70, category: "Frameworks" },
    { name: "Mysql", level: 80, category: "Bases de datos" }
  ],

  // Habilidades blandas
  softSkills: [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Pensamiento crítico",
    "Adaptabilidad",
    "Liderazgo técnico",
    "Gestión del tiempo",
    "Creatividad",
    "Atención al cliente",
    "Aprendizaje continuo"
  ],

  // Certificaciones y talleres
  certifications: [
    {
      name: "Arquitectura orientada a microservicios con Spring Boot",
      issuer: "Instituto Tecnológico Superior - Vicente Leon",
      date: "2023",
      credentialId: "ABC123",
      image: "/images/cert-react.jpg"
    },
    {
      name: "Programacion en Python",
      issuer: "ITU - Compu sur",
      date: "2021",
      credentialId: "DEF456",
      image: "/images/cert-ux.jpg"
    },
    {
      name: "Fundamentos de inteligiencia artificial y machine learning",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "GHI789",
      image: "/images/cert-js.jpg"
    },
    {
      name: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle University",
      date: "En curso",
      credentialId: "JKL012",
      image: "/images/cert-html.jpg"
    }
  ],

  // Proyectos
  projects: [
    {
      id: 1,
      title: "Plataforma web para recepcion de pedidos de ecommerce",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      technologies: ["React", "Node.js", "Bootstrap"],
      liveUrl: "https://ejemplo-ecommerce.com",
      githubUrl: "https://github.com/Alexis001X/plantilla-fastbite",
      featured: true
    },
    {
      id: 2,
      title: "Prototipo para sitio web de una compañia de videojuegos",
      description: "Aplicativo en construccion que permita consultar, ver e ingresar datos de personajes de un videojuego.",
      image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
      technologies: ["React.js", "Firebase", "Vuetify"],
      liveUrl: "https://ejemplo-tasks.com",
      githubUrl: "https://github.com/usuario/task-app",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Sitio web personal con diseño moderno y animaciones suaves.",
      image: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg",
      technologies: ["React", "SCSS", "Framer Motion"],
      liveUrl: "https://portafolio-react-vite-eta.vercel.app/",
      githubUrl: "https://github.com/Alexis001X/portafolio-react-vite",
      featured: false
    },
    {
      id: 4,
      title: "Aplicativo de gamificacion personal - ProyectPlayer",
      description: "Aplicativo en cosntruccion para plataforma de gamificacion bajo el estilo de Duolingo.",
      image: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg",
      technologies: ["ReactJs", "Firebase", "React Router"],
      liveUrl: "https://ejemplo-blog.com",
      githubUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "Sistema de control y facturacion de agua potable",
      description: "Aplicacion de escritorio diseñada para el control de facturas, clientes y lecturas.",
      image: "https://images.pexels.com/photos/3862142/pexels-photo-3862142.jpeg",
      technologies: ["Python", "Tkinter", "SQLite"],
      liveUrl: "https://ejemplo-recetas.com",
      githubUrl: "",
      featured: false
    }
  ],

  // Enlaces sociales
  social: {
    github: "https://github.com/Alexis001X",
    linkedin: "https://www.linkedin.com/in/alexis-daniel-mena-parco/",
    twitter: "https://twitter.com/tuusuario",
    behance: "https://behance.net/tuusuario",
    dribbble: "https://dribbble.com/tuusuario"
  }
};
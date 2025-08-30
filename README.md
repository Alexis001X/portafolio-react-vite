# 💼 Portfolio Personal - Alexis Mena

Un portfolio personal moderno y responsivo desarrollado con React.js, diseñado para mostrar proyectos, habilidades y experiencia profesional de manera atractiva e interactiva.

## 🚀 Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos (desktop, tablet, móvil)
- **Modo Oscuro/Claro**: Switch dinámico entre temas con persistencia en localStorage
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Componentes Reutilizables**: Arquitectura modular y mantenible
- **Optimizado para SEO**: Estructura semántica y performance optimizada
- **Contacto Directo**: Integración con Gmail, WhatsApp y Telegram
- **Fácil Actualización**: Configuración centralizada en `src/data/portfolioData.js`

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React.js 18+ con Vite
- **Estilos**: Bootstrap 5 + SASS/SCSS
- **Icons**: Font Awesome
- **Tipografía**: Google Fonts (Inter + JetBrains Mono)
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Estructura del Proyecto

```
portfolio-frontend/
├── public/
│   ├── images/           # Imágenes del portfolio
│   └── documents/        # CV y otros documentos
├── src/
│   ├── components/       # Componentes React reutilizables
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx    # Contexto para manejo de temas
│   ├── data/
│   │   └── portfolioData.js    # ✨ Configuración principal
│   ├── styles/
│   │   └── main.scss          # Estilos principales con variables
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Alexis001X/portfolio-alexis-mena.git
cd portfolio-alexis-mena/portfolio-frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

## 🎨 Personalización

### Configuración Principal

Todo el contenido del portfolio se gestiona desde el archivo `src/data/portfolioData.js`. Este archivo centraliza toda la información personal, profesional y de proyectos.

### Estructura de `portfolioData.js`:

```javascript
export const portfolioData = {
  // Información personal básica
  personal: {
    name: "Tu Nombre",
    title: "Tu Título Profesional",
    email: "tu-email@ejemplo.com",
    // ... más campos
  },
  
  // Descripción y aspectos destacados
  about: {
    description: "Tu descripción profesional...",
    highlights: ["Aspecto 1", "Aspecto 2", ...]
  },
  
  // Experiencia profesional
  experience: [
    {
      position: "Tu Cargo",
      company: "Empresa",
      period: "Fechas",
      achievements: ["Logro 1", "Logro 2"]
    }
  ],
  
  // Habilidades técnicas con niveles
  technicalSkills: [
    { name: "Tecnología", level: 85, category: "Categoría" }
  ],
  
  // Proyectos con enlaces y tecnologías
  projects: [
    {
      title: "Nombre del Proyecto",
      description: "Descripción...",
      technologies: ["Tech1", "Tech2"],
      liveUrl: "https://...",
      githubUrl: "https://github.com/..."
    }
  ]
  // ... más secciones
};
```

## 🔄 Actualizaciones Futuras

### Para agregar nuevos proyectos:

1. **Editar `portfolioData.js`**
```javascript
// Agregar al array de projects:
{
  id: 6, // Siguiente ID disponible
  title: "Nuevo Proyecto",
  description: "Descripción del nuevo proyecto",
  image: "URL_de_la_imagen",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://tu-proyecto-live.com",
  githubUrl: "https://github.com/tu-usuario/tu-proyecto",
  featured: true // true para proyectos destacados
}
```

2. **Agregar imagen del proyecto**
   - Subir imagen a `public/images/`
   - Actualizar la propiedad `image` con la ruta correcta

### Para actualizar información personal:

```javascript
// Modificar en portfolioData.js
personal: {
  name: "Alexis Mena",
  title: "Desarrollador Full Stack Sr.", // ⬅️ Actualizar título
  email: "nuevo-email@ejemplo.com",      // ⬅️ Nuevo email
  // ... otros campos
}
```

### Para agregar nuevas habilidades:

```javascript
// Agregar al array technicalSkills:
{ name: "Nueva Tecnología", level: 75, category: "Frontend" }
```

### Para agregar nueva experiencia laboral:

```javascript
// Agregar al inicio del array experience:
{
  position: "Nuevo Cargo",
  company: "Nueva Empresa",
  period: "2024 - Presente",
  description: "Descripción del rol...",
  achievements: [
    "Logro importante 1",
    "Logro importante 2"
  ]
}
```

## 🎨 Personalización de Estilos

### Variables de color (`src/styles/main.scss`):
```scss
:root {
  --color-primary: #6366f1;     // Color principal
  --color-secondary: #8b5cf6;   // Color secundario
  --color-accent: #3b82f6;      // Color de acento
  // ... más variables
}
```

### Temas (Claro/Oscuro):
Los temas se manejan automáticamente con CSS variables y el contexto de React. Para modificar colores:

```scss
[data-theme="dark"] {
  --color-text: #e2e8f0;        // Texto en modo oscuro
  --color-bg: #0f172a;          // Fondo en modo oscuro
}

[data-theme="light"] {
  --color-text: #334155;        // Texto en modo claro
  --color-bg: #ffffff;          // Fondo en modo claro
}
```

## 📱 Contacto y Redes Sociales

### Configuración de botones de contacto:

```javascript
personal: {
  email: "tu-email@gmail.com",    // Para botón de Gmail
  whatsapp: "+593999899136",      // Para botón de WhatsApp
  telegram: "tu_usuario"          // Para botón de Telegram (sin @)
}
```

### Enlaces sociales:
```javascript
social: {
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
  twitter: "https://twitter.com/tu-usuario",
  // ... más redes
}
```

## 🚀 Despliegue

### Vercel (Recomendado):
1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Configurar output directory: `dist`

### Netlify:
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages:
1. Instalar gh-pages: `npm install --save-dev gh-pages`
2. Agregar script en package.json: `"deploy": "gh-pages -d dist"`
3. Ejecutar: `npm run build && npm run deploy`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 Email: alexismenadev09@gmail.com
- 💬 WhatsApp: +593999899136
- 🐙 GitHub Issues: [Crear issue](https://github.com/Alexis001X/portfolio-alexis-mena/issues)

---

⭐ **¡No olvides dar una estrella al proyecto si te resultó útil!**

Desarrollado con ❤️ por [Alexis Mena](https://github.com/Alexis001X)

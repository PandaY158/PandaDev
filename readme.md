# Portafolio — Panda

Estructura y cómo usar este proyecto.

## Estructura de carpetas
 
## Cómo añadir tus proyectos e imágenes
1. Reemplaza `assets/img/*.png` por los logos reales.
2. Crea carpetas en `assets/projects/<lang>/` (ej. `assets/projects/python/`) y coloca las imágenes de tus proyectos: `proyecto1.jpg`, `proyecto2.jpg`, ...
3. En `js/script.js` actualiza `projectsData` para:
   - Cambiar títulos, descripciones y las rutas (`img`) de cada `project`.
   - Agregar o eliminar proyectos en cada array `projects`.

## Cambiar estilos y colores
- Edita `css/style.css` — variables en `:root` al inicio (`--bg1`, `--bg2`, `--accent`) para ajustar el degradado y acentos.

## Accesibilidad & UX añadidos
- Puedes navegar el carrusel con las flechas ← → y cerrar con `Esc`.
- Clic fuera del modal también lo cierra.

## Sugerencias
- Usa imágenes optimizadas (webp/jpg) y nómbralas claramente.
- Si quieres un autoplay para el slider, descomenta la sección `autoplay` en `js/script.js`.

---

© 2025 Panda — Hecho con <3

# Skills de Valor

Sitio web estático profesional para la marca personal "Skills de Valor".

## Descripción

Este repositorio contiene una página web estática diseñada para promoción, educación y engagement de la marca "Skills de Valor". El contenido está optimizado para despliegue con GitHub Pages y se sirve directamente desde la carpeta `public/`.

## Estructura del repositorio

```
skillsdevalor/
├── public/                          # Carpeta raíz del sitio publicado
│   ├── index.html                   # Página principal
│   ├── styles.css                   # Estilos del sitio
│   ├── script.js                    # JavaScript interactivo
│   ├── .nojekyll                    # Desactiva procesamiento Jekyll
│   └── assets/                      # Recursos estáticos (imágenes, etc.)
│       └── logo-skills-de-valor.png # Logotipo de la marca
├── .github/
│   └── workflows/
│       └── pages.yml                # Workflow de despliegue automático
└── README.md                        # Este archivo
```

## Funcionalidades

- **Página de inicio**: Sección heroica con propuesta de valor.
- **Conócenos**: Descripción de la misión y objetivos.
- **Apóyanos**: Opciones de suscripción y apoyo.
- **Contáctanos**: Formulario de contacto.
- **Linktree**: Enlaces a redes sociales y plataformas externas.
- **Navegación suave**: Desplazamiento fluido entre secciones.

## Vista previa local

Para revisar el sitio en tu máquina:

1. Abre `public/index.html` directamente en el navegador, o
2. Usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000 --directory public
   
   # Luego accede a http://localhost:8000
   ```

## Despliegue automático con GitHub Pages

El proyecto está completamente configurado para despliegue automático:

- **Workflow**: `.github/workflows/pages.yml` despliega automáticamente en cada `push` a `main`.
- **Fuente**: La carpeta `public/` se publica directamente.
- **Jekyll**: Desactivado mediante `public/.nojekyll`.

### Instrucciones para configurar GitHub Pages

#### Paso 1: Ir a la configuración del repositorio
1. En GitHub, ve al repositorio `skillsdevalor`.
2. Haz clic en **Settings** (Configuración).
3. En el menú lateral izquierdo, selecciona **Pages**.

#### Paso 2: Configurar la fuente de publicación
1. En la sección **Build and deployment**, selecciona:
   - **Source**: `GitHub Actions`
   - El workflow `.github/workflows/pages.yml` se ejecutará automáticamente.

#### Paso 3: Verificar el despliegue
1. Una vez configurado, cada `push` a `main` iniciará el workflow.
2. Ve a la pestaña **Actions** para monitorizar el estado.
3. Cuando el despliegue sea exitoso, el sitio estará disponible en:
   ```
   https://nataliaurreag-bit.github.io/skillsdevalor/
   ```

#### Paso 4: Configurar un dominio personalizado (opcional)
1. Si tienes un dominio propio, en **Settings > Pages**:
   - Ingresa tu dominio en el campo **Custom domain**.
   - GitHub proporcionará instrucciones para configurar los registros DNS.

## Personalización

### Modificar contenido
- Edita `public/index.html` para cambiar texto, secciones y estructura.

### Cambiar estilos
- Personaliza colores, tipografía y layouts en `public/styles.css`.

### Actualizar la paleta de colores
- Azul Marino: `#001F3F`
- Terracota Suave: `#CD7F32`
- Fondo Papel Crema: `#FDFDF5`
- Texto Azul Marino Profundo: `#000B1A`

### Añadir lógica interactiva
- Modifica o expande `public/script.js` para nuevas interacciones.

## Mantenimiento

- **Actualiza contenido**: Modifica archivos en `public/` directamente.
- **Cambiar configuración del despliegue**: Edita `.github/workflows/pages.yml`.
- **Problemas de despliegue**: Revisa la pestaña **Actions** para logs detallados.

## Soporte y contacto

Para dudas sobre el contenido, cuestiones técnicas o sugerencias de mejora, contacta a través de los canales disponibles en el sitio.

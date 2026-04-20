# Configuración de GitHub Pages - Guía Paso a Paso

Esta guía te ayudará a configurar correctamente GitHub Pages para el proyecto **Skills de Valor**.

## Requisitos previos

- Cuenta de GitHub activa
- Repositorio `skillsdevalor` bajo la cuenta `nataliaurreag-bit`
- Permisos de administrador sobre el repositorio

## Pasos de configuración

### 1. Acceder a la configuración del repositorio

1. Ve a: `https://github.com/nataliaurreag-bit/skillsdevalor`
2. Haz clic en la pestaña **Settings** (Configuración)
   ![Settings tab](https://github.com/nataliaurreag-bit/skillsdevalor/assets/...)

### 2. Navegar a la sección Pages

En el menú lateral izquierdo, desplázate hasta encontrar **Pages** bajo la sección "Code and automation".

### 3. Seleccionar GitHub Actions como fuente

1. En **Build and deployment**, selecciona el radio button para **GitHub Actions**
2. El sistema reconocerá automáticamente el archivo `.github/workflows/pages.yml`
3. Haz clic en **Save** si es necesario

### 4. Verificar el estado del despliegue

1. Ve a la pestaña **Actions**
2. Busca el workflow más reciente llamado **Deploy GitHub Pages**
3. Espera a que el estado cambie a ✅ (verde/completado)

### 5. Acceder al sitio publicado

Una vez completado el despliegue, tu sitio estará disponible en:

```
https://nataliaurreag-bit.github.io/skillsdevalor/
```

## Configuración avanzada (opcional)

### Dominio personalizado

Si posees un dominio propio y deseas usarlo:

1. En **Settings > Pages**, localiza la sección **Custom domain**
2. Ingresa tu dominio (ej: `skillsdevalor.com`)
3. GitHub mostrará instrucciones de DNS específicas para tu proveedor
4. Actualiza los registros DNS en tu proveedor de dominio
5. Espera a que GitHub verifique el dominio (puede tomar minutos a horas)

### HTTPS (automático)

GitHub Pages aplica HTTPS automáticamente. Si usas un dominio personalizado:
- Espera hasta 24 horas para que el certificado SSL se genere
- Una vez listo, aparecerá una opción para "Enforce HTTPS"

## Flujo de actualización

Después de la configuración inicial, cualquier cambio se despliega automáticamente:

1. Realiza cambios en la rama `main`
2. Haz `git push` a GitHub
3. El workflow se ejecuta automáticamente
4. Espera ~1 minuto para que los cambios se publiquen
5. Actualiza el navegador para ver los cambios

## Solución de problemas

### El workflow falla

- Revisa los logs en **Actions > Deploy GitHub Pages**
- Verifica que `public/` contenga archivos válidos
- Asegúrate de que `.nojekyll` existe en `public/`

### El sitio no se actualiza

- Limpia el caché del navegador (Ctrl+Shift+Delete o Cmd+Shift+Delete)
- Espera algunos minutos tras el push
- Verifica que el workflow haya completado correctamente

### Página en blanco o 404

- Confirma que `public/index.html` existe
- Verifica que los rutas relativas en HTML sean correctas
- Comprueba que `public/styles.css` y `public/script.js` sean accesibles

## Documentación oficial

Para información adicional, consulta la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages).

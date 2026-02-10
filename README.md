# Pizzería Botánico - Landing Page

Landing page oficial para Pizzería Botánico en Alcalá la Real.

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio llamado `pizzeriabotanico`
2. **NO** inicialices con README, .gitignore o licencia

### Paso 2: Subir el código (desde tu carpeta local del proyecto)
```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit - Pizzería Botánico"

# Conectar con tu repositorio (CAMBIA 'TU-USUARIO' por tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/pizzeriabotanico.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

### Paso 3: Instalar dependencias y desplegar
```bash
# Instalar dependencias
npm install

# Desplegar a GitHub Pages
npm run deploy
```

### Paso 4: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source** selecciona la rama `gh-pages`
4. ¡Listo! Tu sitio estará en: `https://TU-USUARIO.github.io/pizzeriabotanico/`

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:3000
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Despliega a GitHub Pages

## 🌐 URLs importantes

- **Producción**: https://TU-USUARIO.github.io/pizzeriabotanico/
- **Desarrollo**: http://localhost:3000

## ⚙️ Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

---

**Nota**: Recuerda cambiar `TU-USUARIO` por tu usuario real de GitHub en todos los comandos y configuraciones.

# 📘 Guía de Despliegue - Pizzería Botánico

## ⚡ Opción Más Sencilla: GitHub Pages

GitHub Pages es la opción más simple porque:
- ✅ Gratis
- ✅ No requiere configuración de servidor
- ✅ Tu proyecto ya está configurado para esto
- ✅ Despliegue automático con un solo comando

---

## 🚀 Pasos para Desplegar

### 1️⃣ Preparar GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta si no tienes)
2. Haz clic en el botón **"+"** arriba a la derecha → **"New repository"**
3. Nombre del repositorio: `pizzeriabotanico`
4. Déjalo público (o privado, funciona igual)
5. **NO marques ninguna casilla** (README, .gitignore, etc.)
6. Haz clic en **"Create repository"**

### 2️⃣ Subir tu Proyecto

Abre una terminal en la carpeta de tu proyecto y ejecuta:

```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Initial commit"

# 4. Conectar con GitHub (CAMBIA 'TU-USUARIO' por tu usuario)
git remote add origin https://github.com/TU-USUARIO/pizzeriabotanico.git

# 5. Subir el código
git branch -M main
git push -u origin main
```

**Nota**: GitHub te pedirá tus credenciales la primera vez.

### 3️⃣ Desplegar a GitHub Pages

```bash
# Instalar dependencias
npm install

# Desplegar (¡esto es todo!)
npm run deploy
```

Este comando:
- Construye tu proyecto
- Crea una rama `gh-pages`
- Sube la versión compilada a GitHub

### 4️⃣ Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (⚙️ arriba)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Haz clic en **Save**

### 5️⃣ ¡Listo! 🎉

Tu sitio estará disponible en:
```
https://TU-USUARIO.github.io/pizzeriabotanico/
```

**Nota**: Puede tardar 1-2 minutos en aparecer la primera vez.

---

## 🔄 Actualizar el Sitio

Cuando hagas cambios en tu código:

```bash
# 1. Guardar cambios
git add .
git commit -m "Descripción de tus cambios"
git push

# 2. Redesplegar
npm run deploy
```

---

## ❓ Solución de Problemas Comunes

### Error: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/pizzeriabotanico.git
```

### Error al hacer push
Si GitHub pide autenticación:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un token nuevo (con permisos de repo)
3. Úsalo como contraseña cuando Git te lo pida

### La página no se ve bien
Verifica que el `base` en `vite.config.ts` coincida con el nombre de tu repositorio:
```typescript
base: '/pizzeriabotanico/'
```

---

## 🌐 Alternativa: Vercel (Aún más fácil)

Si GitHub Pages te da problemas, Vercel es incluso más simple:

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"** con tu cuenta de GitHub
3. Haz clic en **"New Project"**
4. Importa tu repositorio `pizzeriabotanico`
5. Vercel detectará automáticamente que es un proyecto Vite
6. Haz clic en **"Deploy"**

**Ventajas de Vercel:**
- Más rápido
- HTTPS automático
- Dominio personalizado gratis
- Despliegue automático en cada push

---

## 📞 Contacto

Si tienes problemas, revisa:
- Los archivos tienen la estructura correcta
- Has instalado Node.js (mínimo v18)
- npm está actualizado: `npm install -g npm@latest`

¡Buena suerte con tu pizzería! 🍕

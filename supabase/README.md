# Supabase — Directorio Llo-Lleo

## Qué se creó

| Archivo | Uso |
|---|---|
| `supabase/schema.sql` | Tabla `miembros` + RLS (lectura pública) |
| `supabase/seed.sql` | 307 hermanos listos para insertar |
| `data/miembros.json` | Copia local / respaldo offline |
| `supabase-config.js` | URL y anon key de tu proyecto |
| `supabase/storage-fotos.sql` | Bucket Storage `fotos-miembros` |
| `upload-fotos-supabase.mjs` | Subir carpeta local `/fotos` a Storage |

## Pasos (15–20 min)

### 1. Crear proyecto
1. Entra a [supabase.com](https://supabase.com) y crea un proyecto.
2. Espera a que termine de provisionarse.

### 2. Crear la tabla
1. Menú **SQL Editor** → **New query**
2. Pega todo el contenido de `supabase/schema.sql`
3. **Run**

### 3. Cargar los hermanos
1. Nueva query
2. Pega `supabase/seed.sql` (es largo; puede tardar unos segundos)
3. **Run**
4. Verifica en **Table Editor** → `miembros` que haya ~307 filas

### 4. Conectar la app
1. **Project Settings** → **API**
2. Copia **Project URL** y **anon public** key
3. Ábrelas en `supabase-config.js`:

```js
window.SUPABASE_CONFIG = {
  url: "https://TU-PROYECTO.supabase.co",
  anonKey: "eyJhbGciOi...",
};
```

4. Recarga el Directorio (`Ctrl+F5`)

Si la config está vacía o falla la red, la app sigue funcionando con `data/miembros.json`.

## Modelo de datos (`miembros`)

Campos principales: `nombre`, `organizacion`, `nacimiento`, `sexo`, `oficio`, `telefono`, `correo`, `direccion`, `coords`, `llamamiento`, `familia`, `bautismo`, `tiempo_miembro`, `foto`, `recien_converso`, `obispado`, `sociedad_socorro`, `quorum_elderes`, `etiqueta_llamamiento`.

## Fotos: local + Supabase Storage

Las fotos viven en **dos sitios** (dual):

| Dónde | Ruta |
|---|---|
| Local (offline / PWA) | carpeta `fotos/` del sitio |
| Nube | bucket `fotos-miembros` en Supabase Storage |

El campo `foto` en la tabla sigue guardando solo el **nombre de archivo** (ej. `Cesar Aaron Miranda Cabello.jpg`).
La app intenta cargar primero la copia local y, si falla, la de Supabase.

### Activar Storage (una vez)
1. SQL Editor → pega y ejecuta `supabase/storage-fotos.sql`
2. Sube las fotos actuales:

```powershell
$env:SUPABASE_SERVICE_ROLE_KEY="pega_service_role_de_Project_Settings_API"
node upload-fotos-supabase.mjs
```

3. Recarga el directorio (Ctrl+F5)

### Subir una foto nueva
- Desde **Admin → editar hermano → Subir a Supabase**
- Para respaldo local: copia el mismo archivo a la carpeta `fotos/` del proyecto

## Panel de administración

1. Ejecuta `supabase/admin-write.sql` en el SQL Editor (permisos de escritura).
2. En Supabase → **Authentication** → **Users** → **Add user**:
   - Email: el tuyo
   - Password: una contraseña segura
   - Marca **Auto Confirm User** si aparece
3. Abre `admin.html` en el navegador e inicia sesión.
4. Desde ahí puedes agregar, editar y borrar hermanos.

El directorio público (`index.html`) solo lee datos. Los cambios del admin se ven al recargar el directorio.

## Regenerar seed

Si cambias datos locales en el futuro:

```bash
node supabase/export-seed.mjs
```

# Supabase — Directorio Llo-Lleo

## Qué se creó

| Archivo | Uso |
|---|---|
| `supabase/schema.sql` | Tabla `miembros` + RLS (lectura pública) |
| `supabase/seed.sql` | 307 hermanos listos para insertar |
| `data/miembros.json` | Copia local / respaldo offline |
| `supabase-config.js` | URL y anon key de tu proyecto |
| `supabase/export-seed.mjs` | Regenerar seed desde un script.js antiguo |

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

Las fotos siguen en la carpeta local `fotos/`; el campo `foto` guarda el nombre de archivo.

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

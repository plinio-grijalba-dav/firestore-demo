# Add Data - Firestore Demo

Este directorio contiene ejemplos progresivos de cómo agregar datos a Firestore usando el SDK de Admin de Firebase para Node.js.

## Archivos

### part-1.js - Crear un Documento Básico
Muestra cómo:
- Inicializar Firestore con credenciales
- Obtener una referencia a un documento específico
- Usar `set()` para crear o sobrescribir un documento completo

**Ejemplo:** Crea un documento de usuario "Ada Lovelace" en la colección `users`.

### part-2.js - Actualización Parcial con Merge
Muestra cómo:
- Usar `set()` con la opción `{ merge: true }`
- Actualizar parcialmente un documento sin eliminar campos existentes

**Ejemplo:** Actualiza solo el campo `last` sin afectar los demás campos del documento.

### part-3.js - Sobrescritura Completa sin Merge
Muestra cómo:
- Usar `set()` sin merge para sobrescribir completamente un documento
- Entender que los campos no especificados se eliminan

**Ejemplo:** Sobrescribe el documento de "Alan Turing", eliminando el campo `last` al no incluirlo.

### part-4.js - Agregar Documento con ID Automático usando add()
Muestra cómo:
- Usar `add()` para crear un documento con un ID generado automáticamente
- Obtener el ID del documento creado

**Ejemplo:** Agrega un documento de usuario y muestra el ID generado automáticamente.

### part-5.js - Generar ID Primero con doc()
Muestra cómo:
- Generar un ID de documento antes de crearlo usando `doc()` sin parámetros
- Usar ese ID para crear el documento con `set()`
- Útil cuando necesitas conocer el ID antes de crear el documento

**Ejemplo:** Crea un documento de "Grace Hopper" con un ID generado previamente.

### part-6.js - Tipos de Datos en Firestore
Muestra cómo:
- Usar diferentes tipos de datos soportados por Firestore
- Trabajar con strings, booleans, números, fechas, arrays y objetos anidados

**Ejemplo:** Crea un documento que demuestra todos los tipos de datos principales.

## Requisitos

- Node.js
- Paquete `@google-cloud/firestore`
- Archivo de credenciales de Firebase Admin SDK

## Configuración

Todos los archivos están configurados para usar:
- **Project ID:** `cv-app-97390`
- **Archivo de credenciales:** `97390-firebase-adminsdk-fbsvc-da0aefc3ec.json`

## Ejecución

Para ejecutar cualquiera de estos ejemplos:

```bash
node add-data/part-1.js
node add-data/part-2.js
# ... etc
```

## Conceptos Clave

### set() vs add()
- **set()**: Crea o sobrescribe un documento con un ID específico
  - Con `{ merge: true }`: Actualización parcial
  - Sin merge: Sobrescritura completa
- **add()**: Crea un documento con un ID generado automáticamente

### Generación de IDs
1. Especificar manualmente: `.doc('miId')`
2. Generar automáticamente al crear: `.add()`
3. Generar antes de crear: `.doc()` sin parámetros

## Nota

Estos ejemplos forman parte de una demostración educativa sobre Firestore y están diseñados para ser ejecutados de forma secuencial para entender progresivamente las diferentes operaciones de escritura.

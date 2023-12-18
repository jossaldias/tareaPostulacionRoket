const express = require('express');
const router = express.Router();
const db = require('../database');

// Obtener toda la información de la tabla 'arboles' en el esquema 'roket'
router.get('/arboles', async (req, res) => {
  try {
    const client = await db.connect();
    const result = await client.query(`
        SELECT DISTINCT ON (roket.arboles.arbol_id)
            roket.arboles.arbol_id,
            roket.arboles.nombre_arbol,
            roket.arboles.ubicacion_id,
            roket.arboles.created_at,
            roket.fotos.foto_id,
            roket.fotos.url_foto,
            roket.ubicaciones.latitud,
            roket.ubicaciones.longitud
        FROM roket.arboles
        LEFT JOIN roket.fotos ON roket.arboles.arbol_id = roket.fotos.arbol_id
        LEFT JOIN roket.ubicaciones ON roket.arboles.ubicacion_id = roket.ubicaciones.ubicacion_id
        ORDER BY arboles.arbol_id, fotos.foto_id, ubicaciones.latitud, ubicaciones.longitud;   
    `);
    const arboles = result.rows;
    client.release();
    res.json({ arboles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/comentarios', async (req, res) => {
  const { arbolId, comentario, postulanteId } = req.body;

  try {
    const client = await db.connect();
    const query = 'INSERT INTO comentarios (arbol_id, postulante_id, comentario) VALUES ($1, $2, $3)';
    const values = [arbolId, postulanteId, comentario];
    await client.query(query, values);
    client.release();
    res.json({ message: 'Comentario agregado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

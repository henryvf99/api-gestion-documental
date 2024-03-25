import multer from 'multer';

// Configuración de multer
const storage = multer.memoryStorage(); // Almacena el archivo en memoria como un buffer
const upload = multer({ storage });

// Middleware para manejar la carga de archivos
export const uploadMiddleware = (req, res, next) => {
  upload.fields([{ name: 'file', maxCount: 1 }, { name: 'file2', maxCount: 1 }])(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Ajusta los errores de Multer según lo necesites
      return res.status(400).json({ error: 'Error al cargar el archivo' });
    } else if (err) {
      // Manejo de otros errores
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    next();
  });
};

// Función de middleware personalizado para adjuntar el archivo cargado al cuerpo de la solicitud
export const attachFileToBody = (req, res, next) => {
  // Si hay un archivo cargado en el campo 'file', lo adjuntamos al cuerpo de la solicitud en la propiedad 'file'
  if (req.files['file'] && req.files['file'].length > 0) {
    req.body.file = req.files['file'][0].buffer;
  }
  // Si hay un archivo cargado en el campo 'file2', lo adjuntamos al cuerpo de la solicitud en la propiedad 'file2'
  if (req.files['file2'] && req.files['file2'].length > 0) {
    req.body.file2 = req.files['file2'][0].buffer;
  }
  next();
};
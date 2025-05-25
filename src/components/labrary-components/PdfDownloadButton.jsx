import React from "react";
import { FaDownload } from "react-icons/fa6";

const PdfDownloadButton = ({ fileUrl, fileName = "documento.pdf", children }) => {
  // Parámetros recibidos:
  // - fileUrl: URL del archivo PDF a descargar (obligatorio)
  // - fileName: Nombre con el que se descargará el archivo (opcional, por defecto "documento.pdf")
  // - children: Contenido opcional a mostrar dentro del botón (opcional)
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="flex flex-col justify-center items-center px-4 py-2 bg-accent1 text-stone-700 hover:text-stone-100 rounded hover:bg-accent2 transition-all duration-300 shadow-lg hover:shadow-accent1 font-semibold text-center"
    >
      <FaDownload className="text-3xl mb-5" />
      {children || "Descargar PDF"}
    </a>
  );
};

export default PdfDownloadButton;
import React from "react";
import { FaDownload } from "react-icons/fa6";

const PdfDownloadButton = ({ fileUrl, fileName = "documento.pdf", children }) => {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="group flex items-center justify-center w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-accent1 hover:border-accent1 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]"
    >
      <FaDownload className="text-lg text-accent1 group-hover:text-dark transition-colors mr-3" />
      <span className="font-semibold text-gray-300 group-hover:text-dark transition-colors text-sm">
        {children || "Descargar PDF"}
      </span>
    </a>
  );
};

export default PdfDownloadButton;
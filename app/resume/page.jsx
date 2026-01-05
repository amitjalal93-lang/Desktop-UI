import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  return (
    <div className="bg-white/50 py-6 w-full flex items-center justify-center flex-col">
      <Document file="/resume.pdf">
        <Page
          pageNumber={1}
          renderTextLayer
          renderAnnotationLayer
          width={900}
        />
      </Document>
      <div className="flex justify-center mt-6">
        <a
          href="/resume.pdf"
          download="Amit_Jalal_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

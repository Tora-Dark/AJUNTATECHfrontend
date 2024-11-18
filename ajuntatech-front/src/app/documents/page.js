"use client" // pages/document-preview.js
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FileInput, Button, Textarea, Label } from "flowbite-react";
import { BsChatDots } from "react-icons/bs";

// Carga dinámica para react-doc-viewer para evitar problemas en SSR
const DocViewer = dynamic(() => import("react-doc-viewer"), { ssr: false });

const DocumentPreview = () => {
  const [file, setFile] = useState(null);
  const [docData, setDocData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  useEffect(() => {
    // Cargar el documento desde localStorage al iniciar
    const savedDoc = localStorage.getItem("uploadedDoc");
    if (savedDoc) {
      setDocData([{ uri: savedDoc }]);
      setFileUploaded(true);
    }

    // Limpiar el estado y el localStorage cuando el componente se desmonte
    return () => {
      setDocData([]);
      setMessages([]);
      setFile(null);
      setMessage("");
      setFileUploaded(false);
      localStorage.removeItem("uploadedDoc");
    };
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Leer el archivo como base64 para guardarlo en localStorage
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        localStorage.setItem("uploadedDoc", base64);
        setDocData([{ uri: base64 }]);
        setFileUploaded(true);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 space-y-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center">Document Preview & Chat</h1>

      {/* Sección de carga de documentos */}
      {!fileUploaded && (
        <div className="flex w-full items-center justify-center mb-6">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <FileInput
              id="dropzone-file"
              className="hidden"
              onChange={handleFileChange}
            />
          </Label>
        </div>
      )}

      {/* División principal con chat y previsualización de documento */}
      <div className="flex flex-row space-x-4">
        {/* Sección de Chat (2/3 del ancho) */}
        <div className="flex-2 border rounded-lg bg-white p-4 shadow h-full max-h-[calc(100vh-160px)] overflow-auto">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <BsChatDots />
            <span>Chat</span>
          </h2>

          <div className="flex flex-col space-y-2 max-h-64 overflow-y-auto border-t pt-4">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="p-2 rounded bg-blue-100 text-blue-800">
                  {msg}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No hay mensajes aún.</p>
            )}
          </div>

          <div className="flex space-x-2 mt-4">
            <Textarea
              placeholder="Escribe un mensaje..."
              value={message}
              rows={1}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={handleSendMessage}>Enviar</Button>
          </div>
        </div>

        {/* Sección de Previsualización del Documento (1/3 del ancho) */}
        <div className="flex-1 border rounded-lg bg-white p-4 shadow h-full max-h-[calc(100vh-160px)] overflow-auto">
          {docData.length > 0 ? (
            <DocViewer documents={docData} />
          ) : (
            <p className="text-center text-gray-500">No hay documentos cargados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;

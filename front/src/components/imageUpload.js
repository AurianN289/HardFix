import { useRef, useState } from "react";

function ImageUpload({ image, setImage }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  function openFileInput() {
    inputRef.current?.click();
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem válido.");
      return;
    }

    setImage(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  function removeImage() {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setImage(null);
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="mb-4">
      <label className="form-label fw-semibold mb-1">
        Imagem Anexada{" "}
        <span className="fw-normal">(Opcional)</span>
      </label>

      <p className="form-description text-secondary mb-2">
        Uma imagem vale mais que mil palavras. Anexe uma foto do erro, da peça
        ou da tela.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="d-none"
        onChange={handleImageChange}
      />

      {!image ? (
        <button
          type="button"
          className="btn btn-outline-secondary image-button"
          onClick={openFileInput}
        >
          <span className="me-2">▧</span>
          Selecionar Imagem
        </button>
      ) : (
        <div className="image-preview-container">
          <img
            src={preview}
            alt="Pré-visualização da imagem selecionada"
            className="image-preview"
          />

          <div>
            <p className="mb-2 small fw-semibold">
              {image.name}
            </p>

            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={removeImage}
            >
              Remover imagem
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
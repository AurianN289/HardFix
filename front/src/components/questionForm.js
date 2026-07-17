import { useState } from "react";
import FormField from "./formField";
import ImageUpload from "./imageUpload";
import SuggestedTags from "./suggestedTags";
import TagInput from "./tagInput";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (tags.length === 0) {
      alert("Adicione pelo menos uma tag.");
      return;
    }

    const questionData = {
      title,
      description,
      tags,
      image,
    };

    console.log("Dados da pergunta:", questionData);

    alert("Pergunta pronta para ser enviada!");
  }

  function handleCancel() {
    setTitle("");
    setDescription("");
    setTags([]);
    setImage(null);
  }

  return (
    <form
      className="question-form bg-white border rounded-3 shadow-sm"
      onSubmit={handleSubmit}
    >
      <FormField
        id="question-title"
        label="Título"
        description="Seja específico e imagine que você está fazendo a pergunta para outra pessoa."
        required
        placeholder="Ex: GPU RTX 4070 com artefatos visuais após atualização de driver"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <FormField
        id="question-description"
        label="Descrição Detalhada"
        description="Inclua todas as informações relevantes: especificações do seu PC, o que você já tentou fazer para resolver, mensagens de erro, etc."
        required
        type="textarea"
        placeholder="Descreva seu problema aqui..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={8}
      />

      <TagInput tags={tags} setTags={setTags} />

      <SuggestedTags tags={tags} setTags={setTags} />

      <ImageUpload image={image} setImage={setImage} />

      <div className="form-actions d-flex justify-content-end align-items-center gap-3 pt-4 border-top">
        <button
          type="button"
          className="btn btn-link text-dark text-decoration-none"
          onClick={handleCancel}
        >
          Cancelar
        </button>

        <button type="submit" className="btn publish-button fw-semibold">
          Publicar Pergunta
        </button>
      </div>
    </form>
  );
}

export default QuestionForm;
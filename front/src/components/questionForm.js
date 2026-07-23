import { useState } from "react";

import FormField from "./formField";
import ImageUpload from "./imageUpload";
import SuggestedTags from "./suggestedTags";
import TagInput from "./tagInput";

import useTags from "../hooks/useTags";
import useCriarPergunta from "../hooks/useCriarPergunta";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const {
    availableTags,
    loadingTags,
    tagsError,
  } = useTags();

  const {
    publicarPergunta,
    publishing,
    publishError,
  } = useCriarPergunta();

  function handleCancel() {
    setTitle("");
    setDescription("");
    setTags([]);
    setImage(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (tags.length === 0) {
      alert("Adicione pelo menos uma tag.");
      return;
    }

    const userId = localStorage.getItem("user_id");

    if (!userId) {
      alert("Você precisa estar logado para publicar uma pergunta.");
      return;
    }

    const pergunta = {
      titulo: title,
      descricao: description,

      usuario: {
        id: Number(userId),
      },

      tags: tags.map((tag) => ({
        id: tag.id,
      })),
    };

    try {
      const data = await publicarPergunta(pergunta);

      console.log("Pergunta cadastrada:", data);
      alert("Pergunta publicada com sucesso!");

      handleCancel();
    } catch (error) {
      alert("Erro ao publicar pergunta.");
    }
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

      {loadingTags && (
        <p className="text-muted">Carregando tags...</p>
      )}

      {tagsError && (
        <div className="alert alert-warning">
          {tagsError}
        </div>
      )}

      {!loadingTags && !tagsError && (
        <>
          <TagInput
            tags={tags}
            setTags={setTags}
            availableTags={availableTags}
          />

          <SuggestedTags
            tags={tags}
            setTags={setTags}
            suggestedTags={availableTags}
          />
        </>
      )}

      <ImageUpload
        image={image}
        setImage={setImage}
      />

      {publishError && (
        <div className="alert alert-danger mt-3">
          {publishError}
        </div>
      )}

      <div className="form-actions d-flex justify-content-end align-items-center gap-3 pt-4 border-top">
        <button
          type="button"
          className="btn btn-link text-dark text-decoration-none"
          onClick={handleCancel}
          disabled={publishing}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="btn publish-button fw-semibold"
          disabled={publishing}
        >
          {publishing
            ? "Publicando..."
            : "Publicar Pergunta"}
        </button>
      </div>
    </form>
  );
}

export default QuestionForm;
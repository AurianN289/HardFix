import { useState, useEffect } from "react";
import FormField from "./formField";
import ImageUpload from "./imageUpload";
import SuggestedTags from "./suggestedTags";
import TagInput from "./tagInput";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [image, setImage] = useState(null);


  useEffect(() => {
    async function loadTags() {
      try {
        const response = await fetch(
          "http://localhost:8080/tags/findall"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar tags");
        }

        const data = await response.json();
        setAvailableTags(data);
      } catch (error) {
        console.error("Erro ao carregar tags:", error);
      }
    }

    loadTags();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    const response = await fetch(
      "http://localhost:8080/perguntas/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pergunta),
      }
    );

    if (response.ok) {
      const data = await response.json();

      console.log("Pergunta cadastrada:", data);
      alert("Pergunta publicada com sucesso!");

      handleCancel();
    } else {
      const erro = await response.text();

      console.error("Erro do servidor:", erro);
      alert("Erro ao publicar pergunta.");
    }
  } catch (error) {
    console.error("Erro de conexão:", error);
    alert("Não foi possível conectar ao servidor.");
  }
};

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

      <TagInput tags={tags} setTags={setTags} availableTags={availableTags} />

      <SuggestedTags tags={tags} setTags={setTags} suggestedTags={availableTags}/>

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
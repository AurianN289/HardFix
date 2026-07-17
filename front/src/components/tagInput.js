import { useState } from "react";

function TagInput({ tags, setTags }) {
  const [tagText, setTagText] = useState("");

  function addTag(tagName) {
    const formattedTag = tagName.trim();

    if (!formattedTag) {
      return;
    }

    const tagAlreadyExists = tags.some(
      (tag) => tag.toLowerCase() === formattedTag.toLowerCase()
    );

    if (tagAlreadyExists) {
      setTagText("");
      return;
    }

    if (tags.length >= 5) {
      return;
    }

    setTags([...tags, formattedTag]);
    setTagText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag(tagText);
    }
  }

  function removeTag(tagToRemove) {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  }

  return (
    <div className="mb-3">
      <label htmlFor="tags" className="form-label fw-semibold mb-1">
        Tags <span className="text-danger">*</span>
      </label>

      <p className="form-description text-secondary mb-2">
        Adicione até 5 tags para descrever sobre o que é sua pergunta.
        Pressione Enter para adicionar.
      </p>

      <input
        id="tags"
        type="text"
        className="form-control"
        placeholder="Ex: GPU, Placa-mãe, Fonte..."
        value={tagText}
        onChange={(event) => setTagText(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={tags.length >= 5}
      />

      {tags.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="selected-tag d-inline-flex align-items-center gap-2"
            >
              {tag}

              <button
                type="button"
                className="tag-remove-button"
                aria-label={`Remover tag ${tag}`}
                onClick={() => removeTag(tag)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {tags.length >= 5 && (
        <small className="text-secondary d-block mt-2">
          Você atingiu o limite de 5 tags.
        </small>
      )}
    </div>
  );
}

export default TagInput;
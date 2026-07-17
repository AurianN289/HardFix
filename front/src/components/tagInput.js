import { useState } from "react";

function TagInput({ tags, setTags, availableTags }) {
  const [tagText, setTagText] = useState("");

  const filteredTags = availableTags.filter((availableTag) => {
    const matchesSearch = availableTag.nome
      .toLowerCase()
      .includes(tagText.trim().toLowerCase());

    const isAlreadySelected = tags.some(
      (selectedTag) => selectedTag.id === availableTag.id
    );

    return matchesSearch && !isAlreadySelected;
  });

  function addTag(tag) {
    if (!tag || tags.length >= 5) {
      return;
    }

    const tagAlreadyExists = tags.some(
      (selectedTag) => selectedTag.id === tag.id
    );

    if (tagAlreadyExists) {
      setTagText("");
      return;
    }

    setTags([...tags, tag]);
    setTagText("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      if (filteredTags.length > 0) {
        addTag(filteredTags[0]);
      }
    }
  }

  function removeTag(tagId) {
    const updatedTags = tags.filter((tag) => tag.id !== tagId);
    setTags(updatedTags);
  }

  return (
    <div className="mb-3">
      <label htmlFor="tags" className="form-label fw-semibold mb-1">
        Tags <span className="text-danger">*</span>
      </label>

      <p className="form-description text-secondary mb-2">
        Pesquise e selecione até 5 tags para descrever sua pergunta.
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

      {tagText.trim() && tags.length < 5 && (
        <div className="list-group mt-2">
          {filteredTags.length > 0 ? (
            filteredTags.slice(0, 5).map((tag) => (
              <button
                key={tag.id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => addTag(tag)}
              >
                <strong>{tag.nome}</strong>

                {tag.descricao && (
                  <small className="d-block text-secondary">
                    {tag.descricao}
                  </small>
                )}
              </button>
            ))
          ) : (
            <div className="list-group-item text-secondary">
              Nenhuma tag encontrada.
            </div>
          )}
        </div>
      )}

      {tags.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="selected-tag d-inline-flex align-items-center gap-2"
            >
              {tag.nome}

              <button
                type="button"
                className="tag-remove-button"
                aria-label={`Remover tag ${tag.nome}`}
                onClick={() => removeTag(tag.id)}
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
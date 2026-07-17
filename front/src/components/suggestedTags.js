import { useState } from "react";

function SuggestedTags({ tags, setTags, suggestedTags }) {

  function addSuggestedTag(tag) {

    const tagAlreadyExists = tags.some(
      (t) => t.id === tag.id
    );

    if (tagAlreadyExists || tags.length >= 5) {
      return;
    }

    setTags([...tags, tag]);
  }

  return (
    <div className="mb-4">
      <span className="d-block small fw-semibold mb-2">
        Sugestões:
      </span>

      <div className="d-flex flex-wrap gap-2">
        {suggestedTags.map((tag) => {
          const isSelected = tags.some(
            (t) => t.id === tag.id
          );

          return (
            <button
              key={tag.id}
              type="button"
              className={`btn suggested-tag ${
                isSelected ? "suggested-tag-selected" : ""
              }`}
              onClick={() => addSuggestedTag(tag)}
              disabled={isSelected || tags.length >= 5}
            >
              {tag.nome}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SuggestedTags;
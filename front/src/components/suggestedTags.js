const suggestedTags = [
  "CPU",
  "GPU",
  "RAM",
  "Placa-mãe",
  "Fonte",
  "Notebook",
  "Monitor",
  "SSD",
  "Periféricos",
  "Driver",
  "Refrigeração",
  "Energia",
];

function SuggestedTags({ tags, setTags }) {
  function addSuggestedTag(tagName) {
    const tagAlreadyExists = tags.some(
      (tag) => tag.toLowerCase() === tagName.toLowerCase()
    );

    if (tagAlreadyExists || tags.length >= 5) {
      return;
    }

    setTags([...tags, tagName]);
  }

  return (
    <div className="mb-4">
      <span className="d-block small fw-semibold mb-2">
        Sugestões:
      </span>

      <div className="d-flex flex-wrap gap-2">
        {suggestedTags.map((tag) => {
          const isSelected = tags.includes(tag);

          return (
            <button
              key={tag}
              type="button"
              className={`btn suggested-tag ${
                isSelected ? "suggested-tag-selected" : ""
              }`}
              onClick={() => addSuggestedTag(tag)}
              disabled={isSelected || tags.length >= 5}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SuggestedTags;
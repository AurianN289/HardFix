import { useState } from "react";
import VoteColumn from "./voteColumn";
import TagBadge from "./tagBadge";
import AuthorInfo from "./authorInfo";

function QuestionDetailCard({ question }) {
  const [resolved, setResolved] = useState(question.resolved);

  function handleResolved() {
    setResolved(!resolved);
  }

  return (
    <article className="question-card bg-white border rounded-4 shadow-sm">
      <div className="d-flex align-items-start">
        <VoteColumn initialVotes={question.votes} />

        <div className="question-content flex-grow-1">
          <h1 className="question-title fw-bold">
            {question.title}
          </h1>

          <div className="question-description">
            {question.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {question.image && (
            <img
              src={question.image}
              alt="Imagem anexada à pergunta"
              className="question-image img-fluid rounded-3"
            />
          )}

          <div className="d-flex flex-wrap gap-2 mt-4">
            {question.tags.map((tag, index) => (
              <TagBadge
                key={tag.name}
                tag={tag.name}
                variant={tag.variant}
              />
            ))}
          </div>

          <div className="question-footer d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
            <AuthorInfo
              name={question.author}
              date={question.createdAt}
              avatarColor="orange"
            />

            <button
              type="button"
              className={`btn resolved-button ${
                resolved ? "resolved-button-active" : ""
              }`}
              onClick={handleResolved}
            >
              ✓ {resolved ? "Pergunta resolvida" : "Marcar como resolvido"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default QuestionDetailCard;
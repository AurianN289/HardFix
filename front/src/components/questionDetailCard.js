import { useState } from "react";

import VoteButtons from "./voteButtons";
import TagBadge from "./tagBadge";
import AuthorInfo from "./authorInfo";
import useVotoPergunta from "../hooks/useVotoPergunta";

function QuestionDetailCard({ question }) {
  const [resolved, setResolved] = useState(
    question.resolved ?? false
  );

  const {
    placar,
    meuVoto,
    loadingVotes,
    voting,
    voteError,
    votar,
  } = useVotoPergunta(question.id);

  function handleResolved() {
    setResolved((currentResolved) => !currentResolved);
  }

  return (
    <article className="question-card bg-white border rounded-4 shadow-sm">
      <div className="d-flex align-items-start gap-3">
        <div className="question-votes">
          <VoteButtons
            placar={placar}
            meuVoto={meuVoto}
            loading={loadingVotes}
            disabled={voting}
            onVote={votar}
          />

          {voteError && (
            <small className="text-danger d-block mt-2">
              {voteError}
            </small>
          )}
        </div>

        <div className="question-content flex-grow-1">
          <h1 className="question-title fw-bold">
            {question.title}
          </h1>

          <div className="question-description">
            {Array.isArray(question.description) ? (
              question.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{question.description}</p>
            )}
          </div>

          {question.image && (
            <img
              src={question.image}
              alt="Imagem anexada à pergunta"
              className="question-image img-fluid rounded-3"
            />
          )}

          <div className="d-flex flex-wrap gap-2 mt-4">
            {(question.tags ?? []).map((tag) => (
              <TagBadge
                key={tag.id ?? tag.name}
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
              ✓{" "}
              {resolved
                ? "Pergunta resolvida"
                : "Marcar como resolvido"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default QuestionDetailCard;
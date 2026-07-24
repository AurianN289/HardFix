import VoteButtons from "./voteButtons";
import AuthorInfo from "./authorInfo";
import useVotoResposta from "../hooks/useVotoResposta";

function AnswerCard({ answer }) {
  const {
    placar,
    meuVoto,
    loading,
    voting,
    error,
    votar,
  } = useVotoResposta(answer.id);

  return (
    <article
      className={`answer-card bg-white border rounded-4 shadow-sm ${
        answer.resolved ? "answer-resolved" : ""
      }`}
    >
      {answer.resolved && (
        <span className="resolved-label">
          ✓ RESOLVIDO
        </span>
      )}

      <div className="d-flex align-items-start">
        <div className="vote-column flex-shrink-0">
          <VoteButtons
            placar={placar}
            meuVoto={meuVoto}
            loading={loading}
            disabled={voting}
            onVote={votar}
          />

          {error && (
            <small className="text-danger d-block mt-2">
              {error}
            </small>
          )}
        </div>

        <div className="answer-content flex-grow-1">
          <div className="answer-text">
            {answer.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="answer-footer mt-4 pt-3 border-top">
            <AuthorInfo
              name={answer.author}
              date={answer.createdAt}
              action="respondeu"
              avatarColor="cyan"
              align="right"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default AnswerCard;
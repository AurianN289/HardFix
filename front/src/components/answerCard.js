import VoteColumn from "./voteColumn";
import AuthorInfo from "./authorInfo";

function AnswerCard({ answer }) {
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
        <VoteColumn initialVotes={answer.votes} />

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
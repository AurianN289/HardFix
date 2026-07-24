import { ChevronDown, ChevronUp } from "lucide-react";

function VoteButtons({
  placar,
  meuVoto,
  loading,
  disabled,
  onVote,
}) {
  return (
    <div className="d-flex flex-column align-items-center gap-1">
      <button
        type="button"
        className={
          meuVoto === "UPVOTE"
            ? "btn btn-success"
            : "btn btn-outline-secondary"
        }
        onClick={() => onVote("UPVOTE")}
        disabled={loading || disabled}
        aria-label="Votar positivamente"
      >
        <ChevronUp size={22} />
      </button>

      <span className="fw-bold fs-5">
        {loading ? "..." : placar}
      </span>

      <button
        type="button"
        className={
          meuVoto === "DOWNVOTE"
            ? "btn btn-danger"
            : "btn btn-outline-secondary"
        }
        onClick={() => onVote("DOWNVOTE")}
        disabled={loading || disabled}
        aria-label="Votar negativamente"
      >
        <ChevronDown size={22} />
      </button>
    </div>
  );
}

export default VoteButtons;
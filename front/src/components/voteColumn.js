import { useState } from "react";

function VoteColumn({ initialVotes = 0 }) {
  const [votes, setVotes] = useState(initialVotes);
  const [selectedVote, setSelectedVote] = useState(null);

  function handleUpVote() {
    if (selectedVote === "up") {
      setVotes(votes - 1);
      setSelectedVote(null);
      return;
    }

    if (selectedVote === "down") {
      setVotes(votes + 2);
    } else {
      setVotes(votes + 1);
    }

    setSelectedVote("up");
  }

  function handleDownVote() {
    if (selectedVote === "down") {
      setVotes(votes + 1);
      setSelectedVote(null);
      return;
    }

    if (selectedVote === "up") {
      setVotes(votes - 2);
    } else {
      setVotes(votes - 1);
    }

    setSelectedVote("down");
  }

  return (
    <div className="vote-column d-flex flex-column align-items-center">
      <button
        type="button"
        className={`vote-button ${
          selectedVote === "up" ? "vote-button-selected" : ""
        }`}
        onClick={handleUpVote}
        aria-label="Votar positivamente"
      >
        ▲
      </button>

      <span
        className={`vote-number ${
          selectedVote === "up"
            ? "text-success"
            : selectedVote === "down"
            ? "text-danger"
            : ""
        }`}
      >
        {votes}
      </span>

      <button
        type="button"
        className={`vote-button ${
          selectedVote === "down" ? "vote-button-selected" : ""
        }`}
        onClick={handleDownVote}
        aria-label="Votar negativamente"
      >
        ▼
      </button>
    </div>
  );
}

export default VoteColumn;
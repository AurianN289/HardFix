function BackButton() {
  function handleBack() {
    window.history.back();
  }

  return (
    <button
      type="button"
      className="btn btn-link text-secondary text-decoration-none p-0 mb-3"
      onClick={handleBack}
    >
      <span className="me-2">←</span>
      Voltar
    </button>
  );
}

export default BackButton;
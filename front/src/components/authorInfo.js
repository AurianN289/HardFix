function AuthorInfo({
  name,
  date,
  action = "perguntou",
  avatarColor = "blue",
  align = "left",
}) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div
      className={`author-info d-flex align-items-center gap-2 ${
        align === "right" ? "justify-content-end" : ""
      }`}
    >
      {align !== "right" && (
        <div className={`author-avatar avatar-${avatarColor}`}>
          {initial}
        </div>
      )}

      <div className={align === "right" ? "text-end" : ""}>
        <strong className="d-block author-name">{name}</strong>

        <small className="text-secondary">
          {action} há {date}
        </small>
      </div>

      {align === "right" && (
        <div className={`author-avatar avatar-${avatarColor}`}>
          {initial}
        </div>
      )}
    </div>
  );
}

export default AuthorInfo;
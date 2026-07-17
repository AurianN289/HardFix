function FormField({
  id,
  label,
  description,
  required = false,
  type = "text",
  placeholder,
  value,
  onChange,
  rows = 7,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="form-label fw-semibold mb-1">
        {label}

        {required && <span className="text-danger ms-1">*</span>}
      </label>

      {description && (
        <p className="form-description text-secondary mb-2">
          {description}
        </p>
      )}

      {type === "textarea" ? (
        <textarea
          id={id}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

export default FormField;
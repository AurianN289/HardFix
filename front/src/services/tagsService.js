const API_URL = "http://localhost:8080/tags";

export async function buscarTodasTags() {
  const response = await fetch(`${API_URL}/findall`);

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    throw new Error(
      `Erro ${response.status} ao buscar tags`
    );
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}
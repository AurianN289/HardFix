const API_URL = "http://localhost:8080/perguntas";

export async function cadastrarPergunta(pergunta) {
  const response = await fetch(`${API_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pergunta),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    throw new Error(
      `Erro ${response.status} ao publicar pergunta`
    );
  }

  return response.json();
}

export async function buscarTodasPerguntas() {
  const response = await fetch(`${API_URL}/findall`);

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    throw new Error(
      `Erro ${response.status} ao buscar perguntas`
    );
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}

export async function buscarPerguntaPorId(id) {
  const response = await fetch(`${API_URL}/find/${id}`);

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    if (response.status === 404) {
      throw new Error("Pergunta não encontrada.");
    }

    throw new Error(
      `Erro ${response.status} ao buscar pergunta`
    );
  }

  return response.json();
}

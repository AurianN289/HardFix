const API_URL = "http://localhost:8080/respostas";

export async function cadastrarResposta(resposta) {
  const response = await fetch(`${API_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resposta),
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    throw new Error(
      `Erro ${response.status} ao publicar resposta`
    );
  }

  return response.json();
}

export async function buscarRespostasPorPergunta(perguntaId) {
  const response = await fetch(
    `${API_URL}/pergunta/${perguntaId}`
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro retornado pelo servidor:", errorText);

    throw new Error(
      `Erro ${response.status} ao buscar respostas`
    );
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}
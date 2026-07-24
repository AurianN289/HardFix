const API_URL = "http://localhost:8080/votos";

function getUserId() {
  return sessionStorage.getItem("user_id");
}

export async function buscarVotoDaPergunta(perguntaId) {
  const userId = getUserId();

  const headers = {};

  if (userId) {
    headers["X-Usuario-Id"] = userId;
  }

  const response = await fetch(
    `${API_URL}/perguntas/${perguntaId}`,
    {
      headers,
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro ao buscar votos:", errorText);

    throw new Error("Não foi possível carregar os votos.");
  }

  return response.json();
}

export async function votarEmPergunta(perguntaId, tipo) {
  const userId = getUserId();

  if (!userId) {
    throw new Error("Você precisa estar logado para votar.");
  }

  const response = await fetch(
    `${API_URL}/perguntas/${perguntaId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Usuario-Id": userId,
      },
      body: JSON.stringify({
        tipo,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    console.error("Erro ao votar:", errorText);

    throw new Error("Não foi possível registrar o voto.");
  }

  return response.json();
}
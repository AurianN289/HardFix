import { useEffect, useState } from "react";
import { buscarTodasTags } from "../services/tagsService";

function useTags() {
  const [availableTags, setAvailableTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);
  const [tagsError, setTagsError] = useState("");

  useEffect(() => {
    async function loadTags() {
      try {
        setLoadingTags(true);
        setTagsError("");

        const data = await buscarTodasTags();

        setAvailableTags(data);
      } catch (error) {
        console.error(error);
        setTagsError("Não foi possível carregar as tags.");
      } finally {
        setLoadingTags(false);
      }
    }

    loadTags();
  }, []);

  return {
    availableTags,
    loadingTags,
    tagsError,
  };
}

export default useTags;
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Content {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setContents((response.data as { content: Content[] }).content);
      });
  }, []);

  return contents;
}

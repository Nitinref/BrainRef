import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface Content {
  title: string;
  link: string;
  type: string;
  // Add other fields as per your backend schema
}

export function useContent(): Content[] {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((res) => {
        const data = res.data as { content: Content[] }; // Type assertion
        setContents(data.content);
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
      });
  }, []);

  return contents;
}

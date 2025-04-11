import { useState, useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) return;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type: type as "youtube" | "twitter",
      },
      {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      }
    );

    onClose();
  }

  return (
    <div>
      {open && (
        <div className="h-screen w-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder={"Title"} />
                <Input ref={linkRef} placeholder={"Link"} />
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex gap-2 p-4">
                  <Button
                    size="md"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  <Button
                    size="md"
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Twitter)}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  size="md"
                  onClick={addContent}
                  variant="primary"
                  text="Submit"
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

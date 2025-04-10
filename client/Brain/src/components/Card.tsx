import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

function getYouTubeEmbedUrl(link: string): string {
    try {
        const url = new URL(link);

        // Handle "watch?v=" format
        if (url.hostname === "www.youtube.com" && url.searchParams.has("v")) {
            return `https://www.youtube.com/embed/${url.searchParams.get("v")}`;
        }

        // Handle "youtu.be" short links
        if (url.hostname === "youtu.be") {
            return `https://www.youtube.com/embed${url.pathname}`;
        }

        // Handle already embedded links
        if (url.hostname === "www.youtube.com" && url.pathname.startsWith("/embed/")) {
            return link;
        }

        // Fallback for unsupported formats
        console.error("Invalid YouTube URL format:", link);
        return "";
    } catch (error) {
        console.error("Error parsing YouTube URL:", error);
        return "";
    }
}

export function Card({ title, link, type }: CardProps) {
    return (
        <div className="p-4 bg-white max-w-72 rounded-md border-gray-100 border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-xs">
                    <div className="text-gray-500 pr-4">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 pr-2">
                        <ShareIcon />
                    </a>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && (
                    <iframe
                        className="w-full"
                        src={getYouTubeEmbedUrl(link)}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}

                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")} target="_blank" rel="noopener noreferrer">
                            View Tweet
                        </a>
                    </blockquote>
                )}
            </div>
        </div>
    );
}
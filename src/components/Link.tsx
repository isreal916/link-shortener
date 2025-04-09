


import { useState } from "react";

export default function Link({
  link,
}: {
  link: { shortLink: string; originalLink: string };
}) {
    const [copied, setCopied] = useState<boolean>(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(link.shortLink).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
      }; 
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between bg-white p-4 md:items-center rounded-md shadow-md w-[90%]  self-center mb-4">
      <p className="text-verydarkBlue  border-b md:border-none font-bold pb-2">{link.originalLink}</p>
      <div className="flex flex-col md:flex-row gap-4  md:items-center  justify-end w-full">
        <p className="text-cyan font-bold">{link.shortLink}</p>
        <button
            onClick={handleCopy}
            className={`px-8 py-2 rounded-md text-white font-bold transition-all duration-300 ease-in-out ${
                copied ? "bg-verydarkBlue" : "bg-[#2acfcf] hover:bg-[#9be3e3] hover:text-darkViolet"
            }`}
        >
            {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
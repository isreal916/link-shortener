import { useState } from "react";
import Link from "./Link";

interface LinkType extends Array<{ shortLink: string; originalLink: string }> {}

export default function Shorter() {
  const [input, setInput] = useState<string>("");
  const [links, setLinks] = useState<LinkType>([
   
   
  ]);
  const [error, setError] = useState<string>("");
const accessToken = import.meta.env.VITE_BITLY_ACCESS_TOKEN;


  async function getLink() {
    const res = await fetch(
      "https://api-ssl.bitly.com/v4/shorten",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
            'Authorization': `Bearer ${accessToken}`,
            

        },
        body: JSON.stringify({ long_url: input }),
      }
    );
    const data = await res.json();
    if (data && data.link) {
      console.log(data.link);
      setLinks((prevLinks) => [
        { shortLink: data.link, originalLink: input },
        ...prevLinks,
      ]);
      setError("");
      setInput("");
    } else {
      console.error(data.error);
      
      setError("Please enter a valid URL");
    }
  }
  return (
    <>
      <div className="bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-no-repeat  bg-center bg-darkViolet flex flex-col md:flex-col   gap-2 p-8 w-[90%] absolute top-[-55px] self-center">
        <div className="flex flex-col md:flex-row gap-2 w-[100%] md:w-[100%]">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={`rounded-md p-4 w-full md:w-3/4 bg-white ${error ? "border-2 border-red-500" : ""}`}
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
           
          <button
            className="bg-[#2acfcf] p-4 rounded-md text-white font-bold"
            onClick={getLink}
          >
            Shorten It!
          </button>
        </div>
         {error ? (
              <p className="text-error text-red italic font-bold">{error}</p>
            ) : null}
        
       
      </div>
      <div className="flex flex-col gap-4 w-[100%] md:w-[100%] pt-32">
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </>
  );
}

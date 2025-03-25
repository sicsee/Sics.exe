import { useState } from "react";

interface AccordionProps {
  title: string;
  links: { name: string; url: string }[];
}

export function Accordion({ title, links }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-for2">
        <span>{isOpen ? "▲" : "▼"}</span> {title}
      </button>

      {isOpen && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

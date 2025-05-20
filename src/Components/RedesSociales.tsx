import React from "react";
import { Icons } from "../../icons";

const redes = [
  {
    nombre: "tiktok",
    icono: Icons.tiktok,
    link: "https://www.tiktok.com",
  },
  {
    nombre: "threads",
    icono: Icons.threads,
    link: "https://www.threads.net",
  },
  {
    nombre: "instagram",
    icono: Icons.instagram,
    link: "https://www.instagram.com",
  },
  {
    nombre: "facebook",
    icono: Icons.facebook,
    link: "https://www.facebook.com/profile.php?id=100075968842960",
  },
  {
    nombre: "youtube",
    icono: Icons.youtube,
    link: "https://youtube.com",
  },
];

const RedesSociales = () => {
  return (
    <div>
      <ul className="wrapper flex space-x-2 items-center">
        {redes.map((rede, index) => (
          <li key={`${rede.nombre}-${index}`} className={`icon ${rede.nombre} fill-current text-[#000]`}>
            <a href={rede.link} target="_blank" rel="noopener noreferrer">
              <span className="tooltip capitalize">{rede.nombre}</span>
              <div
                className="icon-svg"
                dangerouslySetInnerHTML={{ __html: rede.icono }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedesSociales;

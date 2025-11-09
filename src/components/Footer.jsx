import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 flex items-center justify-between px-4 text-base">
      <div className="flex-1 text-left text-xs">
        Desarrollado por <br />
        <a
          href="https://abrahanpiloto.vercel.app"
          className="text-blue-500 text-md italic"
        >
          Abrahan Piloto
        </a>
      </div>
      <div className="flex-1 text-center text-md text-amber-200">
        Sandra Haro{" "}
        <span className="text-xs text-white">
          2025 todos los derechos reservados
        </span>
      </div>
      <div className="flex-1 flex justify-end gap-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
}

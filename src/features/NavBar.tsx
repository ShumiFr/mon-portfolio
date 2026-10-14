import { Link } from "@tanstack/react-router";
import cv from "../data/cv";

type Lien = { to: string; label: string };

const LIENS: Lien[] = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/cv", label: "CV & Profil" },
  { to: "/blog", label: "Journal & Veille" },
];

const NavBar = () => {
  return (
    <header className="bg-fond border-b border-surface-fonce shadow-sm py-5">
      <div className="flex items-center justify-between max-w-site mx-auto px-6">
        <Link className=" items-center flex gap-3" to="/">
          <span className="font-extrabold bg-primaire text-white rounded-lg size-9 grid place-items-center">
            {cv.profil.prenom[0]}
            {cv.profil.nom[0]}
          </span>
          <div className="flex flex-col">
            <span>
              {cv.profil.prenom} {cv.profil.nom}
            </span>
            <span className="font-jet text-xs text-texte-doux">{cv.profil.metier}</span>
          </div>
        </Link>

        <nav className="flex gap-4 bg-surface rounded-full p-1">
          {LIENS.map((lien) => (
            <Link key={lien.label} to={lien.to} className="transition-colors hover:bg-surface-fonce [&.active]:bg-primaire [&.active]:text-white rounded-full px-4 py-1.5">
              {lien.label}
            </Link>
          ))}
        </nav>

        <a className="transition-opacity hover:opacity-90 bg-primaire text-white rounded-full px-4 py-2" href={`mailto:${cv.profil.email}`}>
          Me contacter
        </a>
      </div>
    </header>
  );
};

export default NavBar;

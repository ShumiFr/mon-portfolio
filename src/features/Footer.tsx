import cv from "../data/cv";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-fonce">
      <div className="max-w-site mx-auto px-6 py-8 flex items-center justify-between text-sm text-texte-doux">
        <span>
          © {new Date().getFullYear()} {cv.profil.prenom} {cv.profil.nom}
        </span>
        <ul className="flex gap-5">
          {cv.profil.github && (
            <li>
              <a className="hover:text-texte transition-colors flex items-center gap-2" target="_blank" rel="noreferrer" href={cv.profil.github}>
                <FaGithub className="size-4" /> Github
              </a>
            </li>
          )}
          {cv.profil.linkedin && (
            <li>
              <a className="hover:text-texte transition-colors flex items-center gap-2" target="_blank" rel="noreferrer" href={cv.profil.linkedin}>
                <FaLinkedin className="size-4" /> Linkedin
              </a>
            </li>
          )}
          <li>
            <a className="hover:text-texte transition-colors flex items-center gap-2" href={`mailto:${cv.profil.email}`}>
              <Mail className="size-4" /> Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

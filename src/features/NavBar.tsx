import { Link } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <header className="p-2 shadow-2xl">
      <div></div>

      <nav className="flex gap-4 bg-surface">
        <Link to="/" className="[&.active]:font-bold">
          Accueil
        </Link>
        <Link to="/projets" className="[&.active]:font-bold">
          Projets
        </Link>
        <Link to="/cv" className="[&.active]:font-bold">
          CV & Profil
        </Link>
        <Link to="/blog" className="[&.active]:font-bold">
          Journal & Veille
        </Link>
      </nav>

      <div></div>
    </header>
  );
};

export default NavBar;

import { Link } from "@tanstack/react-router";
import cv from "../data/cv";
import { ArrowRight, FileText, MapPin, NotebookPen, BadgeCheck, PlantPot, Zap } from "lucide-react";
import { formationsTriees } from "../utils/tri";

export default function Accueil() {
  const competencesPrincipales = cv.competences.filter((competence) => competence.principale);

  return (
    <>
      <section className="grid items-center gap-12 py-16 md:grid-cols-[3fr_2fr] md:py-24">
        <div>
          {cv.profil.disponibilite && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-fonce px-3 py-1 font-jet text-xs text-primaire">
              <span className="size-2 rounded-full bg-primaire motion-safe:animate-pulse" aria-hidden="true"></span>
              {cv.profil.disponibilite}
            </p>
          )}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-primaire md:text-6xl">{cv.profil.accroche}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-texte-doux">
            {cv.profil.description} {cv.profil.experience} {cv.profil.experience > 1 ? "années" : "année"} d'expérience à enrichir avec vous
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {competencesPrincipales.map((competence) => (
              <li key={competence.nom} className="rounded-md bg-surface-fonce px-2 py-0.5 font-jet text-sm">
                {competence.nom}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full bg-secondaire px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90" to="/projets">
              Explorer mes projets ({cv.projets.length}) <ArrowRight className="size-4" />
            </Link>
            <Link className="inline-flex items-center gap-2 rounded-full bg-surface-fonce px-6 py-3 font-semibold text-texte transition-colors hover:bg-surface" to="/cv">
              <FileText className="size-4" /> Voir mon CV
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            <li className="inline-flex items-center gap-1.5 rounded-full border border-surface-fonce px-3 py-1 font-jet text-xs text-texte-doux">
              <MapPin className="size-3.5" /> {cv.profil.ville}
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-full border border-surface-fonce px-3 py-1 font-jet text-xs text-texte-doux">
              <NotebookPen className="size-3.5" /> {formationsTriees[0].diplome}
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-4 shadow-lg md:mr-8">
          <img className="aspect-square w-full rounded-2xl object-cover" src="/img.jpg" alt={`Illustration de ${cv.profil.prenom} ${cv.profil.nom}`} />
          <div className="px-2 pt-4 pb-2">
            <p className="text-lg font-bold text-primaire">
              {cv.profil.prenom} {cv.profil.nom}
            </p>
            <p className="font-jet text-xs text-texte-doux">
              {cv.profil.experience} {cv.profil.experience > 1 ? "ans" : "an"} d'exp. · {cv.profil.metier}
            </p>
          </div>

          <div className="absolute top-10 -left-12 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs shadow-md motion-safe:animate-flotter md:flex">
            <span className="grid size-7 place-items-center rounded-full bg-primaire text-white" aria-hidden="true">
              <BadgeCheck className="size-4" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold">TypeScript strict</span>
              <span className="text-texte-doux">Code typé de bout en bout</span>
            </span>
          </div>
          <div className="absolute -top-4 -right-4 hidden rotate-6 rounded-xl bg-surface-fonce p-2 text-primaire shadow-md md:block" aria-hidden="true">
            <PlantPot className="size-5" />
          </div>
          <div className="absolute -right-12 bottom-24 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs shadow-md [animation-delay:1.5s] motion-safe:animate-flotter md:flex">
            <span className="grid size-7 place-items-center rounded-full bg-accent text-white" aria-hidden="true">
              <Zap className="size-4" />
            </span>
            <span className="flex flex-col">
              <span className="font-semibold">En apprentissage</span>
              <span className="text-texte-doux">Node.js & API REST</span>
            </span>
          </div>
        </div>
      </section>
      <section>{/* Projets à la Une */}</section>
      <section>{/* Contact */}</section>
    </>
  );
}

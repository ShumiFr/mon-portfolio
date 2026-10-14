import { createFileRoute } from "@tanstack/react-router";
import cv from "../data/cv";

export const Route = createFileRoute("/projets")({
  component: Projets,
});

function Projets() {
  return (
    <>
      <h1>Projets</h1>
      <div>
        {cv.projets.map((projet) => (
          <article key={projet.id}>Nom du projet : {projet.nom}</article>
        ))}
      </div>
    </>
  );
}

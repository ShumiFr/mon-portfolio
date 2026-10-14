import { createFileRoute } from "@tanstack/react-router";
import cv from "../data/cv";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h1>Mon Profil</h1>
      <p>
        Je m'appelle {cv.profil.nom} {cv.profil.prenom}, je suis{" "}
        {cv.profil.metier}.
      </p>
    </>
  );
}

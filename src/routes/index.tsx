import { createFileRoute } from "@tanstack/react-router";
import Accueil from "../pages/Accueil";

export const Route = createFileRoute("/")({
  component: Accueil,
});

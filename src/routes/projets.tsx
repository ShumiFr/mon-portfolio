import { createFileRoute } from "@tanstack/react-router";
import Projets from "../pages/Projets";

export const Route = createFileRoute("/projets")({
  component: Projets,
});



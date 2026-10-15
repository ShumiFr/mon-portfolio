import { createFileRoute } from "@tanstack/react-router";
import CVPage from "../pages/Cv";

export const Route = createFileRoute("/cv")({
  component: CVPage,
});

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import cv from "../data/cv";
import NavBar from "../features/NavBar";

const RootLayout = () => (
  <>
    <NavBar />

    <main className="max-w-site mx-auto px-6">
      <Outlet />
    </main>

    <footer className="bg-fond">
      <div className="max-w-site mx-auto px-6">
        {cv.profil.github && (
          <a target="_blank" href={cv.profil.github}>
            Github
          </a>
        )}
        {cv.profil.linkedin && (
          <a target="_blank" href={cv.profil.linkedin}>
            Linkedin
          </a>
        )}
      </div>
    </footer>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });

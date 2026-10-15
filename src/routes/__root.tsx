import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "../features/NavBar";
import Footer from "../features/Footer";

const RootLayout = () => (
  <>
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pb-16 max-w-site mx-auto px-6">
        <Outlet />
      </main>

      <Footer />
    </div>

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });

import { render } from "lit-html";
import { HomeParams } from "@/pages/home";
import routes from "./routes";

export const app = document.querySelector<HTMLDivElement>("#app")!;

export function renderPage(params: HomeParams) {
  const { pathname } = window.location;
  const currentRoute = routes[pathname as keyof typeof routes];
  render(currentRoute(params), app);
}

export function navigate(route: keyof typeof routes) {
  window.location.href = route;
}

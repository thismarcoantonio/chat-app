import { html, render } from "lit-html";
import { logo } from "@/components/logo";
import { menuOpenIcon } from "@/icons/menu-open";
import { menuCloseIcon } from "@/icons/menu-close";
import { app, navigate } from "@/router";
import { messages } from "@/config";

let menuOpen = true;

export function chatPage() {
  const asideClasses = menuOpen ? "translate-x-0" : "translate-x-full";
  const menuIcon = menuOpen ? menuCloseIcon : menuOpenIcon;

  const navigateToHome = () => {
    navigate("/");
  };

  const handleMenuOpen = () => {
    menuOpen = !menuOpen;
    render(chatPage(), app);
  };

  return html`
    <div class="h-screen flex flex-col">
      <header class="flex items-center justify-between p-6">
        <button @click="${navigateToHome}">${logo()}</button>
        <button @click="${handleMenuOpen}" class="text-white lg:hidden">
          ${menuIcon({ size: 28 })}
        </button>
      </header>
      <div
        class="flex-1 mt-6 relative overflow-hidden lg:flex lg:justify-between lg:px-6"
      >
        <div class="px-6 lg:px-0">Hello</div>
        <aside
          class="h-5/6 p-3 rounded-l-md bg-white top-0 right-0 absolute w-9/12 transition-transform ${asideClasses} lg:relative lg:w-auto lg:rounded-md lg:translate-x-0"
        >
          22 users online
        </aside>
        ${JSON.stringify(messages)}
      </div>
    </div>
  `;
}

import { html } from "lit-html";

export function logo() {
  return html`
    <h1 class="inline-flex text-2xl	text-white items-center">
      CHAT
      <span
        class="text-lg bg-white text-gray-900 font-bold pl-2 pr-6 py-1 ml-2 rounded-sm"
      >
        APP
      </span>
    </h1>
  `;
}

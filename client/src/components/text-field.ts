import { html } from "lit-html";

export function textField({ label = "" } = {}) {
  return html`
    <input placeholder="${label}" class="w-full py-3 px-4 rounded-3xl" />
  `;
}

import { html } from "lit-html";

export function arrowRightIcon({ size = 24 } = {}) {
  return html`
    <svg
      width="${size}"
      height="${size}"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
      />
    </svg>
  `;
}

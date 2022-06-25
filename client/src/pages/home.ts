import { html } from "lit-html";
import { logo } from "@/components/logo";
import { textField } from "@/components/text-field";
import { arrowRightIcon } from "@/icons/arrow-right";
import { Room } from "@/declarations/Room";

interface HomeParams {
  rooms: Room[];
}

export function homePage({ rooms }: HomeParams) {
  return html`
    <div
      class="mx-auto px-6 pt-10 min-h-screen max-w-screen-lg md:justify-between md:flex md:items-center md:pb-20 md:px-20"
    >
      <div
        class="text-center md:text-left md:max-w-sm md:shrink-0 md:mr-14 lg:mr-24"
      >
        ${logo()}
        <p class="mt-2 text-slate-200 text-white">
          Chat with your friends without thinking much, go ahead and join in!
        </p>
        <form class="flex items-center mt-4 relative">
          ${textField({ label: "insert username" })}
          <button
            type="submit"
            id="startChat"
            class="p-1 bg-gray-900 text-white rounded-full absolute right-1"
          >
            ${arrowRightIcon({ size: 32 })}
          </button>
        </form>
      </div>
      <ul
        id="rooms-list"
        class="my-14 mx-auto w-full max-w-sm bg-gray-800 p-4 rounded-lg md:mx-0 md:max-h-[65vh] md:overflow-auto"
      >
        ${rooms.map(
          (room) => html`
            <li
              class="flex items-center justify-between bg-white text-left px-4 py-3 rounded-lg shadow-lg mb-4 last:mb-0"
            >
              <div>
                <p class="font-bold mb-1 text-slate-800">${room.name}</p>
                <div class="flex items-center text-sm text-slate-600">
                  <div class="w-1.5 h-1.5 bg-lime-600 rounded-full mr-2"></div>
                  5 online now (${room.maxUsers} max)
                </div>
              </div>
              <button
                class="text-slate-800 flex items-center pl-2 pr-1 py-1 rounded transition-colors hover:bg-slate-200"
              >
                Join ${arrowRightIcon()}
              </button>
            </li>
          `
        )}
      </ul>
    </div>
  `;
}

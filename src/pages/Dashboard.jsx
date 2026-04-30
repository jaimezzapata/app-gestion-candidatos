import { Link } from "react-router-dom";
import { redirectAlert } from "../helpers/alerts";
import { removeLocalStorage } from "../helpers/local-storage";

function Dashboard() {
  function logout() {
    removeLocalStorage("usuario");
    redirectAlert("Cerrando sesión", "Será redireccionado en ", "info", "/");
  }
  return (
    <div class="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div class="flex items-center gap-3 text-[#1142d4]">
          <div class="size-6">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
            </svg>
          </div>
          <h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
            Nexus ATS
          </h2>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#"
            class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
          >
            Candidatos
          </a>
          <a
            href="#"
            class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#1142d4] transition-colors"
          >
            Vacantes
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <Link
            to="/"
            class="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#1142d4] transition-colors"
          >
            Inicio
          </Link>
          <Link
            onClick={logout}
            class="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2 px-5 rounded-[0.125rem] transition-colors"
          >
            Salir
          </Link>
        </div>
      </header>

      <main class="flex-1 px-6 lg:px-10 py-8">
        <div class="max-w-6xl mx-auto">
          <section class="relative overflow-hidden rounded-[0.75rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 mb-8">
            <div class="absolute top-[-60%] right-[-30%] w-[700px] h-[500px] bg-[#1142d4]/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-[-60%] left-[-20%] w-[700px] h-[500px] bg-[#1142d4]/10 rounded-full blur-3xl"></div>

            <div class="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p class="text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 border border-[#1142d4]/20 inline-flex px-3 py-1 rounded-full">
                  Panel de control
                </p>
                <h1 class="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Dashboard
                </h1>
                <p class="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
                  Una vista rápida de tus candidatos, vacantes y actividad
                  reciente para mantener el proceso de selección bajo control.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  type="button"
                  class="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
                >
                  Crear vacante
                </button>
                <button
                  type="button"
                  class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
                >
                  Añadir candidato
                </button>
              </div>
            </div>

            <div class="relative mt-6 grid grid-cols-1 md:grid-cols-12 gap-3">
              <div class="md:col-span-6">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Búsqueda
                </label>
                <div class="mt-2 flex items-center gap-2 bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2">
                  <svg
                    class="size-4 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input
                    class="w-full bg-transparent outline-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    placeholder="Buscar por nombre, correo o vacante..."
                  />
                </div>
              </div>

              <div class="md:col-span-3">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Estado
                </label>
                <select class="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none">
                  <option>Todos</option>
                  <option>Nuevo</option>
                  <option>En proceso</option>
                  <option>Entrevista</option>
                  <option>Oferta</option>
                </select>
              </div>

              <div class="md:col-span-3">
                <label class="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Rango
                </label>
                <select class="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none">
                  <option>Últimos 7 días</option>
                  <option>Últimos 30 días</option>
                  <option>Este trimestre</option>
                  <option>Este año</option>
                </select>
              </div>
            </div>
          </section>

          <section class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8 space-y-8">
              <section class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="p-6 rounded-[0.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Candidatos
                      </p>
                      <p class="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
                        248
                      </p>
                    </div>
                    <div class="size-11 rounded-[0.5rem] bg-[#1142d4]/10 text-[#1142d4] flex items-center justify-center">
                      <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 21V19C17 17.3431 15.6569 16 14 16H6C4.34315 16 3 17.3431 3 19V21"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 21V19C20.9989 17.6137 20.1614 16.365 18.875 15.8"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.875 4.8C17.1644 5.36222 18.0049 6.61249 18.0049 8.00123C18.0049 9.38997 17.1644 10.6402 15.875 11.2025"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Últimos 30 días</span>
                      <span class="text-emerald-600 dark:text-emerald-400 font-semibold">
                        +18%
                      </span>
                    </div>
                    <div class="mt-2 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full w-[68%] bg-[#1142d4] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div class="p-6 rounded-[0.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Vacantes activas
                      </p>
                      <p class="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
                        12
                      </p>
                    </div>
                    <div class="size-11 rounded-[0.5rem] bg-[#1142d4]/10 text-[#1142d4] flex items-center justify-center">
                      <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 6V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V6"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 11H16"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Actualizadas hoy</span>
                      <span class="text-[#1142d4] font-semibold">3</span>
                    </div>
                    <div class="mt-2 grid grid-cols-12 gap-1">
                      <div class="h-2 col-span-7 bg-[#1142d4] rounded-full"></div>
                      <div class="h-2 col-span-3 bg-[#1142d4]/40 rounded-full"></div>
                      <div class="h-2 col-span-2 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div class="p-6 rounded-[0.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#1142d4]/30 transition-colors">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Entrevistas (hoy)
                      </p>
                      <p class="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
                        5
                      </p>
                    </div>
                    <div class="size-11 rounded-[0.5rem] bg-[#1142d4]/10 text-[#1142d4] flex items-center justify-center">
                      <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 0 16.299 0 10.5C0 4.70101 4.70101 0 10.5 0C16.299 0 21 4.70101 21 10.5Z"
                          fill="currentColor"
                          opacity="0"
                        ></path>
                        <path
                          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 7V12L15 14"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="mt-5 flex items-center justify-between">
                    <div class="text-xs text-slate-500 dark:text-slate-400">
                      Próxima en
                      <span class="ml-1 font-semibold text-slate-900 dark:text-slate-100">
                        42 min
                      </span>
                    </div>
                    <button
                      type="button"
                      class="text-sm font-semibold text-[#1142d4] hover:text-[#1142d4]/80 transition-colors"
                    >
                      Ver agenda
                    </button>
                  </div>
                </div>
              </section>

              <section class="rounded-[0.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                      Últimos candidatos
                    </h2>
                    <p class="text-sm text-slate-600 dark:text-slate-400">
                      Actividad reciente para dar seguimiento sin perder
                      contexto.
                    </p>
                  </div>
                  <button
                    type="button"
                    class="hidden sm:inline-flex bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2 px-4 rounded-[0.125rem] transition-colors"
                  >
                    Ver todos
                  </button>
                </div>

                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm">
                    <thead class="bg-[#f6f6f8] dark:bg-[#101522] text-slate-600 dark:text-slate-400">
                      <tr>
                        <th class="text-left font-semibold px-6 py-3">
                          Candidato
                        </th>
                        <th class="text-left font-semibold px-6 py-3">
                          Vacante
                        </th>
                        <th class="text-left font-semibold px-6 py-3">
                          Estado
                        </th>
                        <th class="text-right font-semibold px-6 py-3">
                          Última acción
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-3">
                            <div class="size-9 rounded-full bg-[#1142d4]/10 border border-[#1142d4]/20"></div>
                            <div>
                              <p class="font-semibold text-slate-900 dark:text-white">
                                Camila Rojas
                              </p>
                              <p class="text-xs text-slate-500 dark:text-slate-400">
                                camila.rojas@mail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 text-slate-700 dark:text-slate-200">
                          Frontend React
                        </td>
                        <td class="px-6 py-4">
                          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1142d4]/10 text-[#1142d4] border border-[#1142d4]/20">
                            Entrevista
                          </span>
                        </td>
                        <td class="px-6 py-4 text-right text-slate-600 dark:text-slate-400">
                          Hace 2 h
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-3">
                            <div class="size-9 rounded-full bg-emerald-500/10 border border-emerald-500/20"></div>
                            <div>
                              <p class="font-semibold text-slate-900 dark:text-white">
                                Juan Pérez
                              </p>
                              <p class="text-xs text-slate-500 dark:text-slate-400">
                                juan.perez@mail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 text-slate-700 dark:text-slate-200">
                          Analista de Datos
                        </td>
                        <td class="px-6 py-4">
                          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                            Oferta
                          </span>
                        </td>
                        <td class="px-6 py-4 text-right text-slate-600 dark:text-slate-400">
                          Ayer
                        </td>
                      </tr>

                      <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-3">
                            <div class="size-9 rounded-full bg-amber-500/10 border border-amber-500/20"></div>
                            <div>
                              <p class="font-semibold text-slate-900 dark:text-white">
                                Valentina Gómez
                              </p>
                              <p class="text-xs text-slate-500 dark:text-slate-400">
                                valentina.g@mail.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 text-slate-700 dark:text-slate-200">
                          UX/UI
                        </td>
                        <td class="px-6 py-4">
                          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                            En proceso
                          </span>
                        </td>
                        <td class="px-6 py-4 text-right text-slate-600 dark:text-slate-400">
                          Hace 3 días
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="px-6 py-4 bg-[#f6f6f8] dark:bg-[#101522] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p class="text-xs text-slate-600 dark:text-slate-400">
                    Mostrando 3 de 248
                  </p>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                    >
                      Anterior
                    </button>
                    <button
                      type="button"
                      class="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <aside class="lg:col-span-4 space-y-8">
              <section class="p-6 rounded-[0.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                    Actividad reciente
                  </h2>
                  <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Hoy
                  </span>
                </div>
                <div class="mt-5 space-y-4">
                  <div class="flex gap-3">
                    <div class="mt-1 size-2 rounded-full bg-[#1142d4]"></div>
                    <div class="flex-1">
                      <p class="text-sm text-slate-800 dark:text-slate-200">
                        <span class="font-semibold">Camila Rojas</span> pasó a{" "}
                        <span class="font-semibold">Entrevista</span>.
                      </p>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Hace 2 horas
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <div class="mt-1 size-2 rounded-full bg-emerald-500"></div>
                    <div class="flex-1">
                      <p class="text-sm text-slate-800 dark:text-slate-200">
                        Se envió <span class="font-semibold">oferta</span> a{" "}
                        <span class="font-semibold">Juan Pérez</span>.
                      </p>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Hace 5 horas
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <div class="mt-1 size-2 rounded-full bg-amber-500"></div>
                    <div class="flex-1">
                      <p class="text-sm text-slate-800 dark:text-slate-200">
                        Nueva postulación para{" "}
                        <span class="font-semibold">UX/UI</span>.
                      </p>
                      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Ayer
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="mt-6 w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-4 rounded-[0.125rem] transition-colors"
                >
                  Ver historial
                </button>
              </section>
            </aside>
          </section>
        </div>
      </main>

      <footer class="bg-white dark:bg-slate-900 px-6 py-10 lg:px-10 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2 text-[#1142d4]">
            <span class="font-bold text-slate-900 dark:text-white">
              Nexus ATS
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400">
              Dashboard
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-500">
            © 2026 Nexus ATS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;

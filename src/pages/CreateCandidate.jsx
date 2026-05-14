import { end_points } from "../services/api";
function CreateCandidate() {
  function saveCandidate(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let candidate = Object.fromEntries(formData);
    let new_skills = candidate.skills.split(",")
    candidate.skills = new_skills
    fetch(end_points.candidates, {
      method: "POST",
      body: JSON.stringify(candidate),
    });
  }

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 border border-[#1142d4]/20 inline-flex px-3 py-1 rounded-full">
                Candidatos
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Crear candidato
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Completa la información del perfil.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Estado
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1142d4]/10 text-[#1142d4] border border-[#1142d4]/20">
                new
              </span>
            </div>
          </div>

          <form
            onSubmit={saveCandidate}
            className="rounded-[0.75rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Datos del candidato
              </h2>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-6">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Ej: Ana Martínez"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-6">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Ej: ana.martinez@gmail.com"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Teléfono
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Ej: +57 301 555 0101"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Ubicación
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Ej: Bogotá, CO"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Vacante (appliedOfferId)
                </label>
                <input
                  name="appliedOfferId"
                  type="number"
                  placeholder="Ej: 45"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Senioridad
                </label>
                <select
                  name="seniority"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                >
                  <option value={"Junior"}>Junior</option>
                  <option value={"Mid"}>Mid</option>
                  <option value={"Senior"}>Senior</option>
                  <option value={"Lead"}>Lead</option>
                </select>
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Años de experiencia
                </label>
                <input
                  name="yearsExperience"
                  type="number"
                  placeholder="Ej: 1"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
              </div>

              <div className="md:col-span-4">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Estado
                </label>
                <select
                  name="status"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                >
                  <option value={"new"}>new</option>
                  <option value={"in_process"}>in_process</option>
                  <option value={"interview"}>interview</option>
                  <option value={"offer"}>offer</option>
                  <option value={"hired"}>hired</option>
                  <option value={"rejected"}>rejected</option>
                </select>
              </div>

              <div className="md:col-span-12">
                <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  Skills (separadas por coma)
                </label>
                <input
                  name="skills"
                  type="text"
                  placeholder="Ej: React, JavaScript, HTML, CSS"
                  className="mt-2 w-full bg-[#f6f6f8] dark:bg-[#101522] border border-slate-200 dark:border-slate-800 rounded-[0.5rem] px-3 py-2 text-sm text-slate-900 dark:text-slate-100 outline-none"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                    React
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                    HTML
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
                    CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f8] dark:bg-[#101522] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Revisa la información antes de guardar.
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors"
                >
                  Guardar candidato
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCandidate;

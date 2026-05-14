import { Link } from "react-router-dom";
import { end_points } from "../services/api";
import { useState, useEffect } from "react";
import RowCandidate from "../components/RowCandidate";

function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null);

  function fetchCandidates() {
    fetch(end_points.candidates)
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => setError(error));
  }

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-[#1142d4] bg-[#1142d4]/10 border border-[#1142d4]/20 inline-flex px-3 py-1 rounded-full">
                Módulo
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Candidatos
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
                Listado general de candidatos registrados en el sistema.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/dashboard/create-candidate"
                type="button"
                className="bg-[#1142d4] hover:bg-[#1142d4]/90 text-white text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
              >
                Crear candidato
              </Link>
              <button
                type="button"
                className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-semibold py-2.5 px-5 rounded-[0.125rem] transition-colors w-full sm:w-auto"
              >
                Importar
              </button>
            </div>
          </div>

          <section className="rounded-[0.75rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Registros
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Acciones disponibles: editar y eliminar.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Total: 6
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f6f6f8] dark:bg-[#101522] text-slate-600 dark:text-slate-400">
                  <tr>
                    <th className="text-left font-semibold px-6 py-3">
                      Candidato
                    </th>
                    <th className="text-left font-semibold px-6 py-3">
                      Contacto
                    </th>
                    <th className="text-left font-semibold px-6 py-3">
                      Ubicación
                    </th>
                    <th className="text-left font-semibold px-6 py-3">Nivel</th>
                    <th className="text-left font-semibold px-6 py-3">
                      Estado
                    </th>
                    <th className="text-left font-semibold px-6 py-3">
                      Vacante
                    </th>
                    <th className="text-left font-semibold px-6 py-3">
                      Creado
                    </th>
                    <th className="text-right font-semibold px-6 py-3">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {candidates.map((item) => (
                    <RowCandidate data={item} update={fetchCandidates}/>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-[#f6f6f8] dark:bg-[#101522] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Mostrando 3 de 6
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Candidates;

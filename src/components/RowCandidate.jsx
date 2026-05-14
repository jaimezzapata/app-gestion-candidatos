import React from "react";
import { formatDate } from "../helpers/generator";
import { end_points } from "../services/api";
import { confirmAlert } from "../helpers/alerts";

function RowCandidate({ data, update }) {
  function deleteCandidate(id) {
    confirmAlert(end_points.candidates, id, update, "Seguro que desea eliminar?", "Esta acción no se puede revertir", "Si, eliminar");
  }
  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-amber-500/10 border border-amber-500/20" />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {data.fullName}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {data.id}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-slate-700 dark:text-slate-200">{data.email}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {data.phone}
        </p>
      </td>
      <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
        {data.location}
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">
          {data.seniority}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:text-emerald-400">
          {data.status}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-700 dark:text-slate-200">
        {data.appliedOfferId}
      </td>
      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
        {formatDate(data.createdAt)}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 3.5C17.3284 2.67157 18.6716 2.67157 19.5 3.5C20.3284 4.32843 20.3284 5.67157 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Editar
          </button>
          <button
            onClick={() => deleteCandidate(data.id)}
            type="button"
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30 text-xs font-semibold py-2 px-3 rounded-[0.125rem] transition-colors"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 6L18 20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20L5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default RowCandidate;

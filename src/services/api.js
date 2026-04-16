const URL_BASE = "https://app-gestion-candidatos-am-api.onrender.com/"
export let end_points = {
    users: URL_BASE + "users", /* localhost:8080/users */
    jobs: `${URL_BASE}jobs`,
    candidates: URL_BASE + "candidates",
    applications: `${URL_BASE}applications`
}
const API_BASE_URL = 'https://api.tvmaze.com';

async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}

export const searchForShows = strSearch =>
  apiGet(`/search/shows?q=${strSearch}`);
export const searchForActors = strSearch =>
  apiGet(`/search/people?q=${strSearch}`);
export const getShowById = id => apiGet(`/shows/${id}`);

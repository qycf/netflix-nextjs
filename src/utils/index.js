const API_KEY = "90e3d115f45f4c651fccdbb5d6c4c578";
const BASE_URL = "https://api.themoviedb.org/3";


export const setVodsStatus = async (vodIds, status) => {
  try {
    const res = await fetch(`/api/vod/status?vodIds=${vodIds}&status=${status}`, {
      method: "POST",
    });
    const data = await res.json();
    return data;
  } catch (e) {
  }
}


export const deleteVods = async (vodIds) => {
  try {
    const res = await fetch(`/api/vod/delete?vodIds=${vodIds}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (e) {
  }
}

export const getVodLevel = async (uid) => {
  try {
    const res = await fetch(`/api/vod/level`, {
      method: "GET",
    });
    const data = await res.json();
    return data && data.data;
  } catch (e) {
  }

}

export const getVodDetail = async (vodId) => {
  try {
    const res = await fetch(`/api/vod/detail?vodId=${vodId}`, {
      method: "GET",
    });
    const data = await res.json();
    return data && data.data;
  } catch (e) {
  }
}

export const getVodList = async (typeId, typeSlug, vodStatus = 0, vodName, vodLevel, page = 1, size = 5) => {
  try {
    const res = await fetch(`/api/vod/list?typeId=${typeId}&typeSlug=${typeSlug}&vodStatus=${vodStatus}&vodName=${vodName}&vodLevel=${vodLevel}&page=${page}&size=${size}`, {
      method: "GET",
    });
    const data = await res.json();
    return data && data.data;
  }
  catch (e) {
  }
}

export const getVodListByType = async (typeId, vodStatus, vodName, vodLevel, page, size) => {
  try {
    const res = await fetch(`/api/vod/list?typeId=${typeId}&vodStatus=${vodStatus}&vodName=${vodName}&vodLevel=${vodLevel}&page=${page}&size=${size}`, {
      method: "GET",
    });
    const data = await res.json();
    return data && data.data;
  }
  catch (e) {
  }
}



export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getTopratedMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getTVorMoviesByGenre = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getTVorMovieVideosByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
  }
};

export const getTVorMovieSearchResults = async (type, query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getTVorMovieDetailsByID = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
  }
};

export const getSimilarTVorMovies = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
  }
};

export const getAllfavorites = async (uid, accountID) => {
  try {
    const res = await fetch(
      `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.data;
  } catch (e) {
  }
};

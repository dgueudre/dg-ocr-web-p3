export default {
  getParam: (key) => {
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    return searchParams.get(key);
  },
};

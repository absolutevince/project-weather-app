export default (function loader() {
  const loaders = document.querySelectorAll("#loader");

  return {
    show: () => {
      loaders.forEach((loader) => loader.classList.remove("hidden"));
    },
    hide: () => {
      loaders.forEach((loader) => loader.classList.add("hidden"));
    },
  };
})();

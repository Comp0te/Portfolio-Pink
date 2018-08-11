export let supportsPassiveListener = false;

try {
  const opts = Object.defineProperty({}, "passive", {
    get: () => {
      supportsPassiveListener = true;
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {
  isNaN(e);
}

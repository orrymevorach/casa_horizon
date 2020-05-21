export function debounce(callback, delay, accumulate = false) {
  let timeout = null;
  let accumulatedParams = [];
  return (...parameters) => {
    if (accumulate) {
      accumulatedParams.push(parameters);
    }
    if (timeout) {
      clearTimeout(timeout);
    }

    const context = this;
    const args = accumulate ? accumulatedParams : parameters;
    timeout = setTimeout(() => {
      callback.apply(context, args);
      accumulatedParams = [];
      timeout = null;
    }, delay);
  };
}

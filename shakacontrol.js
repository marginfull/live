document.addEventListener("response", e => {
  e.stopImmediatePropagation();
  document.dispatchEvent(new CustomEvent("responseReceived", {
    detail: e.detail.requestId + "xxx"
  }));
}, true);
require('source-map-support').install();
console.log("Background page.");

// Just something to get 'extensions::*' into our stack.
chrome.storage.local.clear(() => {
  chrome.log("In callback.");
  throw new Error("Error.");
});
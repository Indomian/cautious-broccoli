const DOCUMENT_STATE_LOADING = "loading";

/**
 * Calls function when webpage is ready
 * @param {function} callback
 */
export function onReady(callback) {
    if (document.readyState !== DOCUMENT_STATE_LOADING) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

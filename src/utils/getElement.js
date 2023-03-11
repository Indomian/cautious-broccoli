export class ElementNotFound extends Error {}

export function getElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new ElementNotFound(selector);
    }

    return element;
}
export const MATH_ERROR = 0.000001;
export const MATH_ERROR2 = MATH_ERROR * MATH_ERROR;
export const SQRT2 = Math.sqrt(2);

/**
 * Checks if a equals b with given error
 * @param {number} a
 * @param {number} b
 * @param {number} error
 * @returns {boolean}
 */
export function isEqual(a, b, error) {
    return Math.abs(a - b) < error;
}

export type NullableNumber = number | null;

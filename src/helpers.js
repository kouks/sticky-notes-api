/**
 * Environment variables helper.
 *
 * @param {string} name - The variable name.
 * @param {mixed} fallback - The fallback value.
 * @returns {mixed} - The variable content.
 */
export const env = (name, fallback) => process.env[name] === undefined ? fallback : process.env[name]


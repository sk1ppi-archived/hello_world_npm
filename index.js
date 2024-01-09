/**
 * The string representing "Hello World".
 * @type {string}
 */
const HELLO_WORLD_STRING = 'Hello World';

/**
 * Returns the hello world string.
 * @returns {string} The hello world string.
 */
function getHelloWorldAsString() {
    return HELLO_WORLD_STRING;
}

/**
 * Returns the "Hello World" string as an array of words.
 * @returns {string[]} An array of words from the "Hello World" string.
 */
function getHelloWorldAsArray() {
    return HELLO_WORLD_STRING.split(' ');
}

module.exports = {
    HELLO_WORLD_STRING,
    getHelloWorldAsString,
    getHelloWorldAsArray,
};
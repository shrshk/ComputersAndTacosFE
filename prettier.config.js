// @noflow
// https://prettier.io/docs/en/options.html
module.exports = {
    // Include parentheses around a sole arrow function parameter. (default: "avoid")
    arrowParens: 'always',

    // Print spaces between brackets in object literals. (default: true)
    bracketSpacing: true,

    // By default, Prettier preserves a flavor of line endings a given file has already used. It also converts mixed line endings within one file to what it finds at the end of the first line.
    // Valid options: "auto", "lf", "crlf", "cr" (default: "auto")
    endOfLine: process.platform === 'win32' ? 'crlf' : 'lf',

    // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
    // (does not apply to self closing elements). (default: false)
    jsxBracketSameLine: false,

    // Using the JSON parser for JSON files
    overrides: [
        {
            files: '*.json',
            options: {
                parser: 'json',
            },
        },
    ],

    // Specify which parser to use. (default: None)
    parser: 'babel-flow',

    // Specify the line length that the printer will wrap on. (default: 80)
    printWidth: 80,

    // By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer,
    // e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead,
    // so this option allows you to opt out with "never". (default: "preserve")
    proseWrap: 'preserve',

    // Print semicolons at the ends of statements. (default: true)
    semi: true,

    // Use single quotes instead of double quotes. (default: false)
    singleQuote: true,

    // Specify the number of spaces per indentation-level. (default: 2)
    tabWidth: 2,

    // Print trailing commas wherever possible when multi-line. (default: "none")
    trailingComma: 'es5',

    // Indent lines with tabs instead of spaces. (default: false)
    useTabs: false,
};

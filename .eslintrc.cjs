module.exports = {
    env: {
        browser: true,
        node: true,  // Prend en charge 'module' et 'require'
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-undef": "off",
    },
};

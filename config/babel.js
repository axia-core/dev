module.exports = {
	// Convert ESM -> CJS; Specifically for @axia-js >= v4 where ESM becomes default
	"plugins": ["@babel/plugin-transform-modules-commonjs"]
}

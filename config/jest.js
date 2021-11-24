module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!@axia-js|@babel/runtime/helpers/esm/)'],
};

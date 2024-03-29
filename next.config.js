/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "app")],
		prependData: `@import "variables.scss";`,
	},
};

module.exports = nextConfig;

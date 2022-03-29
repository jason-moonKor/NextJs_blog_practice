/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false
};

module.exports = nextConfig;

module.exports = {
	trailingSlash: false, //true이면 도메인의 마지막이 항상 슬래시(/)로 끝나도록 해줌
	env: {
		SANITY_PROJECT_ID: "l9my5uwn"
	}
};

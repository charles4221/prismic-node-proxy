const { client } = require('prismic-javascript');
const { apiEndpoint, accessToken } = require('./prismic-configuration');

const createClientOptions = (req = null, prismicAccessToken = null) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
	return {
		...reqOption,
		...accessTokenOption
	};
};

// Client method to query documents from the Prismic repo
const Client = (req = null) => client(apiEndpoint, createClientOptions(req, accessToken));

module.exports = {
	Client
};

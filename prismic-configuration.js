/**
 * Prismic API endpoint.
 * Determines which repository to query and fetch data from
 * Configure your site's access point here
 */
const apiEndpoint = 'https://YOUR_PRISMIC_REPO.cdn.prismic.io/api/v2';

/**
 * Access Token for private repositories.
 */
const accessToken = 'YOUR_PRISMIC_ACCESS_TOKEN';

/**
 * Link Resolution Rules.
 * Manages links to internal Prismic documents.
 * NOTE: This is just an example. Modify this based on your own Prismic document types.
 * @param {{ uid: String, type: String }} doc The Document object.
 */
const linkResolver = (doc) => {
	switch (doc.type) {
		case 'page':
			return `/${doc.uid}`;
		case 'project':
			return `/project/${doc.uid}`;
		default:
			return '/';
	}
};

module.exports = {
	apiEndpoint,
	accessToken,
	linkResolver
};

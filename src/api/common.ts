const domainName = process.env.REACT_APP_DOMAIN_NAME;
const contentHubId = process.env.REACT_APP_CONTENT_HUB_ID;

const hostUrl = `https://${domainName}`;
const apiUrl = `${hostUrl}/api/${contentHubId}`;

export const getHostUrl = () => hostUrl;
export const getApiUrl = () => apiUrl;

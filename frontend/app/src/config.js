const config = {
    CLOUDINARY_CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
    GRAPHQL_BASE_URL: process.env.REACT_APP_GRAPHQL_BASE_URL || '',
    IS_DEV: process.env.NODE_ENV === 'development',
    IS_DEBUG: true
};

export default config;

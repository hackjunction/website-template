import React from 'react';
import { Query } from 'react-apollo';
import config from '../../config';
import { MEDIAFIELD_BY_KEY } from '../../services/graphql/mediafieldQueries';

function getResultingImage(loading, error, data, imageKey, fallback = { url: '' }) {
    if (loading) return { url: '' };
    if (error) return fallback;
    if (!data.mediafields || data.mediafields.length === 0) return fallback;

    return data.mediafields[0].media;
}

const debug = ({ loading, error, data, imageKey, fallback }) => {
    if (loading) return;
    if (error) {
        console.log(`DEBUG: error getting mediafield with key ${imageKey}`);
    } else if (!data.mediafields || data.mediafields.length === 0) {
        console.log(`DEBUG: no content for mediafield with key ${imageKey}`);
    }
};

const MediaField = props => {
    const { imageKey, fallback } = props;
    return (
        <Query query={MEDIAFIELD_BY_KEY} variables={{ key: imageKey }}>
            {queryProps => {
                const { loading, error, data } = queryProps;
                const image = getResultingImage(loading, error, data, imageKey, fallback);
                if (config.IS_DEBUG) debug({ ...props, ...queryProps });
                return props.children(image);
            }}
        </Query>
    );
};

export default MediaField;

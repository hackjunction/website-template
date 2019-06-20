import gql from 'graphql-tag';

export const MEDIAFIELDS = gql`
    query {
        mediafields {
            key
            media
        }
    }
`;

export const MEDIAFIELD_BY_KEY = gql`
    query Mediafield($key: String!) {
        mediafields(where: { key: $key }) {
            key
            media {
                url
                public_id
            }
        }
    }
`;

import gql from 'graphql-tag';

export const TEXTFIELDS = gql`
    query {
        textfields {
            key
            content
        }
    }
`;

export const TEXTFIELD_BY_KEY = gql`
    query Textfield($key: String!) {
        textfields(where: { key: $key }) {
            key
            content
        }
    }
`;

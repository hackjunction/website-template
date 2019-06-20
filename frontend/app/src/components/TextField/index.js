import React, { Component } from 'react';
import { Query } from 'react-apollo';
import config from '../../config';
import { TEXTFIELD_BY_KEY } from '../../services/graphql/textfieldQueries';

function getResultingText(loading, error, data, textKey, fallback = '') {
    if (loading) return '';
    if (error) return fallback;
    if (!data.textfields || data.textfields.length === 0) return fallback;

    return data.textfields[0].content;
}

const debug = ({ loading, error, data, fallback, textKey }) => {
    if (loading) return;
    if (error) {
        console.log(`DEBUG: error getting textfield with key ${textKey}`);
    } else if (!data.textfields || data.textfields.length === 0) {
        console.log(`DEBUG: no content for textfield with key ${textKey}`);
    }
};

class TextField extends Component {
    render() {
        const { props } = this;
        const { textKey, fallback } = props;
        return (
            <Query query={TEXTFIELD_BY_KEY} variables={{ key: textKey }}>
                {queryProps => {
                    const { loading, error, data } = queryProps;
                    const text = getResultingText(loading, error, data, textKey, fallback);
                    if (config.IS_DEBUG) debug({ ...props, ...queryProps });
                    return typeof props.children === 'function' ? props.children(text) : text;
                }}
            </Query>
        );
    }
}

export default TextField;

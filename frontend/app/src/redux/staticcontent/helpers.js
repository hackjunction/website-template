export const getText = (textfields, isEditor) => key => {
    if (textfields.hasOwnProperty(key)) {
        return `${isEditor ? key : textfields[key].content}`;
    } else {
        return '';
    }
};

export const getMedia = (mediafields, isEditor) => key => {
    if (mediafields.hasOwnProperty(key)) {
        return mediafields[key].media;
    } else {
        return {
            url: isEditor ? 'https://via.placeholder.com/1920x1080.png?text=' + key : ''
        };
    }
};

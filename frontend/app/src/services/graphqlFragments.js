import gql from 'graphql-tag';

const UploadFileFields = gql`
	fragment UploadFileFields on UploadFile {
		url
	}
`;

const PageFields = gql`
	fragment PageFields on Page {
		Title
		Body
		URLPath
		HeaderImage {
			...UploadFileFields
		}
	}
	${UploadFileFields}
`;

const MediafieldFields = gql`
	fragment MediafieldFields on Mediafield {
		key
		media {
			...UploadFileFields
		}
	}
	${UploadFileFields}
`;

const StaticContentFields = gql`

`

const Fragments = {
	UploadFileFields,
	MediafieldFields,
	PageFields
}

export default Fragments

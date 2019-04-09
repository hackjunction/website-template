import { find } from 'lodash-es';

export const pageBySlug = (pages, slug) => {
	return find(pages, page => {
		console.log('PAGE', page);
		return page.URLPath === slug;
	})
}
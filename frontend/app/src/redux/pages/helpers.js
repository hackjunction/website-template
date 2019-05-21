import { find } from 'lodash-es';

export const pageBySlug = (pages, slug) => {
	return find(pages, page => {
		return page.URLPath === slug;
	})
}
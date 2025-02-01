import { errorPageConfig } from './ErrorPage.config';

export type ErrorPageProps = {
	/**
	 * Error code that will be used to fetch data on the error page.
	 *
	 */
	errorCode: keyof typeof errorPageConfig;
};

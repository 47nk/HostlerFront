import { ReactNode } from 'react';

export type ErrorBoundaryProps = {
	/**
	 * The UI to render when an error occurs. This is an optional prop.
	 * If not provided, nothing will be rendered in case of an error. and the error component will be removed from the UI
	 */
	fallback?: ReactNode;

	/**
	 * The children elements that will be wrapped by the `ErrorBoundary`.
	 */
	children: ReactNode;

	/**
	 * An optional function that can be used to hide or show the sidebar.
	 * This is called when an error occurs, allowing for UI adjustments.
	 *
	 * @param {boolean} sideBarState - The state of the sidebar (true to hide, false to show).
	 */
	setSideBarHidden?: (sideBarState: boolean) => void;
};

export type State = {
	/**
	 * A boolean flag that indicates whether an error has been caught.
	 * This is used to decide whether to display the fallback UI or the children.
	 */
	hasError: boolean;
};

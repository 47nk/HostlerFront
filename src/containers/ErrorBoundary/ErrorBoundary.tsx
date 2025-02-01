import React, { ErrorInfo } from 'react';

import { ErrorBoundaryProps, State } from './ErrorBoundary.types';

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	/**
	 * This method is called when an error is thrown in a child component.
	 *
	 * @returns {State} The new state object with `hasError` set to `true`.
	 */
	static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	/**
	 * This lifecycle method is called after an error has been thrown by a child component.
	 * It logs the error and the associated error information to the console for debugging purposes.
	 *
	 * @param {Error} error - The error object that was thrown by the child component.
	 * @param {ErrorInfo} errorInfo - Additional information about the error, such as the component stack.
	 */
	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('ErrorBoundary caught an error', error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { fallback, children, setSideBarHidden } = this.props;

		if (hasError) {
			if (fallback) {
				setSideBarHidden?.(true);
				return fallback;
			}
			return null;
		}

		return children;
	}
}

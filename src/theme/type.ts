import { CSSProperties } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles' {
	interface Mixins {
		scrollable: CSSProperties;
		flex: (
			flexDirection?: React.CSSProperties['flexDirection'],
			alignItems?: React.CSSProperties['alignItems'],
			justifyContent?: React.CSSProperties['justifyContent'],
			flexWrap?: React.CSSProperties['flexWrap'],
		) => CSSProperties;
	}
}

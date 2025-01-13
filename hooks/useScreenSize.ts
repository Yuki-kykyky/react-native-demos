import { useWindowDimensions } from "react-native";

export enum EScreenSize {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large'
}

export enum EOrientation {
	PORTRAIT = 'portrait',
	LANDSCAPE = 'landscape'
}

export const getBreakPoints = (type: EOrientation) => ({
	smallBreakPoint: type === EOrientation.PORTRAIT ? 375 : 800,
	largeBreakPoint: type === EOrientation.PORTRAIT ? 415 : 900
});

export const useScreenSize = () => {
	const {width, height} = useWindowDimensions();
	const orientation = width > height ? EOrientation.LANDSCAPE : EOrientation.PORTRAIT;
	const {smallBreakPoint, largeBreakPoint} = getBreakPoints(orientation);

	const screenSize = width <= smallBreakPoint
		? EScreenSize.SMALL
		: width <= largeBreakPoint
			? EScreenSize.MEDIUM
			: EScreenSize.LARGE;

	const isSmall = screenSize === EScreenSize.SMALL;
	const isMedium = screenSize === EScreenSize.MEDIUM;
	const isLarge = screenSize === EScreenSize.LARGE;

	const isPortrait = orientation === EOrientation.PORTRAIT;
	const isLandscape = orientation === EOrientation.LANDSCAPE;

	return {
		isLandscape,
		isPortrait,
		isSmall,
		isMedium,
		isLarge
	};
};
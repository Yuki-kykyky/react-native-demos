/*
 require does not work with dynamic paths, so we need to use the import statement
*/
export const getMealImage = (id:string) => {
	switch (id) {
		case 'c1':
			return require('@/assets/images/meals/c1.jpg');
		case 'c2':
			return require('@/assets/images/meals/c2.jpg');
		case 'c3':
			return require('@/assets/images/meals/c3.jpg');
		case 'c4':
			return require('@/assets/images/meals/c4.jpg');
		case 'c5':
			return require('@/assets/images/meals/c5.jpg');
		case 'c6':
			return require('@/assets/images/meals/c6.jpg');
		case 'c7':
			return require('@/assets/images/meals/c7.jpg');
		case 'c8':
			return require('@/assets/images/meals/c8.jpg');
		case 'c9':
			return require('@/assets/images/meals/c9.jpg');
		case 'c10':
			return require('@/assets/images/meals/c10.jpg');
		default:
			return require('@/assets/images/black-white.jpg');
	}
}
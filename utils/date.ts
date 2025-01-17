import Bill from "@/models/Bill";

export const getDate = (date: Date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

export const sortByDateDesc = (array: Bill[]) =>
	array.sort((a, b) => (b.date) - (a.date));

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export const transformDate = (data = '2025-08-05T08:00:00') => {
	const regExp =
		/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<time>[\d:]{5})/
	const { month, day, time } = regExp.exec(data).groups
	return `${day} ${months[parseInt(month - 1)]}, ${time}`
}

export const secondsToReadableTime = (seconds) => {
	const h = Math.floor(seconds / 60 / 60)
	const m = Math.floor(seconds / 60) - h * 60
	const s = seconds % 60
	const formatNumber = (v) => `0${Number.parseInt(v, 10)}`.slice(-2)
	const readableTime = [h, m, s].map(formatNumber).join(':')

	return readableTime
}

export const dataAtualFormatada = () => {
	let date = new Date()
	let options = {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}
	return date.toLocaleTimeString('pt-BR', options)
}

export const formatDate = (userDOB) => {
	const dob = new Date(userDOB)

	const monthNames = [
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

	const day = dob.getDate()
	const monthIndex = dob.getMonth()
	const year = dob.getFullYear()

	// return day + ' ' + monthNames[monthIndex] + ' ' + year;
	return `${day} ${monthNames[monthIndex]} ${year}`
}

export const convertTimestempToDate = (UNIX_timestamp) => {
	var a = new Date(UNIX_timestamp * 1000)
	var months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	var year = a.getFullYear()
	var month = months[a.getMonth()]
	var date = a.getDate()
	var hour = a.getHours()
	var min = a.getMinutes()
	var sec = a.getSeconds()
	var time =
		date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
	return time
}

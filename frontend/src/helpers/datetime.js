export const secondsToReadableTime = seconds => {
	const h = Math.floor(seconds / 60 / 60)
	const m = Math.floor(seconds / 60) - h * 60
	const s = seconds % 60
	const formatNumber = v => `0${Number.parseInt(v, 10)}`.slice(-2)
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

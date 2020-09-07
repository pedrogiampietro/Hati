export const secondsToReadableTime = seconds => {
	const h = Math.floor(seconds / 60 / 60)
	const m = Math.floor(seconds / 60) - h * 60
	const s = seconds % 60
	const formatNumber = v => `0${Number.parseInt(v, 10)}`.slice(-2)
	const readableTime = [h, m, s].map(formatNumber).join(':')

	return readableTime
}

export const dataAtualFormatada = () => {
	const data = new Date(),
		dia = data.getDate().toString(),
		diaF = dia.length === 1 ? '0' + dia : dia,
		mes = (data.getMonth() + 1).toString(), // +1 pois no getMonth Janeiro começa com zero.
		mesF = mes.length === 1 ? '0' + mes : mes,
		anoF = data.getFullYear()

	return diaF + '/' + mesF + '/' + anoF
}

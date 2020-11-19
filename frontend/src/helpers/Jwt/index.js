export const getTokenExpire = (token) => {
	if (!token) return 0

	// const tokenParts = token.split('.')
	// const header = tokenParts[0]
	// const payload = tokenParts[1]
	// const signature = tokenParts[2]

	try {
		const [, payload] = token.split('.')

		const data = JSON.parse(atob(payload))
		const expires = data ? data.exp : 0
		return expires
	} catch (error) {
		return 0
	}
}

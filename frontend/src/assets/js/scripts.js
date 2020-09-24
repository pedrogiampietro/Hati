export const changeMinify = () => {
	const body = document.querySelector('.mod-bg-1')
	body.classList.toggle('nav-function-minify')
}

export const changeMenuOnMobile = () => {
	document.querySelector('.mod-bg-1').classList.toggle('mobile-nav-on')
	document.querySelector('.fechaMenu').classList.remove('isClose')
	console.log('abri menu')
}

export const closeMenuOnMobile = () => {
	document.querySelector('.mod-bg-1').classList.toggle('mobile-nav-on')
	document.querySelector('.fechaMenu').classList.toggle('isClose')
	console.log('fechei menu')
}

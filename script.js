let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('blue')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

function detectMob() {
	const toMatch = [
		/Android/i,
		/webOS/i,
		/iPhone/i,
		/iPad/i,
		/iPod/i,
		/BlackBerry/i,
		/Windows Phone/i
	];

	return toMatch.some((toMatchItem) => {
		return navigator.userAgent.match(toMatchItem);
	});
}

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

var mainHeading = document.getElementsByClassName('main-heading')[0]
if (window.innerWidth < 850) {
	mainHeading.classList.remove('main-heading')
	mainHeading.classList.add('simple-heading')
} else {
	mainHeading.addEventListener('click', function () {
		mainHeading.classList.remove('main-heading')
		setTimeout(function () {
			mainHeading.classList.add('main-heading')
		}, 0)
	})
}

if (detectMob()) {
	document.getElementById('game-section').style.display = 'none'
	document.getElementById('form-section').classList.remove('s1')
	document.getElementById('form-section').classList.add('s2')
	document.getElementById('mobile-text').style.display = 'block'
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'default.css'
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
var isOpenGameSecion = false
var gameSection = document.getElementById('game-section')
var gameCloseDiv = document.getElementById('game-close-div')
if (gameCloseDiv) {
	gameSection.addEventListener('click', ((evt) => {
		if (!isOpenGameSecion) {
			gameSection.style.animation = '1s section-slide-open'
			let timeout = setTimeout(() => {
				gameSection.style.maxHeight = '50rem'
				gameSection.style.cursor = 'default'
				gameCloseDiv.style.cursor = 'pointer'
				gameCloseDiv.textContent = 'Click To Close!'
				isOpenGameSecion = true
				clearTimeout(timeout)
			}, 1000)
		}
	}))

	gameCloseDiv.addEventListener('click', ((evt) => {
		if (isOpenGameSecion) {
			gameSection.style.animation = '1s section-slide-close'
			let timeout = setTimeout(() => {
				gameSection.style.maxHeight = '2.5rem'
				gameSection.style.cursor = 'pointer'
				gameCloseDiv.textContent = 'Click To Play Snake!'
				isOpenGameSecion = false
				clearTimeout(timeout)
			}, 1000)
		}
	}))
}

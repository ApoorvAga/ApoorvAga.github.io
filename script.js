let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('blue')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

document.getElementsByClassName('main-heading')[0].addEventListener('click', function() {
	var ele = document.getElementsByClassName('main-heading')[0]
	ele.classList.remove('main-heading')
	setTimeout(function () {
		ele.classList.add('main-heading')
	}, 0)
})

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
var isOpenGameSecion = false
var gameSection = document.getElementsByClassName('game-section')[0]
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
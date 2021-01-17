enum KeyboardKeys {
  up = 38,
  down = 40,
  left = 37,
  right = 39,
  a = 65,
  b = 66,
}

let inputBuffer = []
const konamiCode = [KeyboardKeys.up, KeyboardKeys.up, KeyboardKeys.down, KeyboardKeys.down, KeyboardKeys.left, KeyboardKeys.right, KeyboardKeys.left, KeyboardKeys.right , KeyboardKeys.b, KeyboardKeys.a]

window.addEventListener('keydown', e => {
  // Add pressed key into buffer
  inputBuffer.push(e.keyCode)

  // Verify sequence
  const verifier = inputBuffer.every((val, index) => val === konamiCode[index])

  if (verifier && konamiCode.length === inputBuffer.length) {
    const el = document.querySelector('#encore-1')
    el.innerHTML = '<div class="aspect-w-16 aspect-h-9"><iframe src="https://www.youtube.com/embed/wpV-gGA4PSk?autoplay=1"></iframe></div>'
    el.classList.toggle('hidden')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    inputBuffer = []
  } else if (!verifier) {
    inputBuffer = []
  }
})

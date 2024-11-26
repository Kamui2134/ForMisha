'use strict'

const text = document.getElementById('animated-text')
const letters = text.textContent.split('')

// Clear the original text
text.textContent = ''

// Create spans for each letter
letters.forEach((letter, index) => {
	const span = document.createElement('span')
	span.textContent = letter
	span.className = 'letter'

	// Calculate a unique hue for each letter
	const hue = ((index * 360) / letters.length) % 360

	// Handle spaces differently
	if (letter === ' ') {
		span.style.display = 'inline-block' // Keeps space intact
		span.textContent = '\u00A0' // Non-breaking space
	} else {
		span.style.color = `hsl(${hue}, 70%, 60%)`
		span.style.animationDelay = `${index * 0.1}s`

		// Add continuous animations
		span.style.animation = `
      bounce 1s ease-in-out infinite ${index * 0.1}s,
      glow 2s ease-in-out infinite ${index * 0.2}s
    `
	}

	text.appendChild(span)
})

// Add color cycling
let colorShift = 0
setInterval(() => {
	letters.forEach((_, index) => {
		const letter = text.children[index]
		// Only update color for non-space letters
		if (letter.textContent.trim()) {
			const hue = ((index * 360) / letters.length + colorShift) % 360
			letter.style.color = `hsl(${hue}, 70%, 60%)`
		}
	})
	colorShift = (colorShift + 1) % 360
}, 50)

const textArea = document.querySelector('textarea')

textArea.addEventListener('input', autoResize, false)

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px'
}



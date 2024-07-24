const textArea = document.querySelector('textarea')

textArea.addEventListener('input', autoResize, false)

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px'
}

let phoneNumber = document.getElementById('phone-number')

function validatePhone(phone) {
    var phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  }
  
phoneNumber.addEventListener('input', function(e) {
    var phone = document.getElementById('phone-number').value;
    if (!validatePhone(phone)) {
        e.preventDefault();
        alert('Please enter a valid phone number in the format (123) 456-7890');
    }
});
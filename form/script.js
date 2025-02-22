const form = document.getElementById('registrationForm');
        
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    
    console.clear();
    console.log(formData);
    
    this.reset();
});
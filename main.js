const inputs = document.querySelectorAll('.controls input');


function setValue() {
    const suffix = this.dataset.sizing || '';
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    
    
}

inputs.forEach(input => {
    input.addEventListener('change', setValue);
});
inputs.forEach(input => {
    input.addEventListener('mousemove', setValue);
});

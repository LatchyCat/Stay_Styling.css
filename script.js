document.addEventListener('DOMContentLoaded', function(event) {
    // Your existing JavaScript code goes here, inside this function.
    document.querySelectorAll('.ripple-effect-button').forEach(button => {
      button.onclick = function(e) {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
      }
    });
});

// play audio and change class on keydown
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(key)
};


// remove class change after trigger
function removeTransition(e){
    if( e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


// add event listener for each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// trigger audio and class change
window.addEventListener('keydown', playSound);
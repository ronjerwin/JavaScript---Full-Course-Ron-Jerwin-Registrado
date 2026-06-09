const checkClass = document.querySelector('.js-button');
console.log(checkClass.classList.contains('js-button'));

 const isGameToggled = document.querySelector('.game-toggled');
 const isMusicToggled = document.querySelector('.music-toggled');
 const isTechToggled = document.querySelector('.tech-toggled');

 

 function handleGameToggle() {
  if(isGameToggled.classList.contains('game-toggled')) {
    isGameToggled.classList.remove('game-toggled');
    return;
  } else {
    isGameToggled.classList.add('game-toggled');
    return;
  }
 }

 function handleMusicToggle() {
  if(isMusicToggled.classList.contains('music-toggled')) {
    isMusicToggled.classList.remove('music-toggled');
    return;
  } else {
    isMusicToggled.classList.add('music-toggled');
    return;
  }
 }

 function handleTechToggle() {
  if(isTechToggled.classList.contains('tech-toggled')) {
    isTechToggled.classList.remove('tech-toggled');
    return;
  } else {
    isTechToggled.classList.add('tech-toggled');
    return;
  }
 }


 function handleToggle(toggledEvent) {
  const toggleEvent = document.querySelector(toggledEvent);

  if(!toggleEvent.classList.contains('is-toggled')) {
    turnOffPrevious();
    toggleEvent.classList.add('is-toggled');
  } else {
    toggleEvent.classList.remove('is-toggled');
  }
 }

 function turnOffPrevious() {
  const previousBtn = document.querySelector('.is-toggled');

  if(previousBtn) {
    previousBtn.classList.remove('is-toggled');
  } 
 }



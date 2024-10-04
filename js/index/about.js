function adjustWaveWidth() {
    const subtitle = document.querySelector('#about-bottom-left-subtitle');
    const wave = document.querySelector('#about-bottom-left-wave');

    const subtitleWidth = subtitle.offsetWidth;
    wave.style.width = `${subtitleWidth}px`;
}

window.addEventListener('load', adjustWaveWidth);
window.addEventListener('resize', adjustWaveWidth);
window.addEventListener('orientationchange', adjustWaveWidth);
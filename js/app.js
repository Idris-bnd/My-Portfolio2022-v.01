window.addEventListener('load', () => {

    theme.init()
    myAnimation.init()
    allProject.init()
    
    function stopScrolling(touchEvent) {
        touchEvent.preventDefault();
    }

    document.addEventListener('touchstart', stopScrolling, false);
    document.addEventListener('touchmove', stopScrolling, false);

})
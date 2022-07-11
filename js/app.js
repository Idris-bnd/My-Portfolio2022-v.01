// DARK THEME
const myBody = document.querySelector('body');
const DarkThemeBoxP = document.querySelector('.darkThemeBox--p')
const darkThemeBoxButton = document.getElementById('darkThemeBox--button');

darkThemeBoxButton.addEventListener('click', () => {

    darkThemeBoxButton.classList.toggle('darkThemeButton--Active')
    myBody.classList.toggle('darkTheme')

    if (darkThemeBoxButton.classList.contains('darkThemeButton--Active')) {
        DarkThemeBoxP.textContent = 'Too dark ?'
    }else{
        DarkThemeBoxP.textContent = 'Too shiny ?'
    }
})
// DARK THEME


// ANIMATION
const myLetter = document.querySelectorAll('.topApp--TitleLetter');

for (const letter of myLetter)
    letter.addEventListener('mouseenter', (e) => {
        mySingleLetter = e.currentTarget

        if (mySingleLetter.classList.contains('topApp--TitleLetter')){
        mySingleLetter.className = 'topApp--TitleLetter opacity'
        
        setTimeout(() => {
            letter.className = 'topApp--TitleLetter brown'
        },1000)

        setTimeout(() => {
            letter.className = 'topApp--TitleLetter white'
        },5000)

        }

    })
// ANIMATION
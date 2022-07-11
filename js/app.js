// DARK THEME
const myBody = document.querySelector('body');
const DarkThemeBoxP = document.querySelector('.darkThemeBox--p')
const darkThemeBoxColor = document.getElementById('darkThemeBox--Color');
const darkThemeBox = document.getElementById('darkThemeBox');

window.addEventListener('load', () => {

    let classOfMyBody = localStorage.getItem('theme');
    myBody.className = classOfMyBody;

    let textOfMyThemeBox = localStorage.getItem('text')
    DarkThemeBoxP.textContent = textOfMyThemeBox
})

darkThemeBox.addEventListener('click', () => {

    myBody.style.transition = "background-color 0.4s, color 0.4s"
    

    if (myBody.className === "") {
        myBody.className ='darkTheme';
        DarkThemeBoxP.textContent = 'Too dark ?'

        localStorage.setItem('theme', myBody.className);
        localStorage.setItem('text', 'Too dark ?');
    }else{
        myBody.className = "";
        DarkThemeBoxP.textContent = 'Too shiny ?'

        localStorage.setItem('theme', '');
        localStorage.setItem('text', 'Too shiny ?');
    }

    console.log(myBody);



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
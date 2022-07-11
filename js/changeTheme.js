const myBody = document.querySelector('body');
const DarkThemeBoxP = document.querySelector('.darkThemeBox--p')
const darkThemeBoxColor = document.getElementById('darkThemeBox--Color');
const darkThemeBox = document.getElementById('darkThemeBox');

const theme = {

    init: function(){

        let classOfMyBody = localStorage.getItem('theme');
        myBody.className = classOfMyBody;
    
        let textOfMyThemeBox = localStorage.getItem('text')
        DarkThemeBoxP.textContent = textOfMyThemeBox


        darkThemeBox.addEventListener('click', theme.changeTheme)
    },

    changeTheme: function(){

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

    },
}
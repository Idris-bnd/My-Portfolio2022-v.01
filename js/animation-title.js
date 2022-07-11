const myLetter = document.querySelectorAll('.topApp--TitleLetter');

const myAnimation = {


    init: function () {

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
    }

}
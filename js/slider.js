(funcion(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changeposition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__boby--show').dataset.id;
        value = Numer(currentTestimony);
        value+= add;
        
        slider[Numer(currentTestimony)-1].classList.remove('currentTestimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');
    }

})();

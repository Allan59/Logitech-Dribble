const cards = document.querySelectorAll('.cards')
const mainPhoto = document.querySelector('#selectimg')


cards.forEach((el) => {
    el.addEventListener('click', () => {
        const lastimg = document.querySelectorAll('.active')
        if(lastimg){
            lastimg[0].classList.remove('active')
        }
    el.classList.add('active')

    const selectimg = document.querySelector('.active').getElementsByTagName('img');
    
    switch(selectimg[0].getAttribute("src")){
        case './assets/mx-keys-mini-top-black-us 1.png' :
            console.log(mainPhoto);
            mainPhoto.src = "./assets/mx-keys-mini-top-black-us 1 grand.png"
        break

        case './assets/mx-keys-mini-top-pale-gray-us.png' :
        console.log(mainPhoto);
        mainPhoto.src = "./assets/mx-keys-mini-top-pale-gray-us grand.png"
        break;

        case './assets/mx-keys-mini-top-rose-us.png' :
        console.log(mainPhoto);
        mainPhoto.src = "./assets/mx-keys-mini-top-rose-us grand.png"
        break;
    }
    })
})
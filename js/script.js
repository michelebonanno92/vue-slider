// collegamento al framework di Vue attraverso il Destructuring 
const { createApp } = Vue

// inserito l'array di oggetti in vue tramite data (nell'oggetto restituito da data )
    createApp({
    data() {
        return {
            slides : [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
            ],
            indexCurrent: 0,
        };
    },
        // creato in indice corrente "indexCurrent" cosi da scorrere dinamicamente l'array dell'oggetto "slides" e usato come indice dell' array stesso nell'HTML 

        methods: {

            prevImg() {
                // se indice maggiore di 0 decrementa
                if (this.indexCurrent > 0) {
                    this.indexCurrent--;
                }else{
                    // altrimenti se uguale a 0 vai all'ultimo indice dell'array di oggetti 
                    this.indexCurrent = this.slides.length - 1;
                }
            }, 
       
            nextImg() {
         // se indice minore della lunghezza array meno 1 aumenta indice
                if (this.indexCurrent < this.slides.length - 1 ) {
                    this.indexCurrent++;
                }else{
         // altrimenti se uguale all'ulimo indice vai al primo indice dell'array
                    this.indexCurrent = 0;
                }
            },

            changeActiveSlide(newIndex){
               this.indexCurrent = newIndex
            }

            
        /*
            ALTRA SOLUZIONE

            prevImg() {
                this.activeImg--;
                if (this.activeImg < 0) {
                    this.activeImg = this.slides.length - 1;
                }
            }, 
    
            nextImg() {
                this.activeImg++;
                if (this.activeImg == this.slides.length) {
                    this.activeImg = 0;
                }
            },
            */
    
    
           
            }
        }).mount('#app')

    


(() => {
    const button = {
      init() {
        // console.log('1. Application initialized');
        this.cacheElements();
        this.addEventListeners()
      },
      cacheElements() {
        // console.log('2. Cache elements');
        // Get elements via querySelector with selectors
        // Get button
        this.$button = document.querySelector('.GTT');
        // Get root element of webpage
        this.$rootElement = document.documentElement;
      },
  
      addEventListeners() {
        // console.log('3.create button-functionality');
        //add event listener on scroll
        document.addEventListener('scroll', (event) => {
          //return root element of webpage
          const scrollAlong = document.documentElement;
  
          // if user scrolls down far enough add visible-class(no . before class here) (distance in px)
          if(scrollAlong.scrollTop > 500 ) {
            this.$button.classList.add('GTT-ON');
          }
          // remove visible-class at the top of the page
          else{ 
            this.$button.classList.remove('GTT-ON');
          }
        })
        //add event listener to button on click
        this.$button.addEventListener('click', (event) => {
          //scroll to top when clicked
          document.documentElement.scrollTop = 0;
        });
      },
    };
  
    button.init();
  })();
class Slider {
  constructor(id) {
    this.sliderElement = document.getElementById(id);
    this.currentSlide = 0;
    this.slides = this.sliderElement.children;
    this.slidersLength = this.slides.length;

    if (this.slidersLength !== 0) {
      this.addControls();
      this.addDots();
      this.addActiveClassForSlides();
      this.addActiveClassForDots();
      this.addEventsSwipeForSlider();
    }
  }

  addDots() {
    const divForDots = document.createElement('div');
    divForDots.className = 'dots';
    this.sliderElement.append(divForDots);
    for (let i = 0; i < this.slidersLength; i += 1) {
      const dot = document.createElement('button');
      dot.className = 'dot';
      divForDots.append(dot);
    }
    this.dots = divForDots.children;
    this.addEventsForDots();
  }

  addControls() {
    this.nextImg = document.createElement('button');
    this.prevImg = document.createElement('button');
    this.nextImg.className = 'go_next';
    this.prevImg.className = 'go_back';
    this.prevImg.innerHTML = '&#706';
    this.nextImg.innerHTML = '&#707';
    this.sliderElement.append(this.prevImg);
    this.sliderElement.append(this.nextImg);
    this.addEventsForControls();
  }

  goBack() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slidersLength - 1;
    } else {
      this.currentSlide -= 1;
    }
    this.addActiveClassForSlides();
    this.addActiveClassForDots();
  }

  goNext() {
    if (this.currentSlide === this.slidersLength - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
    this.addActiveClassForSlides();
    this.addActiveClassForDots();
  }

  goTo(number) {
    this.currentSlide = number;
    this.addActiveClassForSlides();
    this.addActiveClassForDots();
  }

  addEventsForDots() {
    for (let i = 0; i < this.slidersLength; i += 1) {
      this.dots[i].addEventListener('click', this.goTo.bind(this, i));
    }
  }

  addEventsForControls() {
    this.nextImg.addEventListener('click', this.goNext.bind(this));
    this.prevImg.addEventListener('click', this.goBack.bind(this));
  }

  addActiveClassForDots() {
    for (let i = 0; i < this.slidersLength; i += 1) {
      this.dots[i].classList.remove('active');
    }
    this.dots[this.currentSlide].classList.add('active');
  }


  addActiveClassForSlides() {
    for (let i = 0; i < this.slidersLength; i += 1) {
      this.slides[i].classList.remove('active');
    }
    this.slides[this.currentSlide].classList.add('active');
  }

  addEventsSwipeForSlider() {
    let touchstartX = 0;
    let touchendX = 0;
    this.sliderElement.addEventListener('touchstart', (event) => {
      touchstartX = event.screenX;
    }, false);

    this.sliderElement.addEventListener('touchend', (event) => {
      touchendX = event.screenX;
      if (touchstartX > 150 && touchendX <= touchstartX) {
        this.goNext();
      }
      if (touchstartX > 150 && touchendX >= touchstartX) {
        this.goBack();
      }
    }, false);
  }
}

new Slider('slider');

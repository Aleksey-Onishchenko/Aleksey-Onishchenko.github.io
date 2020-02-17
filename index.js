class Slider {
  constructor(id) {
    // this.count = 0;
    // this.goBack = this.goBack.bind(this);
    // this.goNext = this.goNext.bind(this);

    this.sliderElement = document.getElementById(id);
    // this.slidesElements = document.querySelectorAll('#slider img');
    // this.dots = document.getElementsByClassName('dot');
  
    this.currentSlide = 0;
    this.slidersLength = 3;
    this.slides = this.sliderElement.children;

    this.addControls();
    this.addDots();
    this.addActiveClassForSlides();
    this.addActiveClassForDots();
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
}

new Slider('slider');









//   addClassToElem() {
//     for (let i = 0; i < this.slidesElements.length; i += 1) {
//       this.slidesElements[i].classList.add('img');
//       this.slidesElements[i].classList.add('img_opacity');
//     }
//     this.slidesElements[this.count].classList.remove('img_opacity');
//   }

//   goBack() {
//     if (this.count - 1 === -1) {
//       this.count = this.slidesElements.length - 1;
//     } else {
//       this.count -= 1;
//     }
//     this.addClassToElem();
//   }

//   goNext() {
//     if (this.count + 1 === this.slidesElements.length) {
//       this.count = 0;
//     } else {
//       this.count += 1;
//     }
//     this.addClassToElem();
//   }

//   addControls() {
//     const nextImg = document.createElement('button');
//     const prevImg = document.createElement('button');
//     nextImg.className = 'go_next';
//     prevImg.className = 'go_back';
//     nextImg.innerHTML = '&#707';
//     prevImg.innerHTML = '&#706';
//     this.sliderElement.append(prevImg);
//     this.sliderElement.append(nextImg);
//     nextImg.addEventListener('click', this.goNext);
//     prevImg.addEventListener('click', this.goBack);
//   }

//   addDots() {
//     const divForDots = document.createElement('div');
//     for (let i = 0; i < this.slidesElements.length; i += 1) {
//       this.dot = document.createElement('button');
//       this.dot.className = 'dot';
//       divForDots.appendChild(this.dot);
//     }
//     divForDots.className = 'dots';
//     document.body.append(divForDots);
//   }

//   addActiveClassForDot() {
//     this.dots = document.getElementsByClassName('dot');
//     for (let i = 0; i < this.dots.length; i += 1) {
//       this.dots[i].addEventListener('click', Slider.activeClass);
//       this.dots[i].addEventListener('click', this.goTo(this.count));
//     }
//   }

//   static activeClass(e) {
//     console.log(this.count);
//     this.dots = document.getElementsByClassName('dot');
//     for (let i = 0; i < this.dots.length; i += 1) {
//       this.dots[i].classList.remove('active');
//     }
//     // for (let i = 0; i < this.slidesElements.length; i += 1) {
//     //   this.slidesElements[i].classList.remove('active');
//     // }
//     e.target.classList.add('active');
//   }


//   goTo(number) {
//     this.count = number;
//     for (let i = 0; i < this.slidesElements && i < this.dots.length; i += 1) {
//       this.dots[number] = this.slidesElements[number];
//     }
  
//   }

// }



// new Slider('slider');































// addClassToElem() {
//   for (let i = 0; i < this.slidesElements.length; i += 1) {
//     this.slidesElements[i].classList.add('img');
//     this.slidesElements[i].classList.add('img_opacity');
//   }
//   this.slidesElements[this.count].classList.remove('img_opacity');
// }

// goBack() {
//   if (this.count - 1 === -1) {
//     this.count = this.slidesElements.length - 1;
//   } else {
//     this.count -= 1;
//   }
//   this.addClassToElem();
// }

// goNext() {
//   if (this.count + 1 === this.slidesElements.length) {
//     this.count = 0;
//   } else {
//     this.count += 1;
//   }
//   this.addClassToElem();
// }

// addControls() {
//   const nextImg = document.createElement('button');
//   const prevImg = document.createElement('button');
//   nextImg.className = 'go_next';
//   prevImg.className = 'go_back';
//   nextImg.innerHTML = '&#707';
//   prevImg.innerHTML = '&#706';
//   this.sliderElement.append(prevImg);
//   this.sliderElement.append(nextImg);
//   nextImg.addEventListener('click', this.goNext);
//   prevImg.addEventListener('click', this.goBack);
// }

// addDots() {
//   const divForDots = document.createElement('div');
//   for (let i = 0; i < this.slidesElements.length; i += 1) {
//     this.dot = document.createElement('button');
//     this.dot.className = 'dot';
//     divForDots.appendChild(this.dot);
//   }
//   divForDots.className = 'dots';
//   document.body.append(divForDots);
// }

// addActiveClassForDot() {
//   this.dots = document.getElementsByClassName('dot');
//   for (let i = 0; i < this.dots.length; i += 1) {
//     this.dots[i].addEventListener('click', Slider.activeClass);
//     this.dots[i].addEventListener('click', this.goTo(this.count));
//   }
// }

// static activeClass(e) {
//   console.log(this.count);
//   this.dots = document.getElementsByClassName('dot');
//   for (let i = 0; i < this.dots.length; i += 1) {
//     this.dots[i].classList.remove('active');
//   }
//   // for (let i = 0; i < this.slidesElements.length; i += 1) {
//   //   this.slidesElements[i].classList.remove('active');
//   // }
//   e.target.classList.add('active');
// }


// goTo(number) {
//   this.count = number;
//   for (let i = 0; i < this.slidesElements && i < this.dots.length; i += 1) {
//     this.dots[number] = this.slidesElements[number];
//   }

// }

// }



// new Slider('slider');

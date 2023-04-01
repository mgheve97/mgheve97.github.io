window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 70,
      sizeVariations: 10,
      speed: 1,
      color: '#A91B0D',
      minDistance: 130,
      connectParticles: true, 
      responsive: [
        {
          breakpoint:  1000,
          options: {
            maxParticles: 30,
          }
        },
        {
          breakpoint:  768,
          options: {
            maxParticles: 40,
            minDistance: 100,
          }
        },
        {
          breakpoint:  400,
          options: {
            maxParticles: 20,
          }
        }
      ]
    });
  };

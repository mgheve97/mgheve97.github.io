window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 70,
      sizeVariations: 3,
      speed: 1,
      color: '#75C2FD',
      minDistance: 120,
      connectParticles: true, 
      responsive: [
        {
          breakpoint:  1000,
          options: {
            maxParticles: 40,
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

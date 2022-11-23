const tl = gsap.timeline({defaults: {duration: 2}})

tl.fromTo('.front-text', {x:-300, opacity: 0}, {x:0, opacity: 1});

tl.fromTo('.navigation', {y:-100, opacity: 0}, {y:0, opacity: 1},'<');


moveParticles()

function item_over(elementIds) {
  elementIds.forEach((id) => {
    let element = document.getElementById(id);
    if (element) {
      element.style.opacity = '1';
    }
  });

  setTimeout(() => {
    elementIds.forEach((id) => {
      let element = document.getElementById(id);
      if (element) {
        element.style.opacity = '1';
      }
    });
  }, 50);
}
function item_out(elementIds) {
  elementIds.forEach((id) => {
    let element = document.getElementById(id);
    if (element) {
      element.style.opacity = '0';
    }
  });

  setTimeout(() => {
    elementIds.forEach((id) => {
      let element = document.getElementById(id);
      if (element) {
        element.style.opacity = '0';
      }
    });
  }, 50);
}

window.addEventListener("scroll", function() {
  let targetDiv = document.getElementById('wrapp');
  let el_2 = document.getElementById('wrapp');
  let el_3 = document.getElementById('mouse_wrapp');
  var targetDivPosition = targetDiv.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  setTimeout(() => {
    el_3.style.opacity = '0'
  },3600)
  setTimeout(() => {
    if (targetDivPosition < windowHeight) {
      el_2.style.filter = 'none';
      el_3.style.display = 'none'
  }
  },4000)
})

document.addEventListener("DOMContentLoaded", function(event) {
  function getScreenSize() {
      var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
      var elem = document.getElementById('map_mobile');
      var elem_2 = document.getElementById('map');
      if (screenWidth >= 700) {
          elem.style.display = 'none';
          elem_2.style.display = 'grid';
      } else {
          elem.style.display = 'grid';
          elem_2.style.display = 'none';
      }
  }

  getScreenSize();

  window.addEventListener('resize', function() {
      getScreenSize();
  });
});


function moveParticles() {
  const wrapper = document.getElementById('wrapp'); 
  const wrapperRect = wrapper.getBoundingClientRect(); 

  const container = document.getElementById('particles__wrapp'); 
  const particles = container.children;

  for (const particle of particles) {
    const maxX = wrapperRect.width - particle.offsetWidth; 
    const maxY = wrapperRect.height - particle.offsetHeight; 
    const newX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX)); 
    const newY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));
    particle.style.transform = `translate(${newX}px, ${newY}px)`;
  }
}

setInterval(moveParticles, 20000); 

const cursor = document.getElementById('light__circle');
const map = document.getElementById('body');
map.addEventListener('mousemove', e => {
  cursor.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 9%, #00000080 15%)`;
});


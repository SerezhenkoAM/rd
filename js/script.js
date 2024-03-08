function item_over(elementIds) {
  elementIds.forEach((id) => {
    let element = document.getElementById(id);
    console.log(id)
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
      console.log(screenWidth);

      if (screenWidth >= 700) {
          elem.style.display = 'none';
          elem_2.style.display = 'block';
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
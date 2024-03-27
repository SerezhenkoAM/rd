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


function moveParticles() {
  const wrapper = document.getElementById('wrapp'); // Находим контейнер-ограничитель по классу
  const wrapperRect = wrapper.getBoundingClientRect(); // Получаем размеры и позицию контейнера-ограничителя

  const container = document.getElementById('particles__wrapp'); // Находим контейнер частиц по id
  const particles = container.children;

  for (const particle of particles) {
    const maxX = wrapperRect.width - particle.offsetWidth; // Ограничиваем максимальное значение по оси X
    const maxY = wrapperRect.height - particle.offsetHeight; // Ограничиваем максимальное значение по оси Y
    const newX = Math.max(0, Math.min(Math.floor(Math.random() * maxX), maxX)); // Ограничиваем координаты, чтобы частицы не выходили за пределы контейнера
    const newY = Math.max(0, Math.min(Math.floor(Math.random() * maxY), maxY));
    particle.style.transform = `translate(${newX}px, ${newY}px)`;
  }
}

moveParticles()

setInterval(moveParticles, 20000); 

const cursor = document.getElementById('light__circle');
const map = document.getElementById('body');

map.addEventListener('mousemove', e => {
  const rect = map.getBoundingClientRect(); // Получаем размеры и позицию блока wrapp относительно viewport
  const xRelativeToMap = e.clientX - rect.left; // Рассчитываем положение курсора по горизонтали относительно блока wrapp
  const yRelativeToMap = e.clientY - rect.top; // Рассчитываем положение курсора по вертикали относительно блока wrapp
  const offsetX = xRelativeToMap; // Рассчитываем смещение курсора относительно центра блока wrapp по горизонтали
  const offsetY = yRelativeToMap; // Рассчитываем смещение курсора относительно центра блока wrapp по вертикали
  console.log(rect);
  cursor.style.background = `radial-gradient(circle at ${offsetX}px ${offsetY}px, transparent 20%, #00000080 15%)`;
});


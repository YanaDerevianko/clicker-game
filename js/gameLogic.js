// get username from local storage
const userNameElement = document.getElementById('userName');
const userName = localStorage.getItem('name');
userNameElement.textContent = userName;
// пошук елементів на сторінці
const userLevelEl = document.getElementById('level');
const levelInPopup = document.getElementById('lev');
const userPointsEl = document.getElementById('userPoints');
const finalGreeting = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const finalPoints = document.getElementById("finalPoints");
const hero = document.getElementById('hero');


// початкові  дані
let userLevel = 1;
let userClick = 0;
const numberOfEnemyLives = 17;

//  функція  для  обробки кліку
function handleClick() {
  userClick++;
    userPointsEl.textContent = userClick;
    checkClickCount();
}

// функція  для  показу фінального привітання
function displayModal() {
  finalGreeting.style.display = "block";
}

 // Додаємо обробник події для кожного кліку по сторінці
 hero.addEventListener('click', handleClick);

// Функція, яка перевіряє кількість кліків та показує вікно
function checkClickCount() {
    if (userClick%numberOfEnemyLives === 0 && userLevel <=5) {
      const overlay = document.querySelector('.overlay');

      overlay.style.display = 'block';
        hero.removeEventListener('click', handleClick);
  
      // Закриття вікна через 2 секунди
      setTimeout(function() {
        overlay.style.display = 'none';
        hero.addEventListener('click', handleClick);    

         // юзер досяг 5 рівня, гра закінчена
      if(userClick === numberOfEnemyLives*5) {
        finalPoints.textContent = userClick;
        finalGreeting.style.display = "block";
        hero.removeEventListener('click', handleClick);
        closeBtn.onclick = function() {
          finalGreeting.style.display = "none";
        }
      }
      }, 2000);
       if(userClick < numberOfEnemyLives*5) {
        userLevel++;
       }

      userLevelEl.textContent = userLevel;
      levelInPopup.textContent = userLevel;
      document.body.style.backgroundImage = `url('./images/bg${userLevel}.jpg')`;
      hero.src=`./images/hero${userLevel}.png`;
    }
  }

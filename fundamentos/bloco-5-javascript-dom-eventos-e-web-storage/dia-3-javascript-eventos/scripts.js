function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// Exercicio 01
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');
  for (let index of dezDaysList) {
    let dayItem = document.createElement('li');
    if (index === 24 || index === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = index;
      getDaysList.appendChild(dayItem);
    } else if (index === 4 || index === 11 || index === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = index;
      getDaysList.appendChild(dayItem);
    } else if (index === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = index;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = index;
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

// Exercicio 02
function createButton(string) {
    let buttonFather = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.className = 'btn-holiday';
    button.innerHTML = string;
    buttonFather.appendChild(button);
}
createButton('Feriados');

// Exercicios 03
function showHoliday() {
    let dayHoliday = document.querySelectorAll('.holiday');
    let buttonHoliday = document.querySelector('.btn-holiday');
    let defaultColor = 'rgb(238,238,238)';
    let newColor = 'yellow';
  
    buttonHoliday.addEventListener('click', function() {
      for (let index of dayHoliday) {
        if (index.style.backgroundColor === newColor) {
            index.style.backgroundColor = defaultColor;
        } else {
            index.style.backgroundColor = newColor;
        }
      }
    })
};
showHoliday();

// Exercicio 04
function createButtonFriday(string) {
    let buttonFather = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    buttonFriday.className = 'btn-friday';
    buttonFriday.innerHTML = string;
    buttonFather.appendChild(buttonFriday);
}
createButtonFriday('Sexta-feira');

// Exercicio 05
function showFriday() {
    let dezFridays = [ 4, 11, 18, 25 ];
    let dayFriday = document.querySelectorAll('.friday');
    let buttonFriday = document.querySelector('.btn-friday');
    let newText = 'SEXTOU';
  
    buttonFriday.addEventListener('click', function() {
      for (let index in dayFriday) {
        if (dayFriday[index].innerHTML === newText) {
            dayFriday[index].innerHTML = dezFridays[index];
        } else {
            dayFriday[index].innerHTML = newText;
        }
      }
    })
};
showFriday();

// Exercicios 06
function mouseSelection() {
    let zoomDay = document.querySelector('#days');
    zoomDay.addEventListener('mouseover', zoomIn);
    zoomDay.addEventListener('mouseout', zoomOut);
}

function zoomIn(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '400';
}

function zoomOut(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

}
mouseSelection();

// Exercicio 07
function addTask(string) {
    let taskTable = document.querySelector('.my-tasks');
    let task = document.createElement('span');
    task.innerHTML = string;
    taskTable.appendChild(task);
}
addTask('Trabalho voluntário');
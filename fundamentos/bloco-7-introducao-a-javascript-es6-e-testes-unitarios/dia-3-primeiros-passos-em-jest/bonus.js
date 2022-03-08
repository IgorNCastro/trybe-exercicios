// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const verifyEmployee = (id, detail) => {
  let idVerify = id;
  let detailVerify = detail;
  let arrayOfIds = [];
  let arrayOfKeys = Object.keys(professionalBoard[0]);
  
  for (index = 0; index < professionalBoard.length; index += 1) {
    let temp = Object.values(professionalBoard[index]);
    arrayOfIds.push(temp[0]);
  }
  if (arrayOfIds.includes(idVerify) === false) {
    throw new Error('ID não identificada');
  } else if (arrayOfKeys.includes(detailVerify) === false) {
    throw new Error('Informação indisponível');
  }
};


const searchEmployee = (id, detail) => {
  try {
    verifyEmployee(id, detail);
    let idSearch = id;
    let detailSearch = detail;
    for (index = 0; index < professionalBoard.length; index += 1) {
      if (professionalBoard[index].id === idSearch) {
        let arrayOfBoard = Object.keys(professionalBoard[index]);
        let arrayOfValues = Object.values(professionalBoard[index]);
        let position = arrayOfBoard.indexOf(detailSearch);
        let employee = {id: idSearch, info: arrayOfValues[position]};
        console.log(employee);
        return employee;
      }
    }
  } catch (error) {
    throw error.message;
  }
};

searchEmployee('5569-4', 'specialities');

module.exports = searchEmployee;
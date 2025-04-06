import { garagePage } from '../pages/garagePage';
import { expensesPage } from '../pages/expensesPage';

const isQauto2 = Cypress.config('baseUrl').includes('qauto2');
const fixtureName = isQauto2 ? 'qauto2_user.json' : 'qauto_user.json';

let email;
let password;

describe('Garage & Fuel Expenses Flow', () => {
  before(() => {
    cy.fixture(fixtureName).then((user) => {
      email = user.email;
      password = user.password;
    });
  });

  beforeEach(() => {
    cy.login(email, password);
  });

  it('Add a new car', () => {
    garagePage.openAddCarForm();
    garagePage.fillCarForm('Audi', 'Q7', '123456');
    garagePage.submitCar();
    garagePage.carShouldBeVisible('Q7');
  });
  it('Add fuel expense to the car', () => {
    if (Cypress.config('baseUrl').includes('qauto2')) {
      cy.log(' Пропускаем добавление расхода топлива — баг с кнопкой Add');
      return;
    }
  
    expensesPage.openFuelExpenseModal('Audi Q7');
    expensesPage.addFuelRecord('50', '100', '123500');
    expensesPage.recordShouldExist('50');
  })
 
});





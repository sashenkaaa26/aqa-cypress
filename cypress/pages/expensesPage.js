

export const expensesPage = {
  openFuelExpenseModal(model = 'Audi Q7') {
    if (!Cypress.config('baseUrl').includes('qauto2')) {
      cy.contains(model, { timeout: 10000 }).should('exist');
    } else {
      cy.log('Пропускаем проверку модели машины для qauto2');
    }
  
   
    cy.get('.car_add-expense', { timeout: 10000 })
      .should('contain.text', 'Add fuel expense')
      .scrollIntoView()
      .click();
  
    cy.get('#addExpenseLiters', { timeout: 10000 }).should('be.visible');
  },
  
  addFuelRecord(liters, price, mileage) {
    cy.get('#addExpenseLiters').clear().type(liters);
    cy.get('#addExpenseTotalCost').clear().type(price);
    cy.get('#addExpenseMileage').clear().type(mileage);

    cy.get('ngb-modal-window')
      .find('button.btn.btn-primary')
      .contains('Add')
      .should('not.be.disabled')
      .click();

    cy.get('ngb-modal-window', { timeout: 10000 }).should('not.exist');
  },

  recordShouldExist(liters) {
    if (!Cypress.config('baseUrl').includes('qauto2')) {
      cy.contains(liters).should('exist');
    } else {
      cy.log('Пропускаем проверку записи о заправке в qauto2');
    }
  }
};








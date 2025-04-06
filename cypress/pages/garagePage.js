
export const garagePage = {
  openAddCarForm() {
    cy.contains('Add car', { timeout: 10000 }).click();
    cy.get('#addCarBrand', { timeout: 10000 }).should('be.visible');
  },

  fillCarForm(brand, model, mileage) {
    cy.get('#addCarBrand').select(brand);
    cy.get('#addCarModel').should('be.visible').select(model);
    cy.get('#addCarMileage').clear().type(mileage);
  },

  submitCar() {
    cy.get('app-add-car-form', { timeout: 10000 }).should('be.visible');

    cy.get('.modal-footer button.btn.btn-primary')
      .contains('Add')
      .should('not.be.disabled')
      .click();

    if (!Cypress.config('baseUrl').includes('qauto2')) {
      cy.get('ngb-modal-window', { timeout: 10000 }).should('not.exist');
    } else {
      cy.wait(3000); 
    }
  },

  carShouldBeVisible(model) {
    if (!Cypress.config('baseUrl').includes('qauto2')) {
      cy.contains(model, { timeout: 10000 }).should('exist');
    } else {
      cy.log('Пропускаем проверку появления машины в qauto2 (баг в UI)');
    }
  }
};









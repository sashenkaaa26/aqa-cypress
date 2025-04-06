// ***********************************************
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/', {
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });

  cy.get('button.btn.btn-outline-white.header_signin').click();
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password, { sensitive: true });
  cy.contains('button', 'Login').should('not.be.disabled').click();
  cy.get('button#userNavDropdown', { timeout: 15000 }).should('be.visible');
});




// Cypress.Commands.add('login', (email, password) => {
//   cy.visit('https://qauto.forstudy.space/', {
//     auth: {
//       username: 'guest',
//       password: 'welcome2qauto',
//     },
//   });

//   cy.get('button.btn.btn-outline-white.header_signin').click();
//   cy.get('#signinEmail').type(email);
//   cy.get('#signinPassword').type(password, { sensitive: true });

//   cy.get('div.modal-footer')
//     .contains('Login')
//     .should('not.be.disabled')
//     .click();

//     cy.get('button#userNavDropdown', { timeout: 10000 }).should('be.visible');
// });

// Cypress.Commands.overwrite('type', (originalFn, element, text, options = {}) => {
//   if (options.sensitive) {
//     options.log = false;
//     Cypress.log({
//       $el: element,
//       name: 'type',
//       message: '*'.repeat(text.length),
//     });
//   }

//   return originalFn(element, text, options);
// });






// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
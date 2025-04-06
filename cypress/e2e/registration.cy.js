
const uniqEmail = `user+${Date.now()}@example.com`;
const password = 'Abc12345';

describe('Registration Form - Validation', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

  
    cy.get('button.btn.btn-outline-white.header_signin').click();

  
    cy.get('app-signin-modal').contains('Registration').click();

  
    cy.get('#signupName', { timeout: 10000 }).should('be.visible');
  });

  it('Should validate empty required fields on blur', () => {
    cy.get('#signupName').focus().blur();
    cy.contains('Name required');

    cy.get('#signupLastName').focus().blur();
    cy.contains('Last name required');

    cy.get('#signupEmail').focus().blur();
    cy.contains('Email required');

    cy.get('#signupPassword').focus().blur();
    cy.contains('Password required');

    cy.get('#signupRepeatPassword').focus().blur();
    cy.contains('Re-enter password required');
  });

  it('Should validate incorrect email and name length', () => {
    cy.get('#signupName').type('A').blur();
    cy.contains('Name has to be from 2 to 20 characters long');

    cy.get('#signupLastName').type('A'.repeat(25)).blur();
    cy.contains('Last name has to be from 2 to 20 characters long');

    cy.get('#signupEmail').type('notanemail').blur();
    cy.contains('Email is incorrect');
  });

  it('Should disable "Register" button for invalid form', () => {
    cy.contains('Register').should('be.disabled');
  });
});

describe('Successful Registration and Login', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('button.btn.btn-outline-white.header_signin').click();
    cy.get('app-signin-modal').contains('Registration').click();
    cy.get('#signupName', { timeout: 10000 }).should('be.visible');
  });

  it('Should register new user and login using custom command', () => {
    cy.get('#signupName').type('TestUser');
    cy.get('#signupLastName').type('Cypress');
    cy.get('#signupEmail').type(uniqEmail);
    cy.get('#signupPassword').type(password, { sensitive: true });
    cy.get('#signupRepeatPassword').type(password, { sensitive: true });

  
    cy.contains('Register').should('not.be.disabled').click();

    cy.get('button#userNavDropdown', { timeout: 10000 }).should('be.visible');

  
   cy.get('button#userNavDropdown').click();
   cy.contains('button', 'Logout').click();
  
    cy.login(uniqEmail, password);
  });
});


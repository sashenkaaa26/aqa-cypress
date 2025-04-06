
const timeStamp = Date.now();

const users = [
  {
    appName: 'qauto',
    baseUrl: "https://qauto.forstudy.space",
    email: `user1+${timeStamp}@example.com`,
    password: "Abc12345",
  },
  {
    appName: 'qauto2',
    baseUrl: "https://qauto2.forstudy.space",
    email: `user2+${timeStamp}@example.com`,
    password: "Abc12345",
  },
];

users.forEach(({ appName, baseUrl, email, password }) => {
  describe(`User Registration for ${appName}`, () => {
    it("Should register new user via UI", () => {
      cy.log(`Заходим на ${baseUrl} под basic auth...`);
      cy.visit(baseUrl, {
        auth: {
          username: "guest",
          password: "welcome2qauto",
        },
      });

      cy.log(' Открываем форму регистрации');
      cy.get('button.btn.btn-outline-white.header_signin').click();
      cy.get('app-signin-modal').contains('Registration').click();
      cy.get('#signupName', { timeout: 10000 }).should('be.visible');

      cy.log(`Email для регистрации: ${email}`);

      cy.get('#signupName').type('AutoTest');
      cy.get('#signupLastName').type('User');
      cy.get('#signupEmail').type(email);
      cy.get('#signupPassword').type(password, { sensitive: true });
      cy.get('#signupRepeatPassword').type(password, { sensitive: true });

      cy.contains('Register').should('not.be.disabled').click();
      cy.log(' Кликнули Register, ждём переход...');
      
    
      cy.wait(1500);
      cy.get('body').then(($body) => {
        if ($body.text().includes('already exists')) {
          throw new Error(' Email уже зарегистрирован или форма не прошла валидацию');
        }
      });
      

      cy.get('button#userNavDropdown', { timeout: 15000 })
        .should('exist')
        .and('be.visible');

 
      cy.writeFile(`cypress/fixtures/${appName}_user.json`, { email, password });
      cy.log(` Saved ${appName}_user.json`);
    });
  });
});

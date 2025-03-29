describe("Check all buttons and links on the page", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Should log in using Basic Authentication", () => {
    cy.url().should('include', 'qauto.forstudy.space');
  });
  
  it("Should find all buttons in the header", () => {
    cy.get(".header_inner .btn") 
      .should("have.length.at.least", 4) 
      .each(($btn) => {
        cy.wrap($btn).should("be.visible");
      });
  });
  

  it('Checks that the links lead to the correct websites', () => {
    const expectedLinks = [
      { url: 'https://www.facebook.com/Hillel.IT.School', name: 'Facebook' },
      { url: 'https://t.me/ithillel_kyiv', name: 'Telegram' },
      { url: 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1', name: 'YouTube' },
      { url: 'https://www.instagram.com/hillel_itschool/', name: 'Instagram' },
      { url: 'https://www.linkedin.com/school/ithillel/', name: 'LinkedIn' },
      { url: 'https://ithillel.ua', name: 'Hillel Main Website' }, 
      { url: 'mailto:developer@ithillel.ua', name: 'Email Contact' } 
    ];

    cy.get('.contacts_socials .socials_link,.contacts_link').each(($el, index) => {
      cy.wrap($el)
      .should('have.attr', 'href', expectedLinks[index].url) 
      .and('not.be.empty');

    });
  });
  
});
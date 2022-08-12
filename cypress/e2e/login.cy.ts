/// <reference types="cypress" />

describe('termsheet beta tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
  });

  it('should login', () => {
    cy.get('#form-username').type('diogo');
    cy.get('#form-password').type('12345');

    cy.wait(1000);

    cy.get('#btn-form-login').click({
      force: true,
    });
  });
});

/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('add pet e2e test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
  });

  it('should add a new pet', () => {
    // TODO: We could create a custom login command here
    cy.get('#form-username').type('diogo');
    cy.get('#form-password').type('12345');
    cy.wait(1000);
    cy.get('#btn-form-login').click({
      force: true,
    });

    cy.wait(3000);

    // Click to open form
    cy.get('#btn-add-pet').click({
      force: true,
    });

    // Fill the form
    cy.get('#form-name').type(faker.name.firstName());
    cy.get('#form-url').type('https://picsum.photos/id/237/750/600');
    cy.get('#form-category').type('Dogs');
    cy.get('#form-tags').type('Calm, Kindly, Frindly');

    // Submit
    cy.get('#btn-form-add').click({
      force: true,
    });
  });
});

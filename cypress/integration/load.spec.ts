/// <reference types="cypress" />
import data from '../fixtures/no-data.json';

describe('Initial App load', () => {
  it('renders the user search form', () => {
    cy.visit('http://localhost:3000');
    const userForm = cy.get('[data-cy=user-form]');
    userForm.should('be.visible');
    cy.get('[data-cy=user-input]').should('be.visible');
    cy.get('[data-cy=user-submit]').should('be.visible');
  });

  it('check if the button rendered is disabled', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-submit]').should('be.disabled');
  });

  it('check if the input field is empty', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-input]').should('be.empty');
  });
});

describe('Search (with no data)', () => {
  it('renders the no data message', () => {
    cy.intercept('POST', 'https://api.github.com/graphql', {
      delayMs: 1000,
      body: JSON.stringify(data),
    });
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-input]').type('github-user');
    // Triggering the click on submit - for fetching data
    // There is a delay configured for 2000ms
    cy.get('[data-cy=user-submit]').click();
    // Wait for 1000ms
    cy.wait(1000);
    // Should contain text "No data found!"
    cy.contains('No data found!').should('be.visible');
  });
});
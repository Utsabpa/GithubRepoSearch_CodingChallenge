/// <reference types="cypress" />
import data from '../fixtures/data.json';

describe('Search (with data)', () => {
  it('renders the user search form', () => {
    cy.intercept('POST', 'https://api.github.com/graphql', {
      delayMs: 1000,
      body: JSON.stringify(data),
    });
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=user-input]').type('github-user');
    // Triggering the click on submit - for fetching data
    // There is a delay configured for 2000ms
    cy.get('[data-cy=user-submit]').click();
    // Button click should start a loader
    cy.get('[data-cy=loader]').should('be.visible');
    // Checking if repository card named test-repository is visible
    cy.wait(1000);
    cy.contains('test-repository').should('be.visible');
  });
});

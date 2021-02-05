/// <reference types="cypress" />

import * as React from 'react';
import Toggle from '.';
import { mount } from '@cypress/react';

describe('Loader', () => {
  it('renders the text context correctly', () => {
    mount(<Toggle />);
    cy.get('[data-cy="toggle"]').should("exist");
  });
});

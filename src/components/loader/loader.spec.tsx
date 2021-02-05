/// <reference types="cypress" />

import * as React from 'react';
import Loader from '.';
import { mount } from '@cypress/react';

describe('Loader', () => {
  it('renders the text context correctly', () => {
    mount(<Loader />);
    cy.get('[data-cy="loader"]').should("exist");
  });
});

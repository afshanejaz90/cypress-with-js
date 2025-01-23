describe('Contact Form Submission', () => {
  it('should submit the contact form successfully', () => {
    // Visit the website
    cy.visit('https://www.cavulus.com/');

    // Wait for the page to load before interacting with the elements
    cy.wait(2000); // Wait for 2 seconds (you can adjust the time)

    // Click on the Contact link inside the .nav-links container
    cy.get('.nav-links')
      .find('a[href="/contact"]')
      .should('be.visible')
      .click();

    // Fill out the contact form
    cy.get('#First-Name').type('John');
    cy.get('#Last-Name').type('Doe');
    cy.get('[name="Email"]').type('test@test.com');

    // Select an option in the Industry dropdown
    cy.get('#Industry').select('Consultant');

    // Type in the message field
    cy.get('#Message').type('test');

    // Click the submit button
    cy.get('.button-large.w-button').click();

    // Wait for the submission response
    cy.get('.button-large.w-button')
      .should('have.attr', 'value', 'Please wait...')
      .and('be.disabled');

    // Assert the success message after submission
    cy.contains('Thank you! Your submission has been received!').should(
      'be.visible'
    );
  });
});

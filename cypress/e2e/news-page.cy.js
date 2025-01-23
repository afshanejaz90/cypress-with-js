describe('News Page Test', () => {
  beforeEach(() => {
    cy.visit('https://www.cavulus.com/');
    // Navigate to the news page
    // Wait for the page to load before interacting with the elements
    cy.wait(2000); // Wait for 2 seconds (Ideally I will use polling to confirm page has loaded all the way.)

    // Click on the news link inside the .nav-links container
    cy.get('.nav-links').find('a[href="/news"]').should('be.visible').click();
  });

  it('should display news articles with image, date, and title', () => {
    // Check if there are news articles
    cy.get('.news-collection-items').should('have.length.greaterThan', 0);

    // Check that each article has an image, date, and title
    cy.get('.news-collection-items').each(($article) => {
      // Check if the article has an image
      cy.wrap($article).find('img').should('exist');

      // Check if the article has a date
      cy.wrap($article).find('.dates-text').should('exist').and('not.be.empty');

      // Check if the article has a title
      cy.wrap($article)
        .find('.blog-details')
        .should('exist')
        .and('not.be.empty');
    });
  });
});

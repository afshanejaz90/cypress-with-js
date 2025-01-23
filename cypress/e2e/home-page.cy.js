describe('Open Cavulus website', () => {
  it('should open the Cavulus homepage successfully', () => {
    // Visit the URL
    cy.visit('https://www.cavulus.com/');

    // Assert that the page loads correctly by checking the status code (200 OK)
    cy.request('https://www.cavulus.com/').its('status').should('eq', 200);

    // You can also check if the page contains a specific element to confirm it's loaded
    cy.get('h1').should('exist'); // Check if an h1 element is present on the page
  });
});

describe('Verify Footer Titles', () => {
  beforeEach(() => {
    // Visit the Cavulus homepage before each test
    cy.visit('https://www.cavulus.com/');
  });

  it('should verify footer contains the correct footer titles', () => {
    // Define the expected footer titles
    const footerTitles = ['Products', 'Services', 'Company', 'Connect With Us'];

    // Select all elements with the class `footer-title` in the footer
    cy.get('.footer-title').should('have.length', footerTitles.length);

    // Verify each footer title matches the expected text
    footerTitles.forEach((title, index) => {
      cy.get('.footer-title')
        .eq(index) // Get the element at the current index
        .should('have.text', title); // Verify the text matches
    });
  });
});

describe('Navigation Links Text Verification', () => {
  before(() => {
    // Runs once before all tests in the block
    cy.visit('https://www.cavulus.com/');
  });

  it('should verify specific navigation links are present with correct text', () => {
    // Define the expected navigation link titles
    const expectedNavLinks = ['Solutions', 'Company', 'News', 'Contact'];

    // Iterate over the expected navigation link titles
    expectedNavLinks.forEach((linkText) => {
      // Check that an element with the class `nav-link` contains the expected text
      cy.get('.nav-link').contains(linkText).should('exist');
    });
  });
});

describe('FAQ Verification', () => {
  before(() => {
    // Navigate to the website
    cy.visit('https://www.cavulus.com/');
  });

  it('should verify all FAQ entries are present', () => {
    // Define the FAQ titles we expect to find
    const expectedFAQs = ['MedicareCRM®', 'ECM™', 'EMMA™'];

    // Verify each FAQ entry is present
    expectedFAQs.forEach((faqTitle) => {
      cy.get('.faq-question').contains(faqTitle).should('exist');
    });
  });
});

describe('Details Headings Verification', () => {
  before(() => {
    // Navigate to the website
    cy.visit('https://www.cavulus.com/');
  });

  it('should verify that all details headings are present', () => {
    // Define the expected headings
    const expectedHeadings = [
      'Enrollment Processing',
      'Accretion & Reconciliation',
      'Performance Optimization',
      'CMS Compliance',
    ];

    // Check each heading within the details grid
    expectedHeadings.forEach((heading) => {
      cy.get('.deatils-grid') // Target the parent container
        .contains(heading) // Check for the heading text
        .should('exist'); // Ensure the heading is present in the DOM
    });
  });
});

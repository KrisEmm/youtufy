describe('WelcomeController', () => {
  it('should check if the web app is working', () => {
    cy.visit('http://localhost:8081/');
    cy.get('h1').should('have.text', 'Welcome to Application Web App');
  });
});

describe('Actions', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('include', 'iodine');
        cy.title().should('eq', 'Home - Iodine')
        cy.log("Navigation done successfully");
    })


    it('Go to SDET position', () => {
        cy.get('#menu-item-1159 > a').should('be.visible').click()
        cy.wait(2000)
        cy.get('#menu-item-1668 > a').should('be.visible').click()
        cy.wait(2000)
        cy.get('div > a:nth-child(4) > div:nth-child(1) > h3').scrollIntoView().should('be.visible').click();
        cy.log("Test executed successfully");
        
        
    })

    
})
describe('Working with inputs', () => {

		it('Open the login page', () => {
			cy.visit('http://zero.webappsecurity.com/login.html')
		})

		it('Enter the username', () => {
			cy.get('#user_login').clear();
			cy.get('#user_login').type('Invalid value')
		})

		it('Enter the password', () => {
			cy.get('#user_password').clear();
			cy.get('#user_password').type('Invalid value')
		})

		it('Submit data', () => {
			cy.contains('Sign in').click()
		})

		it('Error message appear', () => {
			cy.get('.alert-error').should('be.visible')
		})

})
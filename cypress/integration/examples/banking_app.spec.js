describe('Working with inputs', () => {

		it('Override the current time', () => {
			const date = new Date(2020, 3, 10).getTime()
			cy.clock(date)
			cy.log(date)
		})

		it('Open the login page', () => {
			cy.visit('http://zero.webappsecurity.com/login.html')
			cy.clearCookies({log: true})
			cy.title().should('include', 'Zero')
		})

		it('Enter the username', () => {
			cy.get('#user_login').as('username')
			cy.get('@username').clear()
			cy.get('@username').type('Invalid value', {delay: 50})
		})

		it('Enter the password', () => {
			cy.get('#user_password').as('password')
			cy.get('@password').clear()
			cy.get('@password').type('Invalid value')
		})

		it('Mark checkbox', () => {
			cy.get('input[type="checkbox"]').click()
			//cy.wait(3000)
	})

		it('Submit data', () => {
			cy.contains('Sign in').click()
		})

		it('Error message appear', () => {
			cy.get('.alert-error').should('be.visible').and('contain', 'wrong')
		})

})
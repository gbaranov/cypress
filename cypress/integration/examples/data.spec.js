describe('Write / Read data to JSON / Text', () => {
	it('Write into JSON', () => {
		cy.writeFile('log.json', {test: 'test'})
	})

	it('Write into text file', () => {
		cy.writeFile('log.txt', 'Test')
	})

	it('Read and verify from file', () => {
		cy.readFile('log.json').its('test').should('eq', 'test')
	})

})


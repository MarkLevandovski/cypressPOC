context('Actions', ()=>{
	beforeEach(()=> {
		cy.visit('https://google.com')
	})

	 it('opens google and search cypress', function() {
	    cy.viewport(1440, 820)
	    cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('cypress')
	    cy.get('.UUbT9 > .aajZCb > .VlcLAe > center > .gNO89b').click()
	    cy.visit('https://www.google.com/search?safe=off&hl=pl&sxsrf=ACYBGNRl2dbTKshG1Hl0zGbgbbsaY86b7w%3A1570886202376&source=hp&ei=OtKhXaikFMfc6ATrwJfQDg&q=cypress&oq=cypress&gs_l=psy-ab.12..35i39l2j0i67j0j0i67l3j0l3.2371.3537..6106...0.0..0.161.825.0j7......0....1..gws-wiz.......0i131.Xo1JbaDFWEY&ved=0ahUKEwioqcqQ55blAhVHLpoKHWvgBeoQ4dUDCAY')
	    cy.get('.NFQFxe > .Ftghae > .SPZz6b > .kno-ecr-pt > span').click()
	    cy.get('.NFQFxe > .Ftghae > .SPZz6b > .kno-ecr-pt > span').click()
	 
	 })
})
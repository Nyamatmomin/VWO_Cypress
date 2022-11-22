describe("Horizontal Scroll and Mouse hover testing", () => {

    beforeEach(() => {

        cy.visit("/")
    })
    it("On Hovering on the right/left side of the Cards, Cards should roll towards right/left", () => {

        cy.get('.js-mouse-rotating-horizontal-scroll').each(($flex) => {

            cy.wrap($flex).trigger('mousemove','right').then(() => {
                expect($flex).to.have.class('scroll-align-right')
            }).then(() => {

                cy.wrap($flex).trigger('mousemove','left').then(() => {
                    expect($flex).to.have.class('scroll-align-left')
                })
            })
            
        })
    })

    it("Hover on the main Navidation", () => {


        cy.viewport(1366, 625)
        cy.get('.js-main-navigation > .js-header-dropdown-trigger').filter(':visible').each((header) => {
            cy.wrap(header).find('.js-header-dropdown-content').should("not.be.visible")
            cy.wrap(header).trigger('mouseover').then(()=> {
                cy.wrap(header).find('.js-header-dropdown-content').should("be.visible")
            })

        })
    })

    it.only("Hover on the buttons", () => {
        cy.get("a.button--blue-transparent").each((transBtn) => {

            cy.wrap(transBtn).should('have.css','background-color').and('eq','rgba(0, 0, 0, 0)')
            cy.wrap(transBtn).trigger('mouseover').then(() => {
                cy.wait(2000)
                expect(transBtn).to.have.css('background-color','rgba(47, 92, 252, 0')
            })
        })
    })
})
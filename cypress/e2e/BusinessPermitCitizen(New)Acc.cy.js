import BusinessPermitCitizen from "../PageObjects/BusinessPermitCitizanPage";
import BusinessPermitnWorklfow from "../PageObjects/BusinessPermitWorkflowPage";

describe('Business Permit Registration and Renewal', () => {


    it.only('Application submission', () => {

        cy.visit("https://citizen.ph.orangebd.com/")

        cy.fixture('BusinessPermit').then((data) => {

            const bp = new BusinessPermitCitizen();
            cy.wait(10000)
            bp.setSearch(data.service)
            cy.wait(10000)
            bp.clickSearchResult({ multiple: true })
            //bp.verfiySearch()
            bp.clickApplyNow()
            cy.wait(3000)
            bp.setUserName(data.username)
            bp.setPassword(data.password)
            bp.clickLogin()
            cy.wait(3000)
            bp.verifyLogin()
            cy.wait(3000)
            //cy.get('.text-gray-900 > :nth-child(1)').click({ multiple: true });
            bp.clickNew({ multiple: true })
            //cy.get('.apply_btn').click();
            bp.clickApplyNowBtn()


            cy.wait(5000)
            bp.clickOfficeSelectionNext()
            bp.clickOfficeSelectionNextBtn()
            // bp.verifyApplyNow()

            bp.clickUploadFile1()
            bp.clickSelectFile1()

            bp.clickUploadFile2()
            bp.clickSelectFile2()

            bp.clickUploadFile3()
            bp.clickSelectFile3()

            bp.clickUploadFile4()
            bp.clickSelectFile4()

            bp.clickUploadFile5()
            bp.clickSelectFile5()
            cy.wait(3000)

            bp.clickNextAF()

            //bp.setDate(data.chooseDate)
            bp.clickDatePointer()
            //cy.get('.dp__pointer').click();

            //bp.clickDate()
            cy.get('[data-test="Sun Dec 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"] > .dp__cell_inner').click();

            //bp.ClickSelectDate()
            cy.get('[data-test="select-button"]').click();

            bp.setOwnership(data.ownership)
            bp.setPaymentMode(data.paymentmode)
            bp.setTIN(data.TIN)

            //console.log(bp);
            bp.setLastName(data.LastName)
            //cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestLastName');

            bp.setFirstName(data.FirstName)
            //cy.get(':nth-child(12) > .block > .text_input_block > .flex > .relative > input').type('TestFirstName');

            bp.clickMainOffice()
            bp.setBusinessName(data.BusinessName)
            bp.clickNextStep()

            bp.setBusinessAddress1(data.businessaddress)
            bp.setOwnerAddress(data.OwnerAddress)
            cy.wait(5000)
            cy.get('select[name="business_geo"]')
                .eq(0) // First dropdown (Region)
                .should('be.visible')
                .select('Region I');

            cy.wait(5000)
            cy.get('select[name="business_geo"]')
                .eq(1) // Second dropdown (Province)
                .should('be.visible')
                .select('Ilocos Norte');

            cy.wait(3000)
            bp.clickNextStep()
            bp.clickNextStep()
            bp.clickNextStep()
            bp.clickNextStep()
            bp.clickNextStep()

            bp.clickSubmit()
            cy.wait(10000)
            bp.verifySubmit()
            cy.wait(10000)
        })
    })
})
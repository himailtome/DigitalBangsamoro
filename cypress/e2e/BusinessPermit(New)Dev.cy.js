import BusinessPermitCitizen from "../PageObjects/BusinessPermitCitizanPage";
import BusinessPermitnWorklfow from "../PageObjects/BusinessPermitWorkflowPage";

describe('Business Permit Registration and Renewal', () => {



    it.only('Application submission', () => {

        cy.visit("https://citizen-dev.ph.orangebd.com/")

        cy.fixture('BusinessPermit').then((data) => {

            const bp = new BusinessPermitCitizen();
            bp.setSearch(data.service)
            cy.wait(3000)
            bp.clickSearchResult({ multiple: true })
            // bp.verfiySearch()


            bp.clickApplyNow()
            cy.wait(3000)

            bp.setUserName(data.username)
            bp.setPassword(data.password)
            bp.clickLogin()
            // bp.verifyLogin()

            bp.clickApplyNow()


            //cy.wait(10000)
            bp.clickOfficeSelectionNext()
            // cy.wait(10000)

            bp.clickOfficeSelectionNextBtn()
            // cy.wait(10000)

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

            cy.get('.dp__pointer').click();
            cy.get('[data-test="Sun Dec 15 2024 00:00:00 GMT+0600 (Bangladesh Standard Time)"] > .dp__cell_inner').click();
            cy.get('[data-test="select-button"]').click();

            bp.setOwnership(data.ownership)
            bp.setPaymentMode(data.paymentmode)
            bp.setTIN(data.TIN)

            cy.get(':nth-child(11) > .block > .text_input_block > .flex > .relative > input').type('TestLastName');
            cy.get(':nth-child(12) > .block > .text_input_block > .flex > .relative > input').type('TestFirstName');

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

            //cy.get(':nth-child(1) > :nth-child(4) > .select_box_block > .grid > .municipality_dropdown > .input_box > .border-\[1px\] > .flex > :nth-child(1)').type(Adams)
            // cy.get(this.txtSearch).type(Adams)
            cy.wait(3000)
            //cy.get(this.btnSearchResult).click() //({ multiple: true })

            //cy.get(':nth-child(1) > :nth-child(4) > .select_box_block > .grid > .municipality_dropdown > .input_box > .border-\[1px\]').type('Adams');
            //cy.get('#headlessui-combobox-option-39 > .block').click();


            //describe('Municipality Dropdown Test', () => {
               // it('Selects an option from the municipality dropdown', () => {
                    // Ensure the dropdown parent container is visible
                    cy.get('.municipality_dropdown')
                        .should('be.visible'); // Verify that the dropdown container is visible

                    // Check if the dropdown button is visible; handle hidden state
                    cy.get('#headlessui-combobox-button-36')
                        .should('exist')
                        .then(($button) => {
                            if ($button.is(':visible')) {
                                // If visible, click the button to open the dropdown
                                cy.wrap($button).click();
                            } else {
                                // If not visible, force the click
                                cy.wrap($button).click({ force: true });
                            }
                        });

                    // Wait for the dropdown options to appear
                    cy.get('#headlessui-combobox-options-88', { timeout: 10000 })
                        .should('be.visible');

                    // Select the "Badoc" option
                    cy.get('#headlessui-combobox-options-88')
                        .contains('li', 'Badoc') // Replace with the desired option text
                        .click();

                    // Verify the selected value is reflected in the input field
                    cy.get('#headlessui-combobox-input-35')
                        .should('have.value', 'Badoc'); // Replace "Badoc" with the expected value
            //     });
            // });



            bp.clickNextStep()

            bp.clickNextStep()

            bp.clickNextStep()

            bp.clickNextStep()

            bp.clickNextStep()


            bp.clickSubmit()
            cy.wait(5000)

            bp.verifySubmit()

        })

    })

    it('Application Processing', () => {

        cy.visit("https://workflow-dev.ph.orangebd.com/")

        cy.fixture('BusinessPermit').then((data) => {

            const wf = new BusinessPermitnWorklfow();


            // Desk-1: Noaima Mama //

            // Officer-1 Login

            wf.setOfficerID(data.officerid1)
            wf.setOfficerPassword(data.officerpassword)
            wf.clickLogin()
            wf.verifyWorkflowLogin()

            // Application Details

            wf.clickDetails()
            wf.verifyDetails()

            // Decision Window

            wf.clickDecision()
            wf.verifyDecisionWindow()
            wf.clickPaymentRequst()
            wf.setPaymentAmount(data.paymentamount)
            wf.clickSubmitDecision()
            cy.wait(6000)
            wf.verifyDetails()
            wf.clickDecision()
            wf.verifyDecisionWindow()
            wf.clickPaymentSuccess()
            cy.wait(6000)
            wf.setNote(data.note)
            wf.clickSubmitDecision()
            cy.wait(3000)
            wf.verifyDetails()

            // Forward Window

            cy.wait(3000)
            wf.clickForward()
            wf.verifyForwardWindow()
            wf.clickSultan()
            wf.clickSubmitForward()
            cy.wait(3000)
            wf.verifyForward()

            // Officer-1 Logout

            wf.clickUser()
            wf.clickLogout()
            wf.clickConfirm()
            cy.wait(3000)
            wf.verifyLogout()


            // Desk-2: Sultan Mesug Palawan //

            // Officer-2 Login

            wf.setOfficerID(data.officerid2)
            wf.setOfficerPassword(data.officerpassword)
            wf.clickLogin()
            wf.verifyWorkflowLogin()

            // Application Details

            wf.clickDetails()
            wf.verifyDetails()

            // Decision Window

            wf.clickDecision()
            wf.verifyDecisionWindow()
            wf.clickProceed()
            wf.setNote(data.note)
            wf.clickSubmitDecision()
            cy.wait(3000)
            wf.verifySubmit()


            // Forward Window

            cy.wait(3000)
            wf.clickForward()
            wf.verifyForwardWindow()
            wf.clickPansar()
            wf.clickSubmitForward()
            cy.wait(3000)
            wf.verifyForward()


            // Officer-2 Logout

            cy.wait(3000)
            wf.clickUser()
            wf.clickLogout()
            wf.clickConfirm()
            cy.wait(3000)
            wf.verifyLogout()



            // Desk-3: Atty. Dimnatang BL Pansar //

            // Officer-3 Login

            wf.setOfficerID(data.officerid3)
            wf.setOfficerPassword(data.officerpassword)
            wf.clickLogin()
            wf.verifyWorkflowLogin()

            // Application Details

            wf.clickDetails()
            wf.verifyDetails()


            // Decision Window

            wf.clickDecision()
            wf.verifyDecisionWindow()
            wf.clickReject()
            wf.setNote(data.note)
            wf.clickSubmitDecision()
            cy.wait(3000)
            wf.verifySubmit()


            // Officer-3 Logout

            cy.wait(3000)
            wf.clickUser()
            wf.clickLogout()
            wf.clickConfirm()
            cy.wait(3000)
            wf.verifyLogout()


        })

    })

})

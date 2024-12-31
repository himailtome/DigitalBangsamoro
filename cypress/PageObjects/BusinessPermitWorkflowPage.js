

class BusinessPermitnWorklfow
{
    // Oficer login

    txtOfficerID = "#user_id"
    txtOfficerPassword = "input[placeholder='Password']"
    btnLogin = ".ml-auto"
    lblLogo = ".logo > img"


    btnDeatails = "tbody tr:nth-child(1) td:nth-child(6) a:nth-child(1)"
    lblDetails = "#send"

    btnDecision = "#single_decision"
    lblDecisionWindow = "div[class='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all max-w-5xl sm:my-8 sm:w-full'] h3[class='text-xl font-semibold text-gray-900 dark:text-white']"

    // Desk-1: Noaima Mama

    radioPaymentRequset = "#radio9-8"
    radioPaymentSuccess = "#radio9-9"
    txtPaymentAmount = "#payment_request_amount"

    // Desk-2: Sultan Mesug Palawan

    radioProceed = "#radio10-5"

    // Desk-3: Atty. Dimnatang BL Pansar

    radioApprove = "#radio2-1"
    radioReject = "#radio11-3"

    setIssueDate = "#issued_on"
    setOR = "#org_no"
    setValidDate = "#expiry_date"

    // Enter Note & Submission

    txtNote = "div[class='ql-editor ql-blank'] p"
    btnSubmitDecision = "#decision-btn"

   // Forward Window

   btnForward = "#send"
   lblForward = "#sendModalLabel"
   radioSultan = "#employeeId6"
   radioPansar = "#employeeId1"
   btnSubmitForward = "#send-btn"

   
   
    // Logout

    btnUser = ".fas.fa-angle-down"
    btnLogout = ".dropdown-item.logout-a[href='javascript:void(0);']"
    btnConfirm = ".btn.btn-primary[href='/']"
    lblLogout = "img[alt='workflow-logo']"

    setOfficerID(officerid)
    {
        cy.get(this.txtOfficerID).type(officerid)
    }

    setOfficerPassword(officerpassword)
    {
        cy.get(this.txtOfficerPassword).type(officerpassword)
    }

    clickLogin()
    {
        cy.get(this.btnLogin).click()
    }

    verifyWorkflowLogin() 
    {
        cy.get(this.lblLogo).should("be.visible")
    }


    clickDetails()
    {
        cy.get(this.btnDeatails).click()
    }

    verifyDetails()
    {
        cy.get(this.lblDetails).should("be.visible")
    }

    clickDecision()
    {
        cy.get(this.btnDecision).click()
    }

    verifyDecisionWindow()
    {
        cy.get(this.lblDecisionWindow).should("have.text", "Decision")
    }


    // Desk-1: Noaima Mama

    clickPaymentRequst()
    {
        cy.get(this.radioPaymentRequset).click()
    }

    clickPaymentSuccess()
    {
        cy.get(this.radioPaymentSuccess).click()
    }

    setPaymentAmount(paymentamount)
    {
        cy.get(this.txtPaymentAmount).type(paymentamount)
    }

    // Desk-2: Sultan Mesug Palawan

    clickProceed()
    {
        cy.get(this.radioProceed).click()
    }

    // Desk-3: Atty. Dimnatang BL Pansar

    clickReject()
    {
        cy.get(this.radioReject).click()
    }

    clickApprove()
    {
        cy,get(this.radioApprove).click()
    }

   // setIssueDate() {}
   // setValidDate() {}
   // setOR() {}


    // Enter Note & Submission & Verify Submission

    setNote(note)
    {
        cy.get(this.txtNote).type(note)
    }

    clickSubmitDecision()
    {
        cy.get(this.btnSubmitDecision).click()
    }

    verifySubmit()
    {
        cy.get(this.lblDetails).should("be.visible")
    }

    // Forward

    clickForward()
    {
        cy.get(this.btnForward).click()
    }

    verifyForwardWindow()
    {
        cy.get(this.lblForward).should("have.text", "Forward")
    }

    clickSultan()
    {
        cy.get(this.radioSultan).click()
    }

    clickPansar()
    {
        cy.get(this.radioPansar).click()
    }

    clickSubmitForward()
    {
        cy.get(this.btnSubmitForward).click()
    }

    verifyForward()
    {
        cy.get(this.lblDetails).should("be.visible")
    }

    // Logout

    clickUser()
    {
        cy.get(this.btnUser).click()
    }

    clickLogout()
    {
        cy.get(this.btnLogout).click()
    }

    clickConfirm()
    {
        cy.get(this.btnConfirm).click()
    }

    verifyLogout()
    {
        cy.get(this.lblLogout).should("be.visible")
    }


}

export default BusinessPermitnWorklfow;
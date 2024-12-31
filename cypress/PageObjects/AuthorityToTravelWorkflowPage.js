

class AuthorityToTravelProcess
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
    radioApproveDecision = "#radio2-1"
    radioRejectDecision = "#radio11-3"
    txtApprovalData = "#application_approved_date"
    txtNote = "div[class='ql-editor ql-blank'] p"
    btnSubmitDecision = "#decision-btn"


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

    clickRejectRadioButton()
    {
        cy.get(this.radioRejectDecision).click()
    }
    
    clickApproveRadioButton()
    {
        cy.get(this.radioApproveDecision).click()
    }

   clickApprovalData()
   {
        cy.get(this.txtApprovalData).click()
   }

   setApprovalData(approvedate)
   {
        cy.get(this.txtApprovalData).type(approvedate)
   }

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
}

export default AuthorityToTravelProcess;
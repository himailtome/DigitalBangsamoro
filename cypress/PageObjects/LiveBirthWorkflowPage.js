

class LiveBirthWorkflow
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

    // Desk-1: Hanifa hadji yasser

    radioProceed1 = "#radio10-5"

    // Desk-2: Noraida cornell

    radioProceed2 = "#radio10-5"

    // Desk-3: Nanayaon manalocon

    radioApprove = "#radio2-1"
    radioReject = "#radio11-3"

    txtRegNo = "#reg_no"

    // Enter Note & Submission

    txtNote = "div[class='ql-editor ql-blank'] p"
    btnSubmitDecision = "#decision-btn"

   // Forward Window

   btnForward = "#send"
   lblForward = "#sendModalLabel"
   radioNoraida = "#employeeId5"
   radioNanayaon = "#employeeId2"
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

    clickProceed1()
    {
        cy.get(this.radioProceed1).click()
    }

    // Desk-2: Sultan Mesug Palawan

    clickProceed2()
    {
        cy.get(this.radioProceed2).click()
    }

    // Desk-3: Atty. Dimnatang BL Pansar

    clickReject()
    {
        cy.get(this.radioReject).click()
    }

    clickApprove()
    {
        cy.get(this.radioApprove).click()
    }

   setRegNo(regno)
   {
        cy.get(this.txtRegNo).type(regno)
   }


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

   clickNoraida()
   {
       cy.get(this.radioNoraida).click()
   }

   clickNanayaon()
   {
       cy.get(this.radioNanayaon).click()
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

export default LiveBirthWorkflow;
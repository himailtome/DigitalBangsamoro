import AuthorityToTravel from "../PageObjects/AuthorityToTravelPage"
import AuthorityToTravelProcess from "../PageObjects/AuthorityToTravelWorkflowPage"


describe('Authority to Travel', () => {



    it.only ('Application submission', ()=> {

        cy.visit("https://citizen-dev.ph.orangebd.com/")

        cy.fixture('AuthorityToTravel').then((data) => {
           
            const a2t=new AuthorityToTravel();
            a2t.setSearch(data.service)
            cy.wait(3000)
            a2t.clickSearchResult()
           // a2t.verfiySearch()
        
        
            a2t.clickApplyNow()
            cy.wait(3000)
        
            a2t.setUserName(data.username)
            a2t.setPassword(data.password)
            a2t.clickLogin()
           // a2t.verifyLogin()
        
            a2t.clickApplyNow()
          //  a2t.verifyApplyNow()
        
            a2t.clickUploadFile1()
            a2t.clickSelectFile1()
        
            a2t.clickUploadFile3()
            a2t.clickSelectFile3()
        
            cy.wait(3000)
        
            a2t.clickNextAF()
           // a2t.verifyApplicationForm()
        
        
           a2t.setPurposeOfTravel(data.purpose)
           a2t.setNameOfApplicant(data.applicant)
           a2t.setNameOfOffice(data.office)
           a2t.setDesignation(data.designation)
           a2t.setDestination(data.destination)
           a2t.setReason(data.reason)
        
           a2t.clickNextAR()
          // a2t.verifyApplicationReview
        
           a2t.clickSubmit()
        
           cy.wait(8000)
        
           a2t.verifySubmit()

        })  
    
        })

        it ('Application Processing', ()=> {

            cy.visit("https://workflow-dev.ph.orangebd.com/")
    
            cy.fixture('AuthorityToTravel').then((data) => {
               
                const wf=new AuthorityToTravelProcess();

                wf.setOfficerID(data.officerid)
                wf.setOfficerPassword(data.officerpassword)
                wf.clickLogin()
                wf.verifyWorkflowLogin()

                cy.wait(5000)

                wf.clickDetails()
                wf.verifyDetails()

                cy.wait(3000)

                wf.clickDecision()

               // cy.wait(3000)
              //  wf.verifyDecisionWindow()
               
                 // Approve Decision

                //  wf.clickApprovalData()
                //  wf.clickApprovalData()


                 // Reject Decision

                wf.clickRejectRadioButton()

                wf.setNote(data.note)
                wf.clickSubmitDecision()

                cy.wait(3000)

                wf.verifySubmit()

            })     
        
            })
  
  })
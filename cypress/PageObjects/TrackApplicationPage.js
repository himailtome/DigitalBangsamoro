
class TrackApplication
{

    btnTrackApplication="a[role='button']"
    txtMobile="div[class='input_block login_id'] div"
    txtTrackingID="input[placeholder='i.e. 202212000111']"
    btnSearch="div[role='button'] span"
    lblMsg="div[class='flex items-center gap-2 mt-5 mb-3 timeline_caption'] span"


    clickTrackApplication() 
    {
        cy.get(this.btnTrackApplication).click()
    }

    setMobile(mobile)
    {
        cy.get(this.txtMobile).type(mobile)
    }

    setTrackingID(trackingid)
    {
        cy.get(this.txtTrackingID).type(trackingid)
    }

    clickSearch()
    {
        cy.get(this.btnSearch).click()
    }

    verifySearch()
    {
        cy.get(this.lblMsg).should("have.text", "Application Timeline")
    }
}

export default TrackApplication;
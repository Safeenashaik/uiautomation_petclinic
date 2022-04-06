import ApplicationPage from "./ApplicationPage"
const selectors = {
    firstName: '//*[@id="firstName"]',
    lastName: '//*[@id="lastName"]',
    address: '//*[@id="address"]',
    city: '//*[@id="city"]',
    telephone: '//*[@id="telephone"]',
    findOwnerButton: '//*[@id="main-navbar"]/ul/li[3]/a',
    addOwnernavigatePageButton: '/html/body/div/div/a',
    addOwner: '//*[@id="add-owner-form"]/div[2]/div/button',
    firstnameErrorMessage: '/html/body/div/div/form/div[1]/div[1]/div/span[2]',
    lastnameErrorMessage: '/html/body/div/div/form/div[1]/div[2]/div/span[2] ',
    addressErrorMessage: '/html/body/div/div/form/div[1]/div[3]/div/span[2]',
    cityErrorMessage: '/html/body/div/div/form/div[1]/div[4]/div/span[2]',
    telephoneErrorMessage: '/html/body/div/div/form/div[1]/div[5]/div/span[2]',
}
class HomePage extends ApplicationPage {

    constructor() {
        super()
    }
    async navigateToFindOwner() {
        await (await $('//*[@id="main-navbar"]/ul/li[3]/a')).click()
        await browser.pause(1000);
    }
    async navigateToAddOwner() {
        let addOwnerButton = await $('/html/body/div/div/a')
        addOwnerButton.click()
        await browser.pause(1000);
    }
    async firstnameFieldValidation(Firstname) {
        const firstName = await $('//*[@id="firstName"]')
        firstName.setValue(Firstname)
        await browser.pause(1000)
        //return Firstname;
    }
    async lastnameFieldValidation(Lastname) {
        const lastName = await $('//*[@id="lastName"]')
        lastName.setValue(Lastname)
        await browser.pause(1000)
        //return Lastname;
    }
    async addressFieldValidation(Address) {
        const firstName = await $('//*[@id="address"]')
        firstName.setValue(Address)
        await browser.pause(1000)
        //return Address;
    }
    async cityFieldValidation(City) {
        const firstName = await $('//*[@id="city"]')
        firstName.setValue(City)
        await browser.pause(1000)
        //return City;
    }
    async telephoneNumberValidation(inputNo) {
        const telephone = await $('//*[@id="telephone"]')
        telephone.setValue(inputNo)
        await browser.pause(1000)
    
    }
    async AddOwner() {
        const buttonClick = await $('//*[@id="add-owner-form"]/div[2]/div/button')
        buttonClick.click();
        await browser.pause(1000)
    }
    async nonNumericValidation(inputNo): Promise<string> {
        const nonNumeric = await inputNo.isNaN()
        //if (inputNo.isNaN){
        return nonNumeric;
    }
    async firstnameFieldErrorMsgValidation(): Promise<string> {
        let FirstnameFieldErrorMsg = await (await $('/html/body/div/div/form/div[1]/div[1]/div/span[2]')).getText()
        return FirstnameFieldErrorMsg;
    }
    async lastnameFieldErrorMsgValidation(): Promise<string> {
        let LastnameFieldErrorMsg = await (await $('/html/body/div/div/form/div[1]/div[2]/div/span[2]')).getText()
        return LastnameFieldErrorMsg;
    }
    async addressFieldErrorMsgValidation(): Promise<string> {
        let AddressFieldErrorMsg = await (await $('/html/body/div/div/form/div[1]/div[3]/div/span[2]')).getText()
        return AddressFieldErrorMsg;
    }
    async cityFieldErrorMsgValidation(): Promise<string> {
        let CityFieldErrorMsg = await (await $('/html/body/div/div/form/div[1]/div[4]/div/span[2]')).getText()
        return CityFieldErrorMsg;
    }
    async telephoneErrorMsgValidation() {
        let TelephoneFieldFirstErrorMsg = await (await (await $('//*[@id="add-owner-form"]/div[1]/div[5]/div/span[2]')).getText()).split('\n')
        return [TelephoneFieldFirstErrorMsg[0],TelephoneFieldFirstErrorMsg[1]];
        
    }
    async checkOwnerInformationExists(){
        let addOwnerInfo = await $('/html/body/div/div/table[1]')
        let ISDispalyed= addOwnerInfo.isDisplayed();
        console.log("ISDispalyed? "+ ISDispalyed)
        return ISDispalyed;
    }
////div/span[contains(text(),"numeric value out of bounds (<10 digits>.<0 digits> expected)")] ,//div/span[contains(text(),"must not be empty")]
//html/body/div/div/form/div[1]/div[5]/div/span[2]/
}
const homePage = new HomePage();
export { homePage }

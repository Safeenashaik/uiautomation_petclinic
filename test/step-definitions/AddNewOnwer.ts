import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { homePage } from "../page/HomePage";

When(/^User clicks on Add new dropdown menu from owners menu$/, async function () {
    await homePage.navigateToFindOwner();
    await homePage.navigateToAddOwner();
})
When(/^User enters all required fields$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
})
Then(/^owner information screen gets dispalyed with all entered details$/, async function () {
    expect(await homePage.checkOwnerInformationExists()).toBe(true)
})
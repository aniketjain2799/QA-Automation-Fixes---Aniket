import { When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import NewFunctionalityPage from "../../pages/17VerifyTheNewFunctionalityInCUPage";
import { expect } from '@playwright/test';


let newFunctionalityPage: NewFunctionalityPage;

Then("the User can verify the Total Application should be greater then Zero", async function () {
    newFunctionalityPage = new NewFunctionalityPage(fixture.page);
    const count = await newFunctionalityPage.getTotalApplicationCount();
    expect(count).toBeGreaterThan(0);

});


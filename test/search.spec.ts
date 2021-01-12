import homePage from "../pages/home.page";
import searchPage from "../pages/search.page";

describe('Search for a specific good', () => {

    it('Should search for a good and verify results contain text from search query', () => {
        homePage.visitPage();

        const searchQuery: string = 'ThinkPad T14';
        searchPage.typeSearchQuery(searchQuery);

        searchPage.verifyResultsContainValidInfo(searchQuery);
    })
})

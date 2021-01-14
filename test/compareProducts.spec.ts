import homePage from "../pages/home.page";
import catalogPage from "../pages/catalog.page";
import tvListPage from "../pages/tvList.page";
import tvProductPage from "../pages/tvProduct.page";
import comparisonPage from "../pages/comparison.page";

const TV_NAME_1 = 'Samsung UE50TU8000U';
const TV_NAME_2 = 'Xiaomi MI TV 4S 43';

describe('User can select multiple items and compare them', () => {
    
    it('Should add 2 TVs and redirect to comparison page', () => {
        homePage.visitPage();
        homePage.openCatalogPage();
        
        catalogPage.openTvListPage();

        tvListPage.openSelectedTvPage(TV_NAME_1);
        tvProductPage.addToComparison();
        tvProductPage.verifyAddedToComparison();
        tvProductPage.returnToTvListPage();

        tvListPage.openSelectedTvPage(TV_NAME_2);
        tvProductPage.addToComparison();
        tvProductPage.verifyAddedToComparison();
        tvProductPage.openComparisonPage();

        comparisonPage.verifyProductNamesAreCorrect(TV_NAME_1, TV_NAME_2);
    })
})

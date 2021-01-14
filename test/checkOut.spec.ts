import homePage from "../pages/home.page";
import loginWindow from "../pages/login.modal";
import catalogPage from "../pages/catalog.page";
import tvListPage from "../pages/tvList.page";
import tvProductPage from "../pages/tvProduct.page";
import cartPage from "../pages/cart.page";
import checkOutPage from "../pages/checkOut.page";

import loginData from "../data/loginData.json";

const user1 = loginData.user1;
const TV_NAME_1 = 'Samsung UE50TU8000U';

describe('User can select item and proceed to check out page', () => {

    it('Logged in user can add item into basket and proceed to check out page', () => {
        homePage.visitPage();
        homePage.openLoginModal();

        loginWindow.typeEmail(user1.email);
        loginWindow.typePassword(user1.password);
        loginWindow.clickLogInButton();

        homePage.openCatalogPage();
        catalogPage.openTvListPage();

        tvListPage.openSelectedTvPage(TV_NAME_1);
        tvProductPage.addTvToCart();
        tvProductPage.verifyTvInCart();
        tvProductPage.proceedToCartPage();

        cartPage.verifyProductNameIsCorrect(TV_NAME_1);

        cartPage.proceedToCheckOutPage();

        checkOutPage.verifyPageUrl();
    })

    it('User can remove item from cart', () => {
        homePage.visitPage();
        homePage.openCartPage();
        cartPage.removeAllItemsFromCart();
        browser.refresh();
        cartPage.verifyCartIsEmpty();
    })
})

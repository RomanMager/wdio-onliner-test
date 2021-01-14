import Page from "./page";
import { Element } from "@wdio/sync";

class TvProductPage extends Page {

    get addToComparisonCheckbox(): Element {
        return $('#product-compare-control');
    }

    get linkToComparisonPage(): Element {
        return $('#compare-button-container .compare-button a[href]');
    }

    get offersAsideMenu(): Element {
        return $('#shop-offers-container');
    }

    get addToCartButton(): Element {
        this.offersAsideMenu.waitForDisplayed();
        return this.offersAsideMenu.$('a.button_orange');
    }

    get goToCartButton(): Element {
        this.offersAsideMenu.waitForDisplayed();
        return this.offersAsideMenu.$('a.button_orange*=В корзине');
    }

    addToComparison(): void {
        this.addToComparisonCheckbox.waitForDisplayed();
        this.addToComparisonCheckbox.waitForClickable();
        this.addToComparisonCheckbox.click();
    }

    returnToTvListPage(): void {
        browser.back();
    }

    openComparisonPage(): void {
        const link = this.linkToComparisonPage.getAttribute('href');
        browser.url(link);
    }

    addTvToCart(): void {
        this.addToCartButton.click();
    }

    proceedToCartPage(): void {
        this.goToCartButton.click();
    }

    verifyAddedToComparison(): void {
        expect(this.addToComparisonCheckbox.$('input[type="checkbox"]'))
            .toBeSelected();
    }

    verifyTvInCart(): void {
        expect(this.addToCartButton.getText()).toContain('В корзине');
    }

}

export default new TvProductPage();

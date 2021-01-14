import Page from "./page";
import { Element } from "@wdio/sync";

class CartPage extends Page {

    get productName(): Element {
        return $('.cart-form__offers-part_data a');
    }

    get checkOutButton(): Element {
        return $('.cart-form__offers')
            .$('.cart-form__control a.button-style_primary');
    }

    get removeButton(): Element {
        return $('a.cart-form__button_remove');
    }

    get emptyCartMessage(): Element {
        return $('.cart-message__title');
    }

    public proceedToCheckOutPage(): void {
        this.checkOutButton.waitForExist();
        this.checkOutButton.click();
    }

    public removeAllItemsFromCart(): void {
        this.removeButton.waitForExist();
        this.removeButton.moveTo();
        browser.waitUntil(() => {
            return this.removeButton.isDisplayed() && this.removeButton.isClickable()
        })

        this.removeButton.click();
    }

    public verifyProductNameIsCorrect(productName: string): void {
        expect(this.productName.getText()).toContain(productName);
    }

    public verifyCartIsEmpty(): void {
        this.emptyCartMessage.waitForDisplayed();

        expect(this.emptyCartMessage.getText()).toEqual('Ваша корзина пуста');
    }
}

export default new CartPage();

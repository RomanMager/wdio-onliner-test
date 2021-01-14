import Page from "./page";
import { Element } from "@wdio/sync";

class HomePage extends Page {

    // Getters
    get userBar(): Element {
        return $('#userbar');
    }

    get loginWindow(): Element {
        return this.userBar.$('.auth-bar--top*=Вход');
    }

    get navigationBar(): Element {
        return $('ul.b-main-navigation');
    }

    get catalogPageLink(): Element {
        return this.navigationBar.$('li*=Каталог');
    }

    get cart(): Element {
        return this.userBar.$('#cart-desktop');
    }

    public visitPage(): void {
        super.visitPage('/');
    }

    public openLoginModal(): void {
        this.loginWindow.click();
    }

    public openCatalogPage(): void {
        this.catalogPageLink.waitForDisplayed();
        this.catalogPageLink.click();
    }

    public openCartPage(): void {
        this.cart.waitForDisplayed();
        this.cart.click();
    }
}

export default new HomePage();

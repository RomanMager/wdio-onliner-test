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

    public visitPage() {
        super.visitPage('/');
    }

    public openLoginModal() {
        this.loginWindow.click();
    }

    public openSearch() {

    }
}

export default new HomePage();

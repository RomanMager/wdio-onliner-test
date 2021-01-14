import Page from "./page";
import { Element } from "@wdio/sync";

class CheckOutPage extends Page {

    public verifyPageUrl(): void {
        browser.pause(5000);
        expect(browser.getUrl()).toEqual('https://cart.onliner.by/order');
    }
}

export default new CheckOutPage();

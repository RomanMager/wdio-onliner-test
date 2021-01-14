import Page from "./page";
import { Element } from "@wdio/sync";

class ComparisonPage extends Page { 

    get productNames(): Element[] {
        return $$('th span.product-summary__caption');
    }

    verifyProductNamesAreCorrect(firstProductName: string, secondProductName: string): void {
        const firstProduct = this.productNames[0];
        const secondProduct = this.productNames[1];

        expect(firstProduct.getText()).toContain(firstProductName);
        expect(secondProduct.getText()).toContain(secondProductName);
    }
}

export default new ComparisonPage();

import { Element } from "@wdio/sync";

class SearchPage {

    get searchBarInput(): Element {
        return $('input.fast-search__input')
    }

    get searchIframe(): Element {
        return $('.modal-iframe');
    }

    get searchIframeBody(): Element {
        return $('body #search-page');
    }

    get searchResultParent(): Element {
        return this.searchIframeBody.$('ul.search__results');
    }

    get searchResultsList(): Element[] {
        return this.searchResultParent.$$('li.search__result');
    }

    get itemTitle(): Element {
        return $('.product__details a');
    }

    public typeSearchQuery(query: string): void {
        this.searchBarInput.waitForExist();
        this.searchBarInput.click();
        this.searchBarInput.setValue(query);
    }

    public verifyResultsAreNotEmpty(): void {
        this.searchIframe.waitForDisplayed();
        browser.switchToFrame(this.searchIframe);
    }

    public verifyResultsContainValidInfo(searchQuery: string) {
        this.searchIframe.waitForDisplayed();
        browser.switchToFrame(this.searchIframe);

        this.searchResultsList.forEach(item => {
            console.log(item);
            let title = item.$('.product__title a.product__title-link');

            expect(title.getText()).toHaveTextContaining(searchQuery);
        })        
    }
}

export default new SearchPage();

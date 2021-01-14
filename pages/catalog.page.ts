import Page from "./page";
import { Element } from "@wdio/sync";

class CatalogPage extends Page {

    get catalogNavBar(): Element {
        return $('ul.catalog-navigation-classifier');
    }

    get category(): Element {
        return this.catalogNavBar.$('[data-id="1"]');
    }

    get subCategoriesList(): Element[] {
        return $('.catalog-navigation-list_opened')
            .$('.catalog-navigation-list__aside-list')
            .$$('.catalog-navigation-list__aside-item');
    }

    get itemsInDropdown(): Element[] {
        return $('.catalog-navigation-list__aside-item_active')
            .$('.catalog-navigation-list__dropdown-list')
            .$$('a.catalog-navigation-list__dropdown-item');
    }

    public openTvListPage(): void {
        this.category.click();
        this.subCategoriesList[1].click();
        this.itemsInDropdown[0].click();
    }
}

export default new CatalogPage();

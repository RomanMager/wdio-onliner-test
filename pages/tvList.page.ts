import Page from "./page";
import { Element } from "@wdio/sync";

class TvListPage extends Page {

    openSelectedTvPage(tvName: string): void {
        const selectedTv = $(`.schema-product__title*=${tvName}`);
        selectedTv.scrollIntoView();
        selectedTv.click();
    }
}

export default new TvListPage();

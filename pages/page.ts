
export default abstract class Page {

    public visitPage(path: string): void {
        browser.url(path);
    }
}

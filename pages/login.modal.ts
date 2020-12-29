import { Element } from "@wdio/sync";

class LoginModalWindow {

    // Getters
    get loginFormWindow(): Element {
        return $('.auth-form form');
    }

    get emailInputField(): Element {
        return this.loginFormWindow.$$('input.auth-input_primary')[0];
    }

    get passwordInputField(): Element {
        return this.loginFormWindow.$$('input.auth-input_primary')[1];
    }

    get submitButton(): Element {
        return this.loginFormWindow.$('button.auth-button');
    }

    get loginErrorMessage(): Element {
        return this.loginFormWindow.$('.auth-form__description_error')
    }

    public typeEmail(email: string): void {
        this.loginFormWindow.waitForDisplayed();
        this.emailInputField.setValue(email);
    }

    public typePassword(password: string): void {
        this.loginFormWindow.waitForDisplayed();
        this.passwordInputField.setValue(password);
    }

    public clickLogInButton(): void {
        this.submitButton.waitForExist()
        this.submitButton.waitForClickable();
        this.submitButton.click();
    }

}

export default new LoginModalWindow();

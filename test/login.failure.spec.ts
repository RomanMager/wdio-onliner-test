import homePage from "../pages/home.page";
import loginWindow from "../pages/login.modal";

const incorrectData = {
    email: 'test@test.com',
    password: 'test123'
};

describe('Test login functionality using invalid credentials', () => {

    it('Should display a warning message when password field is empty', () => {
        homePage.visitPage();
        homePage.openLoginModal();
        loginWindow.typeEmail(incorrectData.email);
        loginWindow.clickLogInButton();

        expect(incorrectData.email).toEqual(loginWindow.emailInputField.getValue());
        expect(loginWindow.loginErrorMessage.getText()).toEqual('Укажите пароль');
    })

    it('Should display a warning message when email field is empty', () => {
        homePage.visitPage();
        homePage.openLoginModal();
        loginWindow.typePassword(incorrectData.password);
        loginWindow.clickLogInButton();

        expect(incorrectData.password).toEqual(loginWindow.passwordInputField.getValue());
        expect(loginWindow.loginErrorMessage.getText()).toEqual('Укажите ник или e-mail');
    })

    it('Should display a warning message when email/password is incorrect', () => {
        homePage.visitPage();
        homePage.openLoginModal();
        loginWindow.typeEmail(incorrectData.email);
        loginWindow.typePassword(incorrectData.password);
        loginWindow.clickLogInButton();

        expect(incorrectData.email).toEqual(loginWindow.emailInputField.getValue());
        expect(incorrectData.password).toEqual(loginWindow.passwordInputField.getValue());
        expect(loginWindow.loginErrorMessage.getText()).toEqual('Неверный логин или пароль');
    })

})

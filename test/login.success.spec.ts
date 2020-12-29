import homePage from "../pages/home.page";
import loginWindow from "../pages/login.modal";
import loginData from "../data/loginData.json";

const user1 = loginData.user1;

describe('Test login functionality using valid credentials', () => {

    it('Should enter email', () => {
        homePage.visitPage();
        homePage.openLoginModal();        
        loginWindow.typeEmail(user1.email);

        expect(user1.email).toEqual(loginWindow.emailInputField.getValue());
    })

    it('Should enter password', () => {
        loginWindow.typePassword(user1.password);

        expect(user1.password).toEqual(loginWindow.passwordInputField.getValue());
    })

    it('Should login with valid credentials', () => {
        loginWindow.clickLogInButton();

        expect(loginWindow.loginErrorMessage.isExisting()).toEqual(false);
    })
})

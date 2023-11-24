const jtesting = require('./jilto_testing');


class objMainPage{

    lstHeader = [`<link rel="stylesheet" type="text/css" href="semantic.min.css">`,
    `<script src="jquery-3.1.1.min.js"></script>
  <script src="semantic.min.js"></script>`];

    pageName = "Home page";
    lstTopLinks = [{ href: '/home', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' }];

    createMainMenu(){
        var lstMainLinks = jtesting.generateLinks(this.lstTopLinks,"item");
        var menuHeader = jtesting.generateDiv(this.pageName,"header item");
        const textInputHtml = jtesting.generateInput("text", "txtSearch", "", "", "Enter search");

        var search = jtesting.generateDiv(textInputHtml,"ui right item input");
        var mainMenu = jtesting.generateDiv(menuHeader+lstMainLinks+search,"ui menu");

        return mainMenu;
    }

    render(lstContent){
        const mainHeaders = this.lstHeader.join('');
        lstContent.unshift(this.createMainMenu());
        const mainContent = lstContent.join(''); 
        var template = jtesting.generateHtmlPage(this.pageName,mainHeaders,mainContent);
        return template;
    }
}


module.exports = objMainPage;
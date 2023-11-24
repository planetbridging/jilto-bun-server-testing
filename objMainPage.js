const jtesting = require('./jilto_testing');

class ObjMainPage {
    // Define the header elements for the page (styles and scripts)
    lstHeader = [
        `<link rel="stylesheet" type="text/css" href="semantic.min.css">`,
        `<script src="jquery-3.1.1.min.js"></script>
         <script src="semantic.min.js"></script>`
    ];

    // Define the page title
    pageName = "Home page";

    // Define the list of top navigation links
    lstTopLinks = [
        { href: '/home', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/contact', text: 'Contact' }
    ];

    // Create the main menu of the page
    createMainMenu() {
        // Generate the navigation links
        var lstMainLinks = jtesting.generateLinks({
            lstLinks: this.lstTopLinks,
            linkClass: "item"
        });

        // Generate the menu header
        var menuHeader = jtesting.generateDiv({
            content: this.pageName,
            divClass: "header item"
        });

        // Generate the search input field
        const textInputHtml = jtesting.generateInput({
            inputType: "text",
            inputName: "txtSearch",
            placeholder: "Enter search"
        });

        // Generate the search bar div
        var search = jtesting.generateDiv({
            content: textInputHtml,
            divClass: "ui right item input"
        });

        // Combine the menu header, links, and search bar into the main menu div
        var mainMenu = jtesting.generateDiv({
            content: menuHeader + lstMainLinks + search,
            divClass: "ui menu"
        });

        return mainMenu;
    }

    // Render the entire page content
    render(lstContent) {
        // Combine header elements into a single string
        const mainHeaders = this.lstHeader.join('');

        // Add the main menu to the beginning of the content list
        lstContent.unshift(this.createMainMenu());

        // Combine all content elements into a single string
        const mainContent = lstContent.join(''); 

        // Generate the full HTML page
        var template = jtesting.generateHtmlPage({
            pageTitle: this.pageName,
            headHtml: mainHeaders,
            contentHtml: mainContent
        });

        return template;
    }
}

module.exports = ObjMainPage;

const express = require('express');
const jilto = require('jilto');
const jtesting = require('./jilto_testing');
const objMainPage = require('./objMainPage');

const port = 4123;

(async () => {
    console.log("jilto testing ground");

    await startup();

  })();


  async function startup(){

    const app = express();

        // Middleware to serve static files from 'public' directory
      app.use(express.static('public'));

      // API endpoint
      app.get('/', async(req, res) => {
        //res.json({ message: 'Welcome to the API!' });
        //var lstSchemaAndMore = await oSql.getDetailedSchema(db);
        //res.send(lstSchemaAndMore);
        // Example usage of jilto to create an HTML list
        const items = ["Item 1", "Item 2", "Item 3"];  // Sample list items
        const htmlList = jilto.generateList(items, "my-ul-class", "my-li-class");

        const items2 = [htmlList, "Item 2", "Item 3"];  // Sample list items
        const htmlList2 = jilto.generateList(items2, "my-ul-class", "my-li-class");


        const arrayOfStrings = [htmlList2,htmlList2,htmlList2];
        const concatenatedString = arrayOfStrings.join('');

        //pageTitle = 'Page Title', headHtml = '', contentHtml = ''
        //var template = jtesting.generateHtmlPage("Home page","",concatenatedString);

        var oHome = new objMainPage();
        // Send the generated HTML as response
        res.send(oHome.render([concatenatedString]));
      });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
}


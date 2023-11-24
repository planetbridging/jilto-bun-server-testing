// Generic function to create HTML elements
// Generic function to create HTML elements
function createElement(tagName, attributes = {}, content = '') {
    const attrs = Object.entries(attributes)
                        .filter(([key, value]) => value !== "" && value != null)
                        .map(([key, value]) => `${key}="${value}"`)
                        .join(' ');
    return `<${tagName} ${attrs}>${content}</${tagName}>`;
}

// Function to generate a list
function generateList({ items, ulClass = "", liClass = "", ulId = "" }) {
    const listItems = items.map(item => createElement('li', { class: liClass, id: item.id }, item.content)).join('');
    return createElement('ul', { class: ulClass, id: ulId }, listItems);
}

// Function to generate a table
function generateTable({ data, tableClass = "", tableId = "" }) {
    const rows = data.map(row => 
        createElement('tr', {}, row.map(cell => createElement('td', {}, cell)).join(''))
    ).join('');
    return createElement('table', { class: tableClass, id: tableId }, rows);
}

// Function to generate a paragraph
function generateParagraph({ text, pClass = "", pId = "" }) {
    return createElement('p', { class: pClass, id: pId }, text);
}

// Function to generate links
function generateLinks({ lstLinks, linkClass = "", containerId = "" }) {
    const linkItems = lstLinks.map(link => generateHref({ url: link.href, text: link.text, linkClass, linkId: link.id })).join('');
    return createElement('div', { class: linkClass, id: containerId }, linkItems);
}

// Function to generate a hyperlink
function generateHref({ url, text, linkClass = "", linkId = "" }) {
    return createElement('a', { href: url, class: linkClass, id: linkId }, text);
}

// Function to generate a navbar
function generateNavbar({ links, navClass = "", linkClass = "", navId = "" }) {
    const navItems = links.map(link => generateHref({ url: link.href, text: link.text, linkClass, linkId: link.id })).join('');
    return createElement('nav', { class: navClass, id: navId }, navItems);
}

// Function to generate a div with content
function generateDiv({ content, divClass = "", divId = "" }) {
    return createElement('div', { class: divClass, id: divId }, content);
}

// Function to generate an input field
function generateInput({ inputType, inputName, inputValue = "", inputClass = "", placeholder = "", inputId = "" }) {
    const inputAttributes = {
        type: inputType,
        name: inputName,
        value: inputValue,
        class: inputClass,
        placeholder: placeholder,
        id: inputId
    };
    return createElement('input', inputAttributes);
}

// Function to create a simple home page
function generateHtmlPage({ pageTitle = 'Page Title', headHtml = '', contentHtml = '' }) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${pageTitle}</title>
            ${headHtml}
        </head>
        <body>
            ${contentHtml}
        </body>
        </html>
    `;
}

// Export the functions
module.exports = {
    createElement,
    generateList,
    generateTable,
    generateParagraph,
    generateNavbar,
    generateHtmlPage,
    generateLinks,
    generateHref,
    generateDiv,
    generateInput
};



/*cmds needed to maintain (because i forget)


npm version patch  # for backward-compatible bug fixes
npm version minor  # for new features that are backward compatible
npm version major  # for changes that break backward compatibility

npm run build


git add .
git commit -m "Updated package with new features/fixes"
git push

npm publish
*/
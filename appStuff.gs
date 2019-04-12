/* What should the add-on do after it is installed */
function onInstall() {
  onOpen();
}

/* What should the add-on do when a document is opened */
function onOpen() {
  DocumentApp.getUi()
  .createAddonMenu() // Add a new option in the Google Docs Add-ons Menu
  .addItem("Google Maps", "showSidebar")
  .addToUi();  // Run the showSidebar function when someone clicks the menu
}

/* Show a 300px sidebar with the HTML from googlemaps.html */
function showSidebar() {
  var html = HtmlService.createTemplateFromFile("googlemaps")
    .evaluate()
    .setTitle("Google Maps - Search"); // The title shows in the sidebar
  DocumentApp.getUi().showSidebar(html);
}

/* This Google Script function does all the magic. */
function insertGoogleMap(e) {  
  var map = Maps.newStaticMap()
    .setSize(800, 600) // Insert a Google Map 800x600 px
    .setZoom(15)
    .setCenter(e); // e contains the address entered by the user
  
  DocumentApp.getActiveDocument()
    .getCursor() // Find the location of the cursor in the document
    .insertInlineImage(map.getBlob()); // insert the image at the cursor
}
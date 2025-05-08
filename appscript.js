function doGet(e) {
  var sheetName = e.parameter.sheet;
  
  if (!sheetName) {
    return ContentService.createTextOutput("Please provide a 'sheet' parameter in the URL.")
                         .setMimeType(ContentService.MimeType.TEXT);
  }

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    return ContentService.createTextOutput("Sheet named '" + sheetName + "' not found.")
                         .setMimeType(ContentService.MimeType.TEXT);
  }

  var data = sheet.getDataRange().getValues();

  // Use second row as headers (index 1)
  var headers = data[1]; // Second row
  var rows = [];

  // Start from third row (index 2) to get actual data
  for (var i = 2; i < data.length; i++) {
    var rowObject = {};
    for (var j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = data[i][j];
    }
    rows.push(rowObject);
  }

  return ContentService.createTextOutput(JSON.stringify(rows))
                       .setMimeType(ContentService.MimeType.JSON);
}

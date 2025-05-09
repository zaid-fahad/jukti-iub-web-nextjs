// function doGet(e) {
//   var sheetName = e.parameter.sheet;
  
//   if (!sheetName) {
//     return ContentService.createTextOutput("Please provide a 'sheet' parameter in the URL.")
//                          .setMimeType(ContentService.MimeType.TEXT);
//   }

//   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//   var sheet = spreadsheet.getSheetByName(sheetName);
  
//   if (!sheet) {
//     return ContentService.createTextOutput("Sheet named '" + sheetName + "' not found.")
//                          .setMimeType(ContentService.MimeType.TEXT);
//   }

//   var data = sheet.getDataRange().getValues();

//   // Use second row as headers (index 1)
//   var headers = data[1]; // Second row
//   var rows = [];

//   // Start from third row (index 2) to get actual data
//   for (var i = 2; i < data.length; i++) {
//     var rowObject = {};
//     for (var j = 0; j < headers.length; j++) {
//       rowObject[headers[j]] = data[i][j];
//     }
//     rows.push(rowObject);
//   }

//   return ContentService.createTextOutput(JSON.stringify(rows))
//                        .setMimeType(ContentService.MimeType.JSON);
// }


function doGet(e) {
  var sheetName = e.parameter.sheet;
  var targetId = e.parameter.id;

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
  var headers = data[1];
  var rows = [];

  // Start from third row (index 2) to get actual data
  for (var i = 2; i < data.length; i++) {
    var rowObject = {};
    for (var j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = data[i][j];
    }
    rowObject.id = i + 1; // Spreadsheet row index (1-based)
    rows.push(rowObject);
  }

  // If an id is provided, return only that row
  if (targetId) {
    var filtered = rows.find(r => r.id == targetId);
    if (filtered) {
      return ContentService.createTextOutput(JSON.stringify(filtered))
                           .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput("Row with id " + targetId + " not found.")
                           .setMimeType(ContentService.MimeType.TEXT);
    }
  }

  // Return all rows if no id is provided
  return ContentService.createTextOutput(JSON.stringify(rows))
                       .setMimeType(ContentService.MimeType.JSON);
}

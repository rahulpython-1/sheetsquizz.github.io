var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('---------Replace with your sheet name---------'); 

function doPost(e) {
  var params = JSON.parse(e.postData.contents);
  
  var name = params.name;
  var rollNumber = params.roll;
  var marks = params.marks;
  
  sheet.appendRow([name, rollNumber, marks]);
  
  return ContentService.createTextOutput("Data saved successfully.");
}

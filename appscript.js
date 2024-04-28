//paste this app script in your google sheet which contains the quizz and make changes according to you


function doGet(req) {
    var doc =SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("-----------your sheet name ----------------");
    var value=sheet.getDataRange().getValues();
    var output =[];
    for(var i=0;i<value.length;i++)
    {
      var row={};
      row['question']=value[i][0];
      row['option1']=value[i][1];
      row['option2']=value[i][2];
      row['option3']=value[i][3];
      row['option4']=value[i][4];
      row['correctanswer']=value[i][5];
      output.push(row);
    }
    return ContentService.createTextOutput(JSON.stringify({data:output})).setMimeType(ContentService.MimeType.JSON);
  }
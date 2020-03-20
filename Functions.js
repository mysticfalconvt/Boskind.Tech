function lastRowForColumn(sheet, column){
  // Get the last row with data for the whole sheet.
  var numRows = sheet.getLastRow();
  
  // Get all data for the given column
  var data = sheet.getRange(1, column, numRows).getValues();
  
  // Iterate backwards and find first non empty cell
  for(var i = data.length - 1 ; i >= 0 ; i--){
    if (data[i][0] != null && data[i][0] != ""){
      return i + 1;
    }
  }
}



function getUserEmail() {
  var userEmail = Session.getActiveUser().getEmail();
 
  return userEmail;
 }
 
 
 //Student Search
  
function getTableData(studentName) {
 
  if(studentName){
     var filterlogic = function(item){
            if(String(item[0].toLowerCase()).indexOf(studentName.toLowerCase()) > -1) {
              return true;
            }
            else {
              return false;
            }
            };
    
    
    var sorted = studentData.filter(filterlogic);
   Logger.log(sorted);
  
    return sorted; 
    } else {
    return studentData;
    }
}


// get list of students for autocomplete
function getStudentList(){
  
  var options = {};
  studentNames.forEach(function(v){
    options[v[0]] = null;
   
  });
  return options;
  };
  
  function addRecord(studentName,comment,category){
  Logger.log(studentName);
  Logger.log(comment);
  var teacherName = Session.getActiveUser().getEmail();
  var now = new Date();

  insertRow(dataSheet, [studentName, teacherName, now, category, comment],2);
  };
  
  function insertRow(sheet, rowData, optIndex) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try { 
    var index = optIndex || 1;
    sheet.insertRowBefore(index).getRange(index, 1, 1, rowData.length).setValues([rowData]);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
}
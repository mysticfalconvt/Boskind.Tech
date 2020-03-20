var ssid = "1NCe3PSt5Xls6Zp4GHl1N3bYciGhTDCleF52ITJHfFOw";
var ss = SpreadsheetApp.openById(ssid);
var dataSheet = ss.getSheetByName("Student Data");
var nameSheet = ss.getSheetByName("Student Names");
var teacherSheet = ss.getSheetByName("Teacher Emails");
var catSheet = ss.getSheetByName("Categories");
var studentData = dataSheet.getRange(2, 1, lastRowForColumn(dataSheet, 1), 6).getDisplayValues();
var studentNames = nameSheet.getRange(1, 1, lastRowForColumn(nameSheet, 1), 1).getDisplayValues();
var teacherEmails = teacherSheet.getRange(2, 1, lastRowForColumn(teacherSheet, 1), 1).getDisplayValues();
var categories = catSheet.getRange(1, 1, lastRowForColumn(catSheet, 1), 1).getDisplayValues();
var userEmail = Session.getActiveUser().getEmail();
var studentName;
var Route = {};
Route.path = function(route,callback){
  Route[route] = callback;
}
var teacherStrings = teacherEmails.toString().toLowerCase();
//var teacherEmailsLowercase = teacherEmails.map(function (val) { return val.toLowerCase(); });

function doGet(e) {

   var isTeacher = teacherStrings.indexOf(userEmail.toLowerCase());
   Logger.log(isTeacher);
   //check if teacher.  If no load student page
   if(isTeacher < 0){
    
   return loadStudent()
   } else {
             Route.path("loadLookup",loadLookup);
             Route.path("loadHome", loadHome);
             Route.path("loadAddRecord", loadAddRecord);
             if(Route[e.parameters.v]){
             
               return Route[e.parameters.v]();
              } else {
                return loadHome()
             }
             //else load student pages
   } 
} //end doGet

function loadHome() {
 var tmp = HtmlService.createTemplateFromFile("home");
  return tmp.evaluate();
}


function loadLookup() {
 var tmp = HtmlService.createTemplateFromFile("lookup");
  return tmp.evaluate();
}

function loadAddRecord() {
 var tmp = HtmlService.createTemplateFromFile("AddRecord");
 tmp.list = categories;
  return tmp.evaluate();
}

function loadStudent() {
 var tmp = HtmlService.createTemplateFromFile("Student Home");
 tmp.list = categories;
  return tmp.evaluate();
}



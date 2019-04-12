function setDocVariables(spreadsheet, docBody, spreadsheetVariableName, opt_docVariableName) {
  if (opt_docVariableName == null) {
    opt_docVariableName = spreadsheetVariableName;
  }
  var ssVarName = spreadsheetVariableName.toString();
  var docVarName = opt_docVariableName.toString();
  var newVariable = spreadsheet.getRangeByName(ssVarName).getDisplayValue();
  docBody.replaceText("<" + docVarName + ">", newVariable);
}

function setDocVariableFromRange(spreadsheet, sheetName, spreadsheetRange, docBody, docVarName) {
  var value = spreadsheet.getSheetByName(sheetName).getRange(spreadsheetRange).getDisplayValue();
  docBody.replaceText(docVarName, value);
}

function fillInDataFromMap(ss, body, map) {
  for (i in map.data) {
    setDocVariableFromRange(ss, map.sheet, map.data[i], body, i);
  }
}

function updateInclusions(ss, body, map) {
  for (i in map.data) {
    try {
      var incYesNo = ss.getRangeByName(i).getDisplayValue().toLowerCase();
      if (incYesNo == "yes") {
        map.data[i.toString()] = true;
      }
    } catch(error) {
      Logger.log(error.toString())
    }
  }
  
  var inclusionsText = "";
  var exclusionsText = "";
  
  for (key in map.data) {
    if (map.data[key.toString()] == true) {
      inclusionsText += map.text[key.toString()] += "\n";
    } else {
      exclusionsText += map.text[key.toString()] += "\n";
    }
  }
  body.replaceText("<inclusions>", inclusionsText.slice(0,-1));
  body.replaceText("<exclusions>", exclusionsText.slice(0,-1));
}

function getNameFromEmail(email) {
  var nameParts = email.split("@");
  var name = nameParts.length==2 ? nameParts[0] : null;
  
  var firstLast = name.split(".");
  var fullName = "";
  
  for (i in firstLast) {
    var string = firstLast[i].toString();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    fullName += string;
    fullName += " ";
  }
  return fullName.trim();
}


function AutofillDocFromTemplate(){
  var TEMPLATE_ID = "1hnz7-dV7QPthmPKwTBJKVq657zJRtjGwWcq99Gdtezk";
  var FILE_NAME = "New File";
  var FOLDER_ID = "1Lexr7GHBZ55Rw_jjEROb-Nl7wdX6dseq";
  var SPREADSHEET_ID = "1hxKvpPXnaYSsSmHOE1cIXPsdqL0PQeeW8xZJcz3n_2Y";
  
  var folder = DriveApp.getFolderById(FOLDER_ID);
  var ss = SpreadsheetApp.getActive();
  var docId = DriveApp.getFileById(TEMPLATE_ID).makeCopy(FILE_NAME, folder).getId();
  var doc = DocumentApp.openById(docId);
  var body = doc.getActiveSection();
  
  var user = Session.getActiveUser();
  var userEmail = user.getEmail();
  var userName = getNameFromEmail(userEmail);
  
  
  for (i in projectVariables) {
    setDocVariables(ss, doc, projectVariables[i]);
  }
  
  fillInDataFromMap(ss, body, timelineMappings);
  fillInDataFromMap(ss, body, costMappings);
  fillInDataFromMap(ss, body, paymentTermsMappings);
  updateInclusions(ss, body, inclusions);
  
  setDocVariables(ss, body, "land_used", "area");
  setDocVariableFromRange(ss, "Firm Inputs", "F137", body, "<total_5b_time>");
  setDocVariableFromRange(ss, "Firm Inputs", "E137", body, "<time_on_site>");
  setDocVariableFromRange(ss, "Project Inputs", "I61", body, "<inverter_ratio>");
  
  if (inclusions.data.supply_modules == true) {
    body.replaceText("<module_supply>", "Supplied by 5B");
  } else {
    body.replaceText("<module_supply>", "Free-issued by the customer");
  }
  
  if (inclusions.data.inverter_modules == true) {
    body.replaceText("<inverter_supply>", "Supplied by 5B");
  } else {
    body.replaceText("<inverter_supply>", "Free-issued by the customer");
  }
  
  var project_number = ss.getRangeByName("project_number").getDisplayValue();
  var company_name = ss.getRangeByName("company_name").getDisplayValue();
  var project_name = ss.getRangeByName("project_name").getDisplayValue();
  var power_dc_total = ss.getRangeByName("power_dc_total").getDisplayValue();
  
  var document_name = project_number + " - " + company_name + " - " + project_name + " - " + power_dc_total;
  body.replaceText("<document_name>", document_name);
  body.replaceText("<date_indicative_offer>", getLongDate());
  body.replaceText("<sales_person_email>", userEmail);
  body.replaceText("<sales_person>", userName);
  
  
  doc.saveAndClose()
}
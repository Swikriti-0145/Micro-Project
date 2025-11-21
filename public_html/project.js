// ---------------------------
// CONFIG
// ---------------------------
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

var projDBName = "COLLEGE-DB";
var projRelationName = "PROJECT-TABLE";

var connToken = "90934903|-31949256998981797|90959706";

$("#projId").focus();

// ---------------------------
// Save rec_no to Local Storage
// ---------------------------
function saveRecNo2LS(jsonObj) {
    var data = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", data.rec_no);
}

// ---------------------------
// Create JSON of Project ID
// ---------------------------
function getProjIdAsJsonObj() {
    return JSON.stringify({
        id: $("#projId").val()
    });
}

// ---------------------------
// Fill Form Data
// ---------------------------
function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);

    var record = JSON.parse(jsonObj.data).record;

    $("#projName").val(record.projectName);
    $("#assignedTo").val(record.assignedTo);
    $("#assignDate").val(record.assignmentDate);
    $("#deadline").val(record.deadline);
}

// ---------------------------
// Reset All Fields
// ---------------------------
function resetForm() {
    $("#projId").val("");
    $("#projName").val("");
    $("#assignedTo").val("");
    $("#assignDate").val("");
    $("#deadline").val("");
    $("#projId").prop("disabled", false);
    $("#saveBtn").prop("disabled", true);
    $("#updateBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", true);
    $("#projId").focus();
}

// ---------------------------
// Validate Data
// ---------------------------
function validateData() {
    var projId = $("#projId").val();
    var projName = $("#projName").val();
    var assignedTo = $("#assignedTo").val();
    var assignDate = $("#assignDate").val();
    var deadline = $("#deadline").val();

    if (projId === "") { alert("Project ID is missing"); $("#projId").focus(); return ""; }
    if (projName === "") { alert("Project Name is missing"); $("#projName").focus(); return ""; }
    if (assignedTo === "") { alert("Assigned To is missing"); $("#assignedTo").focus(); return ""; }
    if (assignDate === "") { alert("Assignment Date is missing"); $("#assignDate").focus(); return ""; }
    if (deadline === "") { alert("Deadline is missing"); $("#deadline").focus(); return ""; }

    var JsonStrObj = {
        id: projId,
        projectName: projName,
        assignedTo: assignedTo,
        assignmentDate: assignDate,
        deadline: deadline
    };
    return JSON.stringify(JsonStrObj);
}

// ---------------------------
// GET PROJECT RECORD
// ---------------------------
function getProj() {
    var projIdJsonObj = getProjIdAsJsonObj();

    var getRequest = createGET_BY_KEYRequest(
        connToken,
        projDBName,
        projRelationName,
        projIdJsonObj
    );

    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    // No record found → Save enabled
    if (resJsonObj.status === 400) {
        $("#saveBtn").prop("disabled", false);
        $("#updateBtn").prop("disabled", true);
        $("#resetBtn").prop("disabled", false);
        $("#projName").focus();
    }
    // Record exists → Update enabled
    else if (resJsonObj.status === 200) {
        $("#projId").prop("disabled", true);

        fillData(resJsonObj);

        $("#saveBtn").prop("disabled", true);
        $("#updateBtn").prop("disabled", false);
        $("#resetBtn").prop("disabled", false);

        $("#projName").focus();
    }
}

function saveData(){
      $("#saveBtn").prop("disabled", false);
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {return "";}

    var putRequest = createPUTRequest(
        connToken,
        jsonStrObj,
        projDBName,
        projRelationName
    );

    jQuery.ajaxSetup({ async: false });
    executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
     $("#projId").focus();
}

function updateData() {
    $("#updateBtn").prop("disabled", true);
    var jsonChg = validateData();
     var recNo = localStorage.getItem("recno");

    var updateRequest = createUPDATERecordRequest(
        connToken,
        jsonChg,
        projDBName,
        projRelationName,
        recNo
    );

    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    resetForm();
    $("#projId").focus();
}
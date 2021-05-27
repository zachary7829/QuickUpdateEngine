inputdict = {"CurrentVersion":"0.1","RoutineHubID":"2647"};

let xhr = new XMLHttpRequest()
xhr.open('GET','https://routinehub.co/api/v1/shortcuts/' + inputdict.RoutineHubID + '/versions/latest',false);
xhr.send();
rhapioutput = xhr.responseText;

var CurrentVersion = inputdict.CurrentVersion;
var NewVersion = rhapioutput.Version;
if (CurrentVersion == NewVersion)
{
  result = "updated";
} else {
  if (CurrentVersion > NewVersion) {
    result = "rollback";
  } else {
    result = "update"
  }
}
document.write(result);
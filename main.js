inputdict = {"CurrentVersion":"0.1","RoutineHubID":"2647"};

let xhr = new XMLHttpRequest()
xhr.open('GET','https://routinehub.co/api/v1/shortcuts/' + inputdict.RoutineHubID + '/versions/latest',false);
xhr.send();
rhapioutput = JSON.parse(xhr.responseText);

CurrentVersion = inputdict.CurrentVersion;
NewVersion = rhapioutput.Version;
if (CurrentVersion == NewVersion)
{
  result = '{"result":"updated","NewVersion":"' + NewVersion + '"}';
} else {
  if (CurrentVersion > NewVersion) {
    result = '{"result":"rollback","NewVersion":"' + NewVersion + '"}';
  } else {
    result = '{"result":"update","NewVersion":"' + NewVersion + '"}';
  }
}
document.write(result);
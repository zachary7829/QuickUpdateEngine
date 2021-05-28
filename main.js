inputdict = {"CurrentVersion":"1.0","ID":"2647","Service":"RoutineHub"};

if (inputdict.Service == 'RoutineHub') {
 let xhr = new XMLHttpRequest()
 xhr.open('GET','https://routinehub.co/api/v1/shortcuts/' + inputdict.ID + '/versions/latest',false);
 xhr.send();
 apioutput = JSON.parse(xhr.responseText);
} else {
 let xhr = new XMLHttpRequest()
 xhr.open('GET',inputdict.Service + inputdict.ID,false);
 xhr.send();
 apioutput = JSON.parse(xhr.responseText);
}

CurrentVersion = inputdict.CurrentVersion;
NewVersion = apioutput.Version;
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
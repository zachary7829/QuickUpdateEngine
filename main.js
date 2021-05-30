inputdict = {"CurrentVersion":"1.0","ID":"2647","Service":"RoutineHub"};

let xhr = new XMLHttpRequest()
if (inputdict.Service == 'RoutineHub') {
 xhr.open('GET','https://routinehub.co/api/v1/shortcuts/' + inputdict.ID + '/versions/latest',false);
} else {
 xhr.open('GET',inputdict.Service + inputdict.ID,false);
}
xhr.send();
apioutput = JSON.parse(xhr.responseText);

if (inputdict.CurrentVersion == apioutput.Version)
{
  result = '{"result":"updated","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"3.4"}';
} else {
  if (inputdict.CurrentVersion > apioutput.Version) {
    result = '{"result":"rollback","NewVersion":"' + NewVersion + '","QuickUpdate Version":"3.4"}';
  } else {
    result = '{"result":"update","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"3.4"}';
  }
}

document.write(result);
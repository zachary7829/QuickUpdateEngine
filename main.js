let inputdict = {"CurrentVersion":"1.0","ID":"26470","Service":"RoutineHub","ShortcutName":"QuickUpdate"};

if (!(inputdict.Service.includes(':'))) {
  inputdict.Service = 'RoutineHub';
}

if (inputdict.Service == 'RoutineHub') {
  if (inputdict.ID == 0) {
    inputdict = {"CurrentVersion":"3.4","ID":"2647","Service":"RoutineHub","ShortcutName":"QuickUpdate"};
    document.write('{"result":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}');
  } else {
    inputdict.ID = inputdict.ID / 10;
    document.write('{"result":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}');
  }
} else {
  //If using a custom server QUEngine returns QU's dict for UCFU to not mess up UltraUpdate
  document.write('{"result":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"CurrentVersion":"3.4","ID":"2647","Service":"RoutineHub","ShortcutName":"QuickUpdate"}}');
}

let xhr = new XMLHttpRequest();
if (inputdict.Service == 'RoutineHub') {
 xhr.open('GET','https://routinehub.co/api/v1/shortcuts/' + inputdict.ID + '/versions/latest',false);
} else {
 xhr.open('GET',inputdict.Service + inputdict.ID,false);
}
xhr.send();
apioutput = JSON.parse(xhr.responseText);

if (inputdict.CurrentVersion == apioutput.Version)
{
  result = '{"result":"Updated","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"3.4","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
} else
{
  if (inputdict.CurrentVersion > apioutput.Version) {
    result = '{"result":"Rollback","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"3.4","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
  } else {
    result = '{"result":"Update","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"3.4","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
  }
}

if (!(result.includes('a')))result = '{"result":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';

document.body.innerHTML = '';
document.write(result);
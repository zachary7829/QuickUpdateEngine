//QuickUpdateEngineAPI Build 2021-09-19, Created by Zachary Keffaber (zachary7829), open sourced under GPLv3 License.

let inputdict = {"CurrentVersion":"1.0","ID":"2647","Service":"RoutineHub","ShortcutName":"QuickUpdate"};

if (!(inputdict.Service.includes(':'))) {
  inputdict.Service = 'RoutineHub';
}

if (inputdict.Service == 'RoutineHub') {
  if(!(parseFloat(inputdict.ID)==inputdict.ID)) {
    inputdict = {"CurrentVersion":"4.0","ID":2647,"Service":"RoutineHub","ShortcutName":"QuickUpdate"};
    document.write('{"result":"Updated","errors":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}');
  } else {
    document.write('{"result":"Updated","errors":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}');
  }
} else {
  //If using a custom server QUEngine returns QU's dict for UCFU to not fuck up UltraUpdate
  document.write('{"result":"Updated","errors":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Current Version":"4.0","RoutineHub ID":"2647","Service":"RoutineHub","Shortcut Name":"QuickUpdate"}}');
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
  result = '{"result":"Updated","errors":"none","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"4.0","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
} else
{
  if (inputdict.CurrentVersion > apioutput.Version) {
    result = '{"result":"Rollback","errors":"none","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"4.0","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
  } else {
    result = '{"result":"Update","errors":"none","NewVersion":"' + apioutput.Version + '","QuickUpdate Version":"4.0","OldVersion":"' + inputdict.CurrentVersion + '","UCFU":{"Shortcut Name":"' + inputdict.ShortcutName + '","Current Version":"' + inputdict.CurrentVersion + '","RoutineHub ID":"' + inputdict.ID + '"}}';
  }
}

if (!(result.includes('a')))result = '{"result":"Updated","errors":"NO INTERNET/ROUTINEHUB DOWN","UCFU":{"Current Version":"4.0","RoutineHub ID":"2647","Service":"RoutineHub","Shortcut Name":"QuickUpdate"}}';

document.body.innerHTML = '';
document.write(result);

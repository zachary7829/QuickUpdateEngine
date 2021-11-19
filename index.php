<html>
  <head>
    <title>QuickUpdateEngineAPI</title>
  </head>
  <body>
    <?php
    $name = 'QuickUpdate';
    $id = 2647;
    $currentversion = '3.3';
    $xml = file_get_contents('https://routinehub.co/api/v1/shortcuts/' . $id . '/versions/latest');
    $obj = json_decode($xml);
    if ($obj->Version == $currentversion){
      $result = '{"result":"Updated","errors":"none"","UCFU":{"Shortcut Name":"' . $name . '","Current Version":"' . $currentversion. '","RoutineHub ID":"' . $id . '"}}';
      echo $result."<br>";
    } else {
      if ($obj->Version < $currentversion){
      $result = '{"result":"Rollback","errors":"none"","UCFU":{"Shortcut Name":"' . $name . '","Current Version":"' . $currentversion. '","RoutineHub ID":"' . $id . '"}}';
      echo $result."<br>";
      } else {
        $result = '{"result":"Update","errors":"none"","UCFU":{"Shortcut Name":"' . $name . '","Current Version":"' . $currentversion. '","RoutineHub ID":"' . $id . '"}}';
        echo $result."<br>";
      }
    }
    
    ?> 
  </body>
</html>

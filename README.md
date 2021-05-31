# QuickUpdateEngineAPI
The update engine API used in QuickUpdate 3.4 and above. (Yes I know my code is currently shit, it will be better later, but it still works so ig I'll use it for now)

# Dictionary Keys
The first line of the engine is the inputdict dictionary. Replace `CurrentVersion` with the current version of the shortcut, `ID` with the ID of the shortcut (if you're using a custom server, just have the ID be "10"), `ShortcutName` with the name of the shortcut, and `Service` with either RoutineHub or the URL to the custom service you are using. (Note that if you're using RoutineHub, this is optional and you can leave the Service key empty, as it will autofill with RoutineHub)

# Custom Server Support
Custom server support with the QuickUpdate Engine is currently experimental. The custom server must allow cross origin as well as output a dictionary. Currently the only key needed is `Version`, however in the future `result` will be required to output the value "success".

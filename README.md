# QuickUpdateEngineAPI
The update engine API used in QuickUpdate 4.0 and above. (Yes I know my code is currently shit, it will be better later, but it still works so ig I'll use it for now)

# About QuickUpdateEngineAPI
QuickUpdateEngineAPI is the update engine used in QuickUpdate 4.0 and above (which is just the same thing I said as above). QuickUpdate originally released with version checking, but when 1.4 came around it was updated with if otherwise instead. A problem with this approch is that while on modern iOS versions (iOS 13 and later), this does grant fully worded version support as well, but however back when it initially released, there was a bug with iOS 12 if statements unless there was a number before both string, they wouldn't correctly compare. I solved this in QuickUpdate 2.2 with 0Masking, the first time an updater ever supported fully worded versions. However, as time has gone on, I've realized more and more that maybe there could be a better way of handling it, and maybe even differ rollbacks instead of just detecting them as well. If the get request to the server and the version comparing were both done in one engine, it could be a significant benefit to performance, and possibly even more significant if you added some more of the updater inside of the engine, hence why I started work on QuickUpdateEngineAPI, and made it's first open source public release in 2021 on May 27th.

# Dictionary Keys
The first line of the engine is the inputdict dictionary. Replace `CurrentVersion` with the current version of the shortcut, `ID` with the ID of the shortcut (if you're using a custom server, you shouldn't need the ID key), `ShortcutName` with the name of the shortcut, and `Service` with either RoutineHub or the URL to the custom service you are using. (Note that if you're using RoutineHub, this is optional and you can leave the Service key empty, as it will autofill with RoutineHub)

# Custom Server Support
Custom server support with the QuickUpdate Engine is currently experimental. The custom server must allow cross origin as well as output a dictionary. Currently the only key needed is `Version`, however in the future `result` may be required to output the value "success".

# Error Handling
Error handling in this current build of QuickUpdateEngineAPI (Build 2021-09-19) is not complete yet. However, do keep in mind that whenever there are not any errors, QuickUpdateEngineAPI will output "none". When it cannot get a connection to the server it is trying to fetch update data from, it will output "NO INTERNET/ROUTINEHUB DOWN". Keep in mind this may be changed in later builds to instead show the `message` output from the server instead if the request outputs one.

# UCFU Support
In the dictionary QuickUpdateEngineAPI outputs, there's a *little* key called `UCFU`, which contains a dictionary for a UCFU file for UltraUpdate. This is useful if you plan on adding UCFU support to your updater. All you need to do with QuickUpdateEngineAPI is create the folder 'UltraUpdate/Updated' if the user doesn't have it already, and save the output of the `UCFU` key to a json file that's name is your shortcut's RoutineHub ID.

# To-Do:

-Some tidying up with Custom Servers and how they're handled

-Better error handling

-Adding download URL on return from API

-Return base64 encoded QuickUpdate vCard in API

-Return `IsChangeAvailable` dictionary key **only** if there is a rollback/update available, might make QU an action faster

-Auto-returning the shortcut's ID as a name if no name was inputted in the `ShortcutName` field

-Still gotta work on not constructing json from strings, the way I do currently is really messy

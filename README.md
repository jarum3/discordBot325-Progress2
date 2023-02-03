# Jakob Robinson - CSC-325 Discord Bot
This is still just a skeleton, with some files to get basic functionality working.

## .env
This bot requires a .env file, titled `.env` as its full name, with no hidden file extensions, in the root directory of the application, in the same location as package.json

The structure of  that file should look like this:
```
CLIENT_TOKEN='[Token from bot through the discord dev portal]'
CLIENT_ID="[The bot user's ID]"
```

## Deploying commands
Since Discord puts a rate limit to the number of times you can submit commands in a given day, that's handled in a separate file. 
Run `deploy-commands.js` after adding any new command files, or on a new bot.

# Updates from previous starting point
1. Adding in class definition and skeletons for roles, with course roles, optional roles, and veteran roles all extending from that role class.
2. Adding functions to create channels to be used programmatically when creating categories and populating them.
3. Starting on functions to create and populate categories given some course data.
4. Adding empty file to start on testing interface.
5. Updating readme to include .env details
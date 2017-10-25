# Pseudonym
Pseudonym is a basic web app that can be used to send
Slack messages through a bot that appear as if they came
from another user. This app does not support direct messaging
other users, only posting messages on public and private
channels.

Simply specify the username, channel, user image URL and
message and hit 'Send Message'.

## Prerequisites 
You must first create a bot on Slack and generate an access
token for it.

Create the file `config.json` (or rename the `config.json.example`
file available in this repo) and add your bot's token to the 
`botToken` property in the JSON object.

Start the application by running `npm start` and navigating to
`localhost:3000`.

## How to Use
On the main page of the app, you can specify four fields:

### Username
Add a username for your fake user. This can be the username
of another user or any name you wish.

### Channel
Add the channel you want to send the message to. This can be
any public or private channel the bot is a part of. You must first
invite the bot to join a channel before it can send messages.

### Image URL
Add the image for the avatar of the fake user. To use another
user's avatar, right click on their image, inspect the element
and copy the `src` value from the `img` element. Paste this value
into the image URL field.

### Message
The message you wish to send. It can use the basic formatting of
Slack messages such as `*` and it allows the user of `@` commands.
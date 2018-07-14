# Sample Bot

A mini-starter repo for slack bots written in node. Intended mostly for educational use.

## Getting Started

### Set up a Slack App
Go to https://api.slack.com/apps and click "Create New App"

You'll need to enable 
- **Bots**: Here's where you add your bot and give it a name
- **Event Subscriptions**: Here's where you help your bot listen to messages sent. You'll need to provide a URL for where Slack should post events. You can deploy to heroku or something or if you're testing locally, use [ngrok](https://api.slack.com/tutorials/tunneling-with-ngrok)
- **Permissions**: You'll need to enable permissions that let your bot actually post back into Slack. Here you'll get the `TOKEN` to populate the `.env` file in the "Set up env" section of this README

<img width="723" alt="screen shot 2018-07-14 at 4 33 16 pm" src="https://user-images.githubusercontent.com/16271389/42729149-d475bdbc-8783-11e8-9a10-5b2680168c19.png">

And lastly "Install your app to your workspace" so that your bot has a place to live. It's a good idea once you've done this, to go into slack and invite your bot into a private channel for testing.

### Install Dependencies
```
$ brew install yarn
$ yarn
```

### Set up env
```
cp .env.example .env
```

Edit the file to add slack tokens and bot ids

### Run the server
```
yarn start
```


require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';

import { postMessage } from './post';

const app = express();
const PORT = process.env.PORT;
const BOT_ID = process.env.BOT_ID;
const NIKKI_ID = process.env.NIKKI_ID;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/action-handler', (req, res) => {
  // These are to verify the webhook. Slack requires you respond to
  // requests with a challenge value by echoing back that challenge value
  if (req.body.challenge) {
    res.send(req.body.challenge);
    return;
  }

  const { text, channel, bot_id, user } = req.body.event;
  // Ignore messages from self (bot)
  if (!text || bot_id === BOT_ID) {
    res.end();
    return;
  }

  if (user === NIKKI_ID) {
    postMessage(`hello, nikki.`, 'test-nikki-bot', res);
  } else {
    postMessage(`hello, jasper.`, 'test-nikki-bot', res);
  }

});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

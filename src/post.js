const request = require('request');

const URL = 'https://slack.com/api/chat.postMessage';

module.exports = {
  postMessage: function (text, channel, res) {
    const options = {
      method: 'post',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      body: {
        channel,
        as_user: false,
        icon_emoji: ':cat:',
        text,
      },
      json: true,
      url: URL,
    };

    request(options, _ => {
      res.end();
    });
  }
}

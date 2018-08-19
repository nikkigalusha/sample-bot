import request from 'request';

const URL = 'https://slack.com/api/chat.postMessage';

export function postMessage(text, channel, res) {
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

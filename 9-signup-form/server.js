const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const signupPage = path.join(__dirname, 'public', 'signup.html');

const mailChimp = {
  apiKey: process.env.MAILCHIMP_KEY,
  memberUrl: 'https://us10.api.mailchimp.com/3.0/lists/ff678a82cd/members',

  payload: (firstName, lastName, emailAddr) => ({
    email_address: emailAddr,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  }),
};

async function submitUser(firstName, lastName, emailAddr) {
  const options = {
    headers: {
      Authorization: `Bearer ${mailChimp.apiKey}`,
    },
  };

  return axios.post(
    mailChimp.memberUrl,
    mailChimp.payload(firstName, lastName, emailAddr),
    options
  );
}

app.get('/', (req, res) => {
  res.sendFile(signupPage);
});

app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;

  submitUser(firstName, lastName, email).then(
    (val) => {
      res.redirect('/');
    },
    (reason) => {
      res.status(500).send('submit request failed');
    }
  );
});

app.listen(3000);

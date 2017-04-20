const FormData = require('form-data');
const request = require('request');

const form = new FormData();

form.append('image', request('http://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDth58Pc_MtaRARKfCMOlp0hRoth7sg6VaA5EEU1iTCbbWO4FfK58OaSgVhANpujOnRoPFbFF-88S9W-nKhBTuBQZDKMN2tVAGhlSGqSZ4t5tXS7JaWUELPCeraChiNBFJGeDNPSBjG8lxtw44rDANflcz4gY0MEHhTLCBcxqLpm/'));

form.submit({
  protocol: 'https:',
  hostname: 'xxx.com',
  path: '/',
}, (err, res) => {
  if (err) {
    console.error(err);
  }
  let response = '';
  res.on('data', (chunk) => {
    response += chunk;
  });
  res.on('end', () => {
    console.log(response);
  });
});

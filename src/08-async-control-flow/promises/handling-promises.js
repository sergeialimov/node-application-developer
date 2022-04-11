const util = require('util');
const dns = require('dns');

const dnsLookupAsync = util.promisify(dns.lookup);

// Creating a promise
const wrapper = (url) => {
  return dnsLookupAsync(url)
    .then((obj, reject) => obj.address)
    .catch((err) => console.err);
}

const promise = wrapper('google.com');

// Handling promise in a classic way
promise
  .then((ok) => {
    console.log(ok);
  })
  .catch((err) => {
    console.error(err);
  })


// Handling promise in async/await way
const fun = async () => {
  const res = await promise;
  console.log(res);
}
const res = fun();

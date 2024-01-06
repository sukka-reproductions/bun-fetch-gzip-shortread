(async () => {
  console.log(Bun.version, Bun.revision);

  const res = await fetch('https://phishing.army/download/phishing_army_blocklist.txt', { verbose: true });
  console.log(res);

  if (!res.body) {
    throw new TypeError('No body!');
  }
  for await (const chunk of res.body) {
    console.log(chunk.length);
  }
})();

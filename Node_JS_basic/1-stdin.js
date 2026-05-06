console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);

  // If interactive, manually close
  if (process.stdin.isTTY) {
    process.stdin.pause();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

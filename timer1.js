const beepTimer = (args) => {
  args = process.argv.slice(2);

  if (!args) {
    return;
  }
  
  for (let i = 0; i < args.length; i++) {
    const number = Number(args[i]);
    
    if (number > 0 && !isNaN(number)) {
      
      setTimeout(() => {
        process.stdout.write("\x07");
      }, 1000 * number);
    }
  }
  
};

beepTimer();
    



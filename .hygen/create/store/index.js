module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'store_name',
        message: 'Store name:',
      }
    ];

    return inquirer.prompt(questions).then(answers => {
      const {store_name} = answers;
      const path = `${store_name}`;
      const absPath = `src/store/${path}`;
      return {...answers, path, absPath};
    });
  }
};

module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'hook_name',
        message: 'Hook name:'
      }
    ];

    return inquirer.prompt(questions).then(answers => {
      const {hook_name} = answers;
      const path = ``;
      const absPath = `src/hooks/${path}`;
      return {...answers, path, absPath};
    });
  }
};

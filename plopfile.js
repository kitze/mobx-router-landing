module.exports = function (plop) {

  /* Helpers */
  plop.addHelper('upperCase', function (text) {
    return text.toUpperCase();
  });

  var files = {
    index: 'plop-templates/index.js',
    indexConnected: 'plop-templates/index-connected.js',
    styles: 'plop-templates/styles.js',
    stories: 'plop-templates/stories.js'
  }

  /* Files */
  var createIndex = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/index.js',
    templateFile: files.index
  };

  /* Files */
  var createStory = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/stories.js',
    templateFile: files.stories
  };

  var createView = {
    type: 'add',
    path: 'src/views/{{pascalCase name}}/index.js',
    templateFile: files.index
  };

  var createStyle = {
    type: 'add',
    path: 'src/components/{{pascalCase name}}/styles.js',
    templateFile: files.styles
  }

  var createViewStyle = {
    type: 'add',
    path: 'src/views/{{pascalCase name}}/styles.js',
    templateFile: files.styles
  }

  /* Questions */
  var getComponentName = {
    type: 'input',
    name: 'name',
    message: 'What is the component name?',
    validate: function (value) {
      if ((/.+/).test(value)) {
        return true;
      }
      return 'name is required';
    }
  };

  /* Options */
  plop.setGenerator('Component', {
    description: 'Component',
    prompts: [getComponentName],
    actions: [createIndex, createStyle, createStory]
  });


  plop.setGenerator('View', {
    description: 'View',
    prompts: [getComponentName],
    actions: [createView, createViewStyle]
  });


};

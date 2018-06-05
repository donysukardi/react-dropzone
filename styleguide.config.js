const path = require('path')

module.exports = {
  title: 'react-dropzone',
  styleguideDir: path.join(__dirname, 'styleguide'),
  showCode: true,
  showUsage: true,
  showSidebar: false,
  serverPort: 8080,
  context: {
    Dropzone: path.join(__dirname, './src/index'),
    DropzoneBox: path.join(__dirname, './examples/DropzoneBox')
  },
  sections: [
    {
      content: 'README.md'
    },
    {
      name: 'PropTypes',
      components: './src/index.js'
    },
    {
      name: 'Examples',
      sections: [
        {
          name: 'Basic example',
          content: 'examples/Basic/Readme.md'
        },
        {
          name: 'Styling Dropzone',
          content: 'examples/Styling/Readme.md'
        },
        {
          name: 'Accepting specific file types',
          content: 'examples/Accept/Readme.md'
        },
        {
          name: 'Opening File Dialog Programmatically',
          content: 'examples/FileDialog/Readme.md'
        },
        {
          name: 'Full Screen Dropzone',
          content: 'examples/Fullscreen/Readme.md'
        }
      ]
    }
  ]
}

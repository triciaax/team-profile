const prompt = require('./src/prompt')
const gen = require('./src/generate_html')
const save = require('./src/files')

let employeeList = [];

prompt.promptUser(employeeList)
    // promptUser is a promise, so we need to chain .then to get the result
    .then((res) => {
        console.log(res);
        return gen.generateInnerHtml(res);
    })
    .then(res => console.log(res));

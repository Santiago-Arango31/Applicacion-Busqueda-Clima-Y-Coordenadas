const { inquirerInput } = require ("./helpers/inquirer");
const main = async() => {
    const input = await inquirerInput('message')
    console.log('input')
}

main()
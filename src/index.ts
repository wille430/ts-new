import { Option } from 'commander'
import { program } from 'commander'
import { list } from './commands/list'
import { createTemplate } from './commands/new'

program.command('list').description('List all available templates').action(list)

program
    .command('new <template>')
    .description('Generate a template')
    .option('-n, --name <name>', 'The name of the file')
    .action(createTemplate)

program.parse()

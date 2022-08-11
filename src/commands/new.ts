import fs from 'fs'
import path from 'path'
import { TEMPLATE_CONFIG_FILE, TEMPLATE_DIR } from '../constants'
import { templates } from '../templates'
import { copy } from '../utils/copy'

export const createTemplate = (template: string, options) => {
    let destination = options.name ?? process.cwd()
    if (!path.isAbsolute(destination)) {
        destination = path.resolve(process.cwd(), destination)
    }

    if (!templates().includes(template)) {
        throw new Error(`Template ${template} does not exist`)
    }

    const templatePath = path.join(TEMPLATE_DIR, template)
    const templateConfig = JSON.parse(
        fs.readFileSync(path.join(templatePath, TEMPLATE_CONFIG_FILE)).toString()
    )

    const filepaths: string[] = templateConfig.entries.map((p) => path.resolve(templatePath, p))

    for (const p of filepaths) {
        const isDir = fs.lstatSync(p).isDirectory()

        if (isDir) {
            for (const filename of fs.readdirSync(p)) {
                copy(path.resolve(p, filename), destination)
            }
        } else {
            copy(p, destination)
        }
    }
}

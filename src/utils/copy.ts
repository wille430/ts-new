import fs from 'fs'
import path from 'path'
import { getFilename } from './getFilename'

export const copy = (from: string, to: string) => {
    if (fs.lstatSync(from).isDirectory()) {
        const dirName = getFilename(from)
        // Copy all files inside
        if (dirName) {
            const dirPath = path.resolve(to, dirName)
            if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
            for (const file of fs.readdirSync(from)) {
                console.log(`Copying ${path.resolve(from, file)} to ${path.resolve(dirPath, file)}`)
                copy(path.resolve(from, file), path.resolve(dirPath, file))
            }
        }
    } else {
        if (fs.existsSync(to) && fs.lstatSync(to).isDirectory())
            fs.copyFileSync(from, path.resolve(to, getFilename(from) as string))
        else fs.copyFileSync(from, to)
    }
}

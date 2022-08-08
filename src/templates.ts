import fs from 'fs'
import { TEMPLATE_DIR } from './constants'

export const templates = () => {
    const arr: string[] = []
    for (const dir of fs.readdirSync(TEMPLATE_DIR)) {
        arr.push(dir)
    }
    return arr
}

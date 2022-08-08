import fs from 'fs'
import { TEMPLATE_DIR } from '../constants'

export const list = () => {
    for (const dir of fs.readdirSync(TEMPLATE_DIR)) {
        console.log(dir)
    }
}

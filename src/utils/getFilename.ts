export const getFilename = (path: string) => {
    return path.split('/').at(-1)
}

const { build } = require('esbuild')
const { copy } = require('esbuild-plugin-copy')

    ; (async () => {
        await build({
            entryPoints: ['src/index.ts'],
            bundle: true,
            outfile: 'dist/index.js',
            format: 'cjs',
            platform: 'node',
            plugins: [
                copy({
                    resolveFrom: __dirname,
                    assets: [
                        {
                            from: './src/templates/**/*',
                            to: './dist/templates',
                        },
                        {
                            from: './src/common/*',
                            to: './dist/common',
                        },
                    ],
                    keepStructure: true,
                    globbyOptions: {
                        dot: true,
                    },
                }),
            ],
        }).catch(() => process.exit(1))
    })()
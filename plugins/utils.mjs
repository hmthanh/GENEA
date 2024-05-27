export function createAstExportConst(name, value) {
    return {
        type: 'ExportNamedDeclaration',
        specifiers: [],
        declaration: {
            type: 'VariableDeclaration',
            kind: 'const',
            declarations: [
                {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name },
                    init: value
                }
            ]
        }
    }
}

export function pageTitleFromFilename(fileName) {
    return title(fileName.replaceAll(/[-_]/g, ' '), { special: ['SSR'] })
}
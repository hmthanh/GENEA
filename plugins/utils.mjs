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
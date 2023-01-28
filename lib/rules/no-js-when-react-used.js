module.exports = {
    meta: {
        messages: {
            customMessageId: "files importing react should end with .jsx instead of .js"
        },
        type: "problem",
        schema: [{
            type: "object",
            properties: {},
            additionalProperties: false
        }]
    },
    create(context) {
        return {
            Program(node) {
                const fileNamePath = context.getFilename();
                const fileName = fileNamePath.split("/")[fileNamePath.split("/").length - 1];
                const nodes = node.body;
                const importDeclarations=nodes.filter(node=>node.type==='ImportDeclaration')
                let isReactImported = false;
                for (let index = 0; index< nodes.length; index++){
                    if (importDeclarations[index].source.value === 'react') {
                        isReactImported = true;
                    }
                }
                if(fileName.endsWith('.js') && isReactImported) {
                    context.report({
                        node,
                        messageId: 'customMessageId'
                    })
                }
            },
        }
    }
}
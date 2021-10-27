module.exports = function ({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path, state) {
                console.log(state.opts)

                // path.node.left.name = path.node.right.name;
                // path.node.left = path.node.right;
                // path.node.left = path.get('right').node;
                const left = path.node.left
                path.node.left = path.node.right;
                path.node.right = left;

                // path.node.left = t.identifier(state.opts.param);
            }
        }    
    }
}
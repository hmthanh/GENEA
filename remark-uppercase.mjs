import { visit } from 'unist-util-visit';

export default function remarkUppercase() {
    return (tree) => {
        visit(tree, 'text', (node) => {
            node.value = node.value.toUpperCase();
        });
    };
}
type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function applyScopeToHeaders(node: HastNode): void {
  if (node.type === 'element' && node.tagName === 'th') {
    const properties = node.properties ?? {};
    if (!('scope' in properties)) {
      properties.scope = 'col';
    }
    node.properties = properties;
  }

  if (!node.children) return;

  for (const child of node.children) {
    applyScopeToHeaders(child);
  }
}

export default function rehypeThScope() {
  return function transformer(tree: HastNode) {
    applyScopeToHeaders(tree);
  };
}

module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  root
    .find(j.FunctionExpression)
    .filter((path) => {
      return (
        path.parent.node.type === "VariableDeclarator" ||
        path.parent.node.type === "Property" ||
        path.parent.node.type === "CallExpression" // This ensures IIFEs are included
      );
    })
    .replaceWith((path) => {
      const { params, body, async } = path.node;
      return j.arrowFunctionExpression(params, body, async);
    });

  return root.toSource();
};

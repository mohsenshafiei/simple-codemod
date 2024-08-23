module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  root.find(j.VariableDeclaration, { kind: "var" }).replaceWith((path) => {
    return j.variableDeclaration("const", path.node.declarations);
  });

  return root.toSource();
};

const fetch = require('node-fetch')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest }
) => {
  const { createNode } = actions

  const url = 'http://127.0.0.1:8000/api/products'
  const createProductNodeData = product => {
    const nodeId = createNodeId(`product-${product.id}`)
    const nodeContent = JSON.stringify(product)
    const nodeData = Object.assign({}, product, {
      id: nodeId,
      product_id: product.id,
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        content: nodeContent,
        contentDigest: createContentDigest(product),
      },
    })
    return nodeData
  }

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      data.data.forEach(product => {
        const nodeData = createProductNodeData(product)
        createNode(nodeData)
      })
    })
}

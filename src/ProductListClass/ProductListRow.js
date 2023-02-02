const ProductListRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.brand}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
    </tr>
  )
}

export default ProductListRow
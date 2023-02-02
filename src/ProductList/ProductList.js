import { useState, useEffect } from "react";
import { StyledContainer, StyledTable } from "../ProductListClass/ProductListClass.styled";
import ProductListRow from "../ProductListClass/ProductListRow";

const ProductList = () => {
  console.log("ProductList component called");

  const [isFetching, setIsFetching] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("ProductList useEffect called (componentDidMount)");

    setIsFetching(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsFetching(false);
        setProductList(data.products);
      });
  }, []);

  console.log({ productList, isFetching });

  console.log("ProductList return called");
  return (
    <StyledContainer>
      {isFetching ? (
        "Loading..."
      ) : (
        <StyledTable>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
            {productList.map((item) => (
              <ProductListRow item={item} />
            ))}
          </tbody>
        </StyledTable>
      )}
    </StyledContainer>
  );
};

export default ProductList;

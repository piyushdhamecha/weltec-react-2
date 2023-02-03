import { useState, useEffect } from "react";
import { StyledContainer, StyledTable } from "../ProductListClass/ProductListClass.styled";
import ProductListRow from "../ProductListClass/ProductListRow";

const ProductList = () => {
  console.log("ProductList component called");

  const [isFetching, setIsFetching] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("ProductList useEffect called without any dependency");

    return () => {
      console.log("ProductList useEffect clean up called without any dependency");
    }
  });

  useEffect(() => {
    console.log("ProductList useEffect called with empty dependency");

    return () => {
      console.log("ProductList useEffect cleanup called with empty dependency");
    }
  }, []);

  useEffect(() => {
    console.log("Mounting: ProductList useEffect called with isFetching dependency");

    return () => {
      console.log("Cleanup: ProductList useEffect called with isFetching dependency");
    }
  }, [productList, isFetching]);

  // useEffect(() => {
  //   console.log("ProductList useEffect called (componentDidMount)");

  //   setIsFetching(true);

  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsFetching(false);
  //       setProductList(data.products);
  //     });
  // }, []);

  // console.log({ productList, isFetching });

  // console.log("ProductList return called");
  // return (
  //   <StyledContainer>
  //     {isFetching ? (
  //       "Loading..."
  //     ) : (
  //       <StyledTable>
  //         <tbody>
  //           <tr>
  //             <th>Title</th>
  //             <th>Brand</th>
  //             <th>Category</th>
  //             <th>Price</th>
  //           </tr>
  //           {productList.map((item) => (
  //             <ProductListRow item={item} />
  //           ))}
  //         </tbody>
  //       </StyledTable>
  //     )}
  //   </StyledContainer>
  // );

  const handleToggleIsFetching = () => {
    setIsFetching(!isFetching)
  }

  return (
    <div>
      <button onClick={handleToggleIsFetching}>Toggle is fetching</button>
    </div>
  )
};

export default ProductList;

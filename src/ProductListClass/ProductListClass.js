import { Component } from "react";
import { StyledContainer, StyledTable } from "./ProductListClass.styled";
import ProductListRow from "./ProductListRow";

class ProductListClass extends Component {
  constructor() {
    super();

    this.state = {
      isFetching: false,
      productList: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount method called");

    this.setState({ isFetching: true });

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isFetching: false,
          productList: data.products,
        });
      });
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate called')
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called')
  }

  render() {
    console.log("Render method called");

    return (
      <StyledContainer>
        {this.state.isFetching ? (
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
              {this.state.productList.map((item) => (
                <ProductListRow item={item} />
              ))}
            </tbody>
          </StyledTable>
        )}
      </StyledContainer>
    );
  }
}

export default ProductListClass;

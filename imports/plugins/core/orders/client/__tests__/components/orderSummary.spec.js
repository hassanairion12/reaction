import React from "react";
import OrderSummary from "../../components/orderSummary";
import renderer from "react-test-renderer";

test("OrderSummary snapshot test", () => {
  const component = renderer.create(<OrderSummary />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// function sum(a, b) {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

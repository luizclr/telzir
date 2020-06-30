import React from "react";
import App from "../../components/app";
import { shallow } from "enzyme";

it("should render <App />", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

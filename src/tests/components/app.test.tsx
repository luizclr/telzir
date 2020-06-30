import React from "react";
import App from "../../components/app";
import { shallow } from "enzyme";

describe("<App />", () => {
  it("should render component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});

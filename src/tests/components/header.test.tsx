import React from "react";
import Header from "../../components/header";
import { shallow } from "enzyme";

describe("<Header />", () => {
  it("should render", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});

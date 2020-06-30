import React from "react";
import Form from "../../components/form";
import { shallow } from "enzyme";

describe("<Form />", () => {
  it("should render", () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  });
});

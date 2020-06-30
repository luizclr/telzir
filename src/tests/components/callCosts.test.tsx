import React from "react";
import CallCosts from "../../components/callCosts";
import { shallow } from "enzyme";

describe("<CallCosts />", () => {
  it("should render", () => {
    const wrapper = shallow(<CallCosts />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render with VALID information", () => {
    const props = { valid: true, withPlan: 0, withoutPlan: 0 };
    const wrapper = shallow(<CallCosts callCosts={props} />);

    expect(wrapper.find("#withPlan").text()).toEqual("$ 0.00");
    expect(wrapper.find("#withoutPlan").text()).toEqual("$ 0.00");
  });

  it("should render with INVALID information", () => {
    const props = { valid: false, withPlan: 0, withoutPlan: 0 };
    const wrapper = shallow(<CallCosts callCosts={props} />);

    expect(wrapper.find("#withPlan").text()).toEqual("-");
    expect(wrapper.find("#withoutPlan").text()).toEqual("-");
  });
});

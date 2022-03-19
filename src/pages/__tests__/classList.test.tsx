import { shallow } from "enzyme";
import React from "react";
import ClassList from "../classList";

// import { testTask, testTask1 } from '../../testData'

describe("ClassListView", () => {
  let wrapper = shallow(<ClassList />);

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

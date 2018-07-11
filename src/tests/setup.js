import Enzyme from "enzyme";
import { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import ReactRouterEnzymeContext from "react-router-enzyme-context";

const options = new ReactRouterEnzymeContext();

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.options = options;
global.sinon = sinon;

Enzyme.configure({ adapter: new Adapter() });

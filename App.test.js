import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe ('test', () => {
  it('shallow', () => {
    const element = shallow(<App/>);
    expect(element.exists()).toBeTruthy();
  });
  it('should find button', () => {
    const element = shallow(<App/>);
    const aButton = element.find('Button');
    expect(aButton.exists()).toBeTruthy();
  });
  it('should click a button', () => {
      const element = shallow(<App/>);
      const aButton = element.find('Button');
      aButton.get(0).props.onPress();
      expect(aButton.exists()).toBeTruthy();
  });
});

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
    const element = shallow(<App />);
    const aButton = element.find('Button');
    expect(aButton.exists()).toBeTruthy();
  });
  it('should click a button', () => {
    const aEvent = jest.fn();
    const element = shallow(<App myMethod={aEvent}/>);
    const aButton = element.find('Button');
    aButton.get(0).props.onPress();
    expect(aEvent).toHaveBeenCalled();
  });
  it('should have a text entry', () => {
    const element = shallow(<App/>);
    const aTextInput = element.find('TextInput');
    expect(aTextInput.exists()).toBeTruthy();
  });
  it('should change the text', () => {
    const changeMock = jest.fn();
    const aText = 'irrelevant';
    const element = shallow(<App changeText={changeMock}/>);
    const aTextInput = element.find('TextInput');
    aTextInput.find('TextInput').get(0).props.onChangeText(aText);
    expect(changeMock).toHaveBeenCalled();
  })
});

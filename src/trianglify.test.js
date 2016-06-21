import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Trianglify from './trianglify';

describe('<Trianglify />', () => {
  it('should render one <svg /> Element', () => {
    const wrapper = shallow(<Trianglify />);
    expect(wrapper.find('svg')).to.have.length(1);
  });
  describe('<svg />', () => {
    it('should render <path /> Elements inside it', () => {
      const wrapper = shallow(<Trianglify />);
      expect(wrapper.find('svg > path')).to.have.length.above(0);
    });
    it('should have width, height attributes', () => {
      const svgProps = shallow(<Trianglify />).find('svg').first().props();
      expect(svgProps.width).to.be.a('number');
      expect(svgProps.height).to.be.a('number');
    });
  });
  describe('<path />', () => {
    it('should have key, d, fill, stroke, strokeWidth attributes', () => {
      const path = shallow(<Trianglify />).find('path').first();
      const props = path.props();
      expect(path.key()).to.exist; // eslint-disable-line
      expect(props.d).to.be.a('string');
      expect(props.fill).to.be.a('string');
      expect(props.stroke).to.be.a('string');
      expect(props.strokeWidth).to.be.a('number');
    });
    it('fill and stroke color should be equal', () => {
      const pathProps = shallow(<Trianglify />).find('path').first().props();
      expect(pathProps.fill).to.equal(
        pathProps.stroke
      );
    });
  });
});

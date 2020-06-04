import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.flushPromises = () => new Promise(setImmediate);
configure({adapter: new Adapter()});

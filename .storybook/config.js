import wrapWithStyles from '../src/storybook-wrappers/wrap-styles';
import {addDecorator, configure} from '@kadira/storybook';

var reqComponents = require.context('../src/components', true, /.stories.js$/)
var reqViews = require.context('../src/views', true, /.stories.js$/)

addDecorator(story => wrapWithStyles(story()));

const loadStories = () => {
  reqComponents.keys().forEach(filename => reqComponents(filename));
  reqViews.keys().forEach(filename => reqViews(filename));
}

configure(loadStories, module);
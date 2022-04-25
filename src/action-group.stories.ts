import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';

export default {
  title: 'Components/ActionGroup',
  component: 'bdg-action-grup',
} as Meta;

export const Default = () => `
<bdg-action-group>
  <button>Button 1</button>
</bdg-action-group>
`;

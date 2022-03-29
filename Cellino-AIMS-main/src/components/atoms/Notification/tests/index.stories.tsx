import React from 'react';
import { NotificationIcon } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/NotificationIcon',
  component :  NotificationIcon
} as ComponentMeta<typeof NotificationIcon>;

const Template: ComponentStory<typeof NotificationIcon> = (args) => <NotificationIcon {...args}></NotificationIcon>;

export const Default = Template.bind({});

Default.args = {
  
};



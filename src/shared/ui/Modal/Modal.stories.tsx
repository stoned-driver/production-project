import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur cupiditate, excepturi magnam magni natus nihil nulla placeat, quam sed sunt suscipit veniam voluptates, voluptatum? Amet distinctio modi quae quia reprehenderit. A alias aliquid amet animi aspernatur cumque ducimus earum et facere fuga, fugit ipsum iste iure laudantium molestias nulla odio quasi qui quisquam repellendus repudiandae sed similique tempore.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur cupiditate, excepturi magnam magni natus nihil nulla placeat, quam sed sunt suscipit veniam voluptates, voluptatum? Amet distinctio modi quae quia reprehenderit. A alias aliquid amet animi aspernatur cumque ducimus earum et facere fuga, fugit ipsum iste iure laudantium molestias nulla odio quasi qui quisquam repellendus repudiandae sed similique tempore.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

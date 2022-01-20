import React from 'react';
import { NewButton } from './NewButton';

export default {
    title: "Component/NewButton",
    component: NewButton,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // decorators: [
    //     (NewButton) => (
    //         <div style={{margin: "50px"}}>
    //             <NewButton />
    //         </div>
    //     )
    // ]
};

const Template = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

// Primary.decorators = [
//     (NewButton) => (
//         <div style={{margin: "50px"}}>
//             <NewButton />
//         </div>
//     )
// ]

// Primary.parameters = {
//     backgrounds: {
//         values: [
//             { name: 'red', value: '#f00' },
//             { name: 'green', value: '#0f0' },
//         ],
//     }
// }

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

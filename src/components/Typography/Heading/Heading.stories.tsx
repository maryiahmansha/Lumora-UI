import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
    title: 'Typography/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ["h1", "h2", "h3", "h4", "h5", "h6"]
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'muted']
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'h1',
        variant: 'default',
        children: 'This is a Heading'
    },
};

export const AllSizes: Story = {
    render: () => (
        <div>
            <Heading size='h1'>H1 Heading</Heading>
            <Heading size='h2'>H2 Heading</Heading>
            <Heading size='h3'>H3 Heading</Heading>
            <Heading size='h4'>H4 Heading</Heading>
            <Heading size='h5'>H5 Heading</Heading>
            <Heading size='h6'>H6 Heading</Heading>
        </div>
    ),
};


import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
    variant: "default",
    checkBoxSize: "md",
    checked: false,
  },
};

export const WithError: Story = {
  args: {
    label: "Accept terms and conditions",
    variant: "error",
    error: "You must accept the terms",
    checked: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div>
      <Checkbox checkBoxSize="sm" label="Small checkbox" />
      <Checkbox checkBoxSize="md" label="Medium checkbox" />
      <Checkbox checkBoxSize="lg" label="Large checkbox" />
    </div>
  ),
};

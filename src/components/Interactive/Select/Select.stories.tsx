import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    inputSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select label="Choose an option">
      <option value="">Select...</option>
      <option value="1">Option One</option>
      <option value="2">Option Two</option>
    </Select>
  ),
};

export const WithError: Story = {
  args: {
    label: "Choose an option",
    inputSize: "md",
    variant: "error",
    error: "You must select a value",
    children: (
      <>
        <option value="">Select...</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

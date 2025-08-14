import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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
    label: "Option 1",
    name: "example",
    value: "1",
    checked: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div>
      <Radio boxSize="sm" label="Small" name="sizes" value="sm"></Radio>
      <Radio boxSize="md" label="Medium" name="sizes" value="md"></Radio>
      <Radio boxSize="lg" label="Large" name="sizes" value="lg"></Radio>
    </div>
  ),
};

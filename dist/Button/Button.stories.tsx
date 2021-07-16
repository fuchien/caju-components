import Button from ".";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "My Button",
};

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./FooterLink";

export default {
  title: "Common/Footer Link",
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <FooterLink {...args} />
);

export const View = Template.bind({});
View.args = {
  href: "tel:+380441234567",
  children: "044 123 45 67",
};

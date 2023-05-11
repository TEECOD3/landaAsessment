import { FC, ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

const template: FC<TemplateProps> = (props) => {
  const { children } = props;

  return <div className="">{children}</div>;
};

export default template;

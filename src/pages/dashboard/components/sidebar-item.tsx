import { JSXElement } from 'solid-js';
import { A } from '@solidjs/router';

interface IProps {
  title: string;
  linkTo: string;
  icon: JSXElement;
}

export default function SidebarItem({ title, linkTo, icon }: IProps) {
  return (
    <A href={linkTo} class="flex items-center justify-start mb-2 py-2">
      {icon}
      <p class="text-white ml-2">{title}</p>
    </A>
  );
}

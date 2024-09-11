/// <reference types="vite-plugin-svgr/client" />
import React, { ButtonHTMLAttributes, FC } from "react";
import { DeleteButtonComponent } from "./Button.styles";
import TrashIcon from "../../../assets/trashIcon.svg?react";

export const DeleteButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <DeleteButtonComponent {...props}>
      <TrashIcon />
    </DeleteButtonComponent>
  );
};

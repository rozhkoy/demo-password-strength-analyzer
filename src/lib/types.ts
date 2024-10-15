import { PropsWithChildren } from "react";

export interface PropsWithClassNameAndChildren extends PropsWithChildren, PropsWithClassName {}

export interface PropsWithClassName {
  className?: string;
}

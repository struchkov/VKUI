import * as React from "react";
import { HasComponent } from "../../../types";
import { classNames } from "../../../lib/classNames";
import { warnOnce } from "../../../lib/warnOnce";
import "./Subhead.css";

export interface SubheadProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  /**
   * Начертания "regular", "medium", "semibold" и "bold" устарели и будут удалены в 5.0.0.
   */
  weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
}

const warn = warnOnce("Subhead");

const Subhead: React.FC<SubheadProps> = ({
  children,
  weight,
  Component = "h5",
  ...restProps
}: SubheadProps) => {
  if (process.env.NODE_ENV === "development") {
    if (
      weight &&
      ["heavy", "bold", "semibold", "medium", "regular"].includes(weight)
    )
      warn(
        `Начертание "${weight}" устарело и будет удалено в 5.0.0. Используйте значения "1", "2" и "3"`
      );
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames("Subhead", `Subhead--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

// eslint-disable-next-line import/no-default-export
export default Subhead;

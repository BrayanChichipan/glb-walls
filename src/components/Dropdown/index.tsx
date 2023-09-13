import { FC, ReactNode, useRef, useState } from "react";
import { useMouseDown } from "../../hooks/useMouseDown";
import classes from "./styles.module.css";

export interface DropDownProps {
  /**
  ReactNode trigger to show menu content
  */
  trigger: ReactNode;
  /**
  ReactNode menu content
  */
  menu: ReactNode;
  /**
   Align menu position relative to trigger
  */
  menuPosition?: "left" | "right";
}

export const Dropdown: FC<DropDownProps> = ({
  trigger,
  menu,
  menuPosition = "left",
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useMouseDown({ elRef: contentRef, onClickOutside: () => setOpen(false) });

  return (
    <div className={classes.container}>
      <div className={classes.trigger} onClick={() => setOpen(true)}>
        {trigger}
      </div>
      <div
        className={`
              ${classes["content-container"]} 
              ${open ? classes.smooth : ""}
            `}
        style={{ [menuPosition]: 0 }}
      >
        <div
          ref={contentRef}
          className={`
                ${classes.content}
                ${open ? classes.show : classes.hide}
              `}
        >
          {menu}
        </div>
      </div>
    </div>
  );
};

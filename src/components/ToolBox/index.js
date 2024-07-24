import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import cx from "classnames";
import { COLORS, MENU_ITEMS } from "@/constant";
import { changeColor, changeToolSize } from "@/slice/toolboxSlice";

const ToolBox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showToolSizeOption =
    activeMenuItem === MENU_ITEMS.ERASER ||
    activeMenuItem === MENU_ITEMS.PENCIL;
  const {color,size} = useSelector((state) => state.toolBox[activeMenuItem]);

  const updateToolSize = (e) => {
    dispatch(changeToolSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };
  return (
    <div className={styles.toolBoxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolBoxItem}>
          <h4 className={styles.toolBoxText}>Stroke Color</h4>
          <div className={styles.toolBoxItemContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}
      {showToolSizeOption && (
        <div className={styles.toolBoxItem}>
          <h4 className={styles.toolBoxText}>Tool Size</h4>
          <div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={size}
              onChange={updateToolSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;

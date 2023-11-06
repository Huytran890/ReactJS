import { useState } from "react";
import styles from "./AttributeColor.module.css";

const attributes = [
    { id: 1, name: "Đen" },
    { id: 2, name: "Hồng" },
    { id: 3, name: "Xanh" },
];

function AttributeItem({ label, className, onClick }: {
    label: string;
    className?: string;
    onClick: () => void;
}) {
    const classStyle =
        className && className !== ""
            ? `${styles.attr_item} ${className}`
            : styles.attr_item;

    return (
        <>
            <span onClick={onClick} className={classStyle}>{label}</span>
        </>
    )
}

function AttributeColor() {
    const [current, setCurrent] = useState<number>(1);

    const handleClick = (id: number) => {
        console.log('id', id);
        setCurrent(id)
    }

    return (
        <div className={styles.attr_block}>
            <span className={styles.attr_name}>Màu Sắc</span>
            {attributes.map((item) => (
                <AttributeItem
                    onClick={() => handleClick(item.id)}
                    className={current === item.id ? styles.current : ""}
                    key={item.id}
                    label={item.name}
                />
            ))}
        </div>
    );
}

export default AttributeColor;
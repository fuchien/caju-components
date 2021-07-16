type Props = {
    label: string;
    backgroundColor: string;
    onClick: () => void;
}

export default function Button({ label, backgroundColor, onClick }: Props) {
    return (
        <button onClick={onClick}
            style={backgroundColor && { backgroundColor }}>
            {label}
        </button>
    );
}

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};
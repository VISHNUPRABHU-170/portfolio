import './Button.css';

export default function Button({ label, className }) {
  return (
    <button className={`button-${className}`}>
      <span>{label}</span>
    </button>
  );
}

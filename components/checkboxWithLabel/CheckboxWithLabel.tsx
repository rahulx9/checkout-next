function CheckboxWithLabel({ label }: { label: string }) {
  return (
    <label>
      <input type="checkbox" />
      {label}
    </label>
  );
}

export default CheckboxWithLabel;

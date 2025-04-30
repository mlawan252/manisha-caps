function MenuItem({ cap }) {
  return (
    <li>
      <img src={cap.image} alt={cap.name} className="size-62" />
    </li>
  );
}
export default MenuItem;

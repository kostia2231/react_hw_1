function ListsComponent() {
  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        <li>Item 1</li>
        <li>
          Item 2
          <ul>
            <li>Subitem 2.1</li>
            <li>Subitem 2.2</li>
          </ul>
        </li>
        <li>Item 3</li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>Item A</li>
        <li>
          Item B
          <ul>
            <li>Subitem B.1</li>
            <li>Subitem B.2</li>
          </ul>
        </li>
        <li>Item C</li>
      </ul>
    </div>
  );
}
export default ListsComponent;

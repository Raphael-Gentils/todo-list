export default function List() {
  return (
    <ul className="list">
      <li className="item">
        <label className="item-label item-label--done">
          <input className="item-checkbox" type="checkbox" checked />
          <span>Faire les courses pour la tartiflette</span>
        </label>
        <button type="button" className="item-delete">
          X
        </button>
      </li>
      <li className="item">
        <label className="item-label">
          <input className="item-checkbox" type="checkbox" />
          <span>Ranger mon bureau</span>
        </label>
        <button type="button" className="item-delete">
          X
        </button>
      </li>
      <li className="item">
        <label className="item-label">
          <input className="item-checkbox" type="checkbox" />
          <span>Faire mon challenge React</span>
        </label>
        <button type="button" className="item-delete">
          X
        </button>
      </li>
    </ul>
  );
}

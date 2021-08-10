import "./Table.css";

export const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="first-table-header">ITEM NAME</th>
          <th className="last-table-header">ITEM PRICE</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData
          ? props.tableData.map((item, i) => {
              return (
                <tr key={i} height={30}>
                  <td className="first-table-col">
                    <input
                      id={item.name}
                      type="checkbox"
                      onChange={(e) => props.onCheck(item.price, e)}
                    ></input>
                    <img
                      className="item-img"
                      src={item.img}
                      alt={item.name}
                    ></img>
                    <label for={item.name} >{item.name}</label>
                  </td>
                  <td className="last-table-col">
                    {item.price}/{item.unity}
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

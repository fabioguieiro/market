export const Table = (props) => {
  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>Item Name</th>
        <th>Item Name</th>
        <th>Preço</th>
      </tr>
      {props.tableData
        ? props.tableData.map((item, i) => {
            return (
              <tr key={i} style={{ height: 30 }}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => props.onCheck(item.price, e)}
                  ></input>
                </td>
                <td>
                  <img style={{ width: 20 }} src={item.img}></img>
                  {item.name}
                </td>
                <td>
                  {item.price}/{item.unity}
                </td>
              </tr>
            );
          })
        : null}
    </table>
  );
};

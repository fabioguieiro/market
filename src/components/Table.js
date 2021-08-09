export const Table = (props) => {
  return (
    <table style={{ width: "100%", fontSize: 15, borderBottom: '1px solid #ccc' }}>
      <thead  >
        <tr style={{ }}>
          <th style={{ textAlign: "start", fontWeight: 500, paddingLeft: 20, height: 30, borderTop: '1px solid #ccc',  borderBottom: '1px solid #ccc' }}>
            ITEM NAME
          </th>
          <th style={{ textAlign: "end", fontWeight: 500, paddingLeft: 20, height: 30, borderTop: '1px solid #ccc',  borderBottom: '1px solid #ccc' }}>
            ITEM PRICE
          </th>
        </tr>
      </thead>
      <tbody>
        {props.tableData
          ? props.tableData.map((item, i) => {
              return (
                <tr key={i} style={{ height: 30 }}>
                  <td
                    style={{
                      width: "50%",
                      textAlign:'start',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => props.onCheck(item.price, e)}
                    ></input>
                    <img
                      style={{ width: 20, margin: "0 20px" }}
                      src={item.img}
                      alt={item.name}
                    ></img>
                    {item.name}
                  </td>
                  <td
                    style={{
                      width: "50%",
                      textAlign:'end'
                    }}
                  >
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

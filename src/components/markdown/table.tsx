interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  headers: string[];
  rows: string[][];
  footer?: string[];
}

export const CustomTable = ({ ...props }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {props.footer && (
        <tfoot>
          <tr>
            {props.footer.map((footer, index) => (
              <td key={index}>{footer}</td>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

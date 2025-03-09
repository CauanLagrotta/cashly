import { api } from "../../services/api";
import { Container } from "./styles";
import { useEffect } from "react";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions")
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

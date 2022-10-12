import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { ContainerDashboard } from "./styles.dashboard";

export function Dashboard() {
  return (
    <ContainerDashboard>
      <Summary Entradas={"Entradas"} Saidas={"Saídas"} total={"Total"} />
      <TransactionsTable />
    </ContainerDashboard>
  );
}

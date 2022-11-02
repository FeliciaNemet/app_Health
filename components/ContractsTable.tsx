import Link from "./Link";
import Button from "./Button";
import Status from "./Status";
import type { Contract } from "../libs/types";
import api from "../libs/api";
import * as styles from "./ContractsTable.css";

interface Props {
  loading: boolean;
  contracts: Contract[];
  onContractUpdated: (contract: Contract) => void;
}

const ContractsTable = ({
  loading,
  contracts,
  onContractUpdated,
}: Props): JSX.Element => {
  const issue = (id: string) =>
    api.put(`/contracts/${id}`, { status: "ISSUED" }).then(onContractUpdated);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>ID</th>
          <th className={styles.header}>Status</th>
          <th className={styles.header}>Renter</th>
          <th className={styles.header}>Owner</th>
          <th className={styles.header}>Asset Value</th>
          {contracts.some((contract) => contract.status === "DRAFT") && (
            <th className={styles.header}></th>
          )}
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td className={styles.cell} colSpan={5}>
              Loading
            </td>
          </tr>
        )}
        {contracts.length === 0 && (
          <tr>
            <td className={styles.cell} colSpan={5}>
              There is no contract yet. Use the form below to create one.
            </td>
          </tr>
        )}
        {contracts.map((contract) => (
          <tr key={contract.id}>
            <td className={styles.cell}>
              <Link to={`/contract/${contract.id}`}>{contract.id}</Link>
            </td>
            <td className={styles.cell}>
              <Status status={contract.status} />
            </td>
            <td className={styles.cell}>
              {contract.renter.first_name} {contract.renter.last_name}
            </td>
            <td className={styles.cell}>
              {contract.owner.first_name} {contract.owner.last_name}
            </td>
            <td className={styles.cell}>${contract.asset.value}</td>
            {contract.status === "DRAFT" && (
              <td className={styles.cell}>
                <Button label="Issue" onClick={() => issue(contract.id)} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContractsTable;

import Link from "./Link";
import Button from "./Button";
import Status from "./Status";
import type { Contract } from "../libs/types";
import api from "../libs/api";
import * as styles from "./ContractHeader.css";

interface Props {
  contract: Contract;
  updatedContract: (contract: Contract) => void;
}

const ContractStatus = ({ contract, updatedContract }: Props) => {
  const issue = (id: string) =>
    api.put(`/contracts/${id}`, { status: "ISSUED" }).then(updatedContract);

  return (
    <>
      <div className={styles.topbar}>
        <Link to="/">🠔 Back to the contracts list</Link>
        {contract.status === "DRAFT" && (
          <Button label="Issue" onClick={() => issue(contract.id)} />
        )}
      </div>
      <h1>Contract {contract.id}</h1>
      <div className={styles.card}>
        <div className={styles.detail}>
          Status: <Status status={contract.status} />
        </div>
        <div className={styles.detail}>
          Asset details: <strong>${contract.asset.value}</strong>
        </div>
        <div className={styles.detail}>
          Renter:{" "}
          <strong>
            {contract.renter.first_name} {contract.renter.last_name}
          </strong>
        </div>
        <div className={styles.detail}>
          Owner:{" "}
          <strong>
            {contract.owner.first_name} {contract.owner.last_name}
          </strong>
        </div>
      </div>
    </>
  );
};

export default ContractStatus;

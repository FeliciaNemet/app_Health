import { useState, useEffect } from "react";
import type { NextPage } from "next";
import ContractsTable from "../components/ContractsTable";
import CreateContract from "../components/CreateContract";
import type { Contract } from "../libs/types";
import api from "../libs/api";

const ContractListPage: NextPage = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      api.get("/contracts").then((contracts) => {
        setLoading(false);
        setContracts(contracts);
      });
    }
  }, [loading]);

  const newContractCreated = (newContract: Contract) => {
    setContracts([...contracts, newContract]);
  };

  const contractUpdated = (updatedContract: Contract) => {
    setContracts(
      contracts.map((contract) =>
        contract.id === updatedContract.id ? updatedContract : contract
      )
    );
  };

  return (
    <>
      <ContractsTable
        loading={loading}
        contracts={contracts}
        onContractUpdated={contractUpdated}
      />
      <CreateContract onContractCreated={newContractCreated} />
    </>
  );
};

export default ContractListPage;

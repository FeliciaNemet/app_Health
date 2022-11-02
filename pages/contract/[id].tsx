import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ContractHeader from "../../components/ContractHeader";
import type { Contract } from "../../libs/types";
import api from "../../libs/api";

const fetchData = async (
  id: string,
  setContract: (contract: Contract) => void
) => {
  const contracts = await api.get(`/contracts/${id}`);
  setContract(contracts);
};

const ContractPage: NextPage = () => {
  const [contract, setContract] = useState<Contract | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchData(id as string, setContract);
    }
  }, [id, setContract]);

  if (!contract) {
    return <>Loading</>;
  }

  return (
    <>
      <ContractHeader contract={contract} updatedContract={setContract} />
    </>
  );
};

export default ContractPage;

import { useState } from "react";
import type { FormEvent } from "react";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import Button from "./Button";
import type { Contract } from "../libs/types";
import api from "../libs/api";
import * as styles from "./CreateContract.css";

interface Props {
  onContractCreated: (contract: Contract) => void;
}

const CreateContract = ({ onContractCreated }: Props) => {
  const [renterFirstName, setRenterFirstName] = useState<string | null>(null);
  const [renterLastName, setRenterLastName] = useState<string | null>(null);
  const [ownerFirstName, setOwnerFirstName] = useState<string | null>(null);
  const [ownerLastName, setOwnerLastName] = useState<string | null>(null);
  const [assetValue, setAssetValue] = useState<number | null>(null);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (
      renterFirstName &&
      renterLastName &&
      ownerFirstName &&
      ownerLastName &&
      assetValue
    ) {
      const contract: Contract = await api.post("/contracts", {
        renter: {
          first_name: renterFirstName,
          last_name: renterLastName,
        },
        owner: {
          first_name: ownerFirstName,
          last_name: ownerLastName,
        },
        asset: {
          value: assetValue,
        },
      });

      setRenterFirstName(null);
      setRenterLastName(null);
      setOwnerFirstName(null);
      setOwnerLastName(null);
      setAssetValue(null);

      onContractCreated(contract);
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <TextInput
        label="Renter first name"
        value={renterFirstName}
        onChange={setRenterFirstName}
      />
      <TextInput
        label="Owner first name"
        value={renterLastName}
        onChange={setRenterLastName}
      />
      <TextInput
        label="Renter last name"
        value={ownerFirstName}
        onChange={setOwnerFirstName}
      />
      <TextInput
        label="Owner last name"
        value={ownerLastName}
        onChange={setOwnerLastName}
      />
      <NumberInput
        label="Asset value"
        value={assetValue}
        onChange={setAssetValue}
      />
      <Button label="Create contract" />
    </form>
  );
};

export default CreateContract;

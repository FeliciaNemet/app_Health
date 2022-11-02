// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../libs/database";
import type { Contract } from "../../libs/types";

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Contract[] | Contract>
) => {
  if (request.method === "GET") {
    const contracts = await database("contracts").orderBy("created_at");
    response.status(200).json(contracts);
  } else if (request.method === "POST") {
    const { renter, owner, asset } = request.body;

    let error = false;
    if (!renter) {
      error = true;
      console.error("A renter is expected");
    }
    if (typeof renter !== "object") {
      error = true;
      console.error("The renter is expected to be an object");
    }
    if (typeof renter.first_name !== "string") {
      error = true;
      console.error("The renter's first name is expected to be a string");
    }
    if (typeof renter.last_name !== "string") {
      error = true;
      console.error("The renter's last name is expected to be a string");
    }
    if (!owner) {
      error = true;
      console.error("An owner is expected");
    }
    if (typeof owner !== "object") {
      error = true;
      console.error("The owner is expected to be an object");
    }
    if (typeof owner.first_name !== "string") {
      error = true;
      console.error("The owner's first name is expected to be a string");
    }
    if (typeof owner.last_name !== "string") {
      error = true;
      console.error("The owner's last name is expected to be a string");
    }
    if (!asset) {
      error = true;
      console.error("An asset is expected");
    }
    if (typeof asset !== "object") {
      error = true;
      console.error("The asset is expected to be an object");
    }
    if (typeof asset.value !== "number") {
      error = true;
      console.error("The asset's value is expected to be a number");
    }

    if (error) {
      return response.status(400).end();
    }

    const [contract] = await database("contracts").insert(
      {
        status: "DRAFT",
        renter,
        owner,
        asset,
      },
      ["*"]
    );

    response.status(200).json(contract);
  } else {
    response.status(405).end();
  }
};

export default handler;

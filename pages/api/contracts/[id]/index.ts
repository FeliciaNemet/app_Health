// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../libs/database";
import type { Contract } from "../../../../libs/types";

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Contract>
) => {
  if (request.method === "GET") {
    const [contract] = await database("contracts")
      .where({ id: request.query.id as string })
      .select("*");

    response.status(200).json(contract);
  } else if (request.method === "PUT") {
    const { status } = request.body;

    let error = false;
    if (!status) {
      error = true;
      console.error("A status is expected");
    }
    if (!["ISSUED"].includes(status)) {
      error = true;
      console.error("The status can only be updated to ISSED");
    }

    if (error) {
      return response.status(400).end();
    }

    const [contract] = await database("contracts")
      .where({ id: request.query.id as string })
      .update(
        {
          status,
        },
        ["*"]
      );

    response.status(200).json(contract);
  } else {
    response.status(405).end();
  }
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data, { Data } from "../../data";
interface ErrorMessage {
  message: string;
}
export default function handler(
  { query: { id } }: { query: { id: string } },
  res: NextApiResponse<Data | ErrorMessage>
) {
  const filters = data.filter((item) => item.id === parseInt(id));

  if (filters.length === 0) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(200).json(filters[0]);
  }
}

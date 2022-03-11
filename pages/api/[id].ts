// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data, { Data } from "../../data";

export default function handler(
  { query: { id } }: { query: { id: string } },
  res: NextApiResponse<Data>
) {
  const filters = data.filter((item) => item.id === parseInt(id));

  if (filters.length === 0) {
    res.status(404).json({ id: 0, name: "Not found", age: 0 });
  } else {
    res.status(200).json(filters[0]);
  }
}

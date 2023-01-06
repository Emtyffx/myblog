import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

type Data = {
  hash?: string;
  error?: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { algorithm, query } = req.body as { algorithm: string; query: string };

  if (!algorithm || !query.trim()) {
    return res.status(500).json({
      error: "Please define all",
    });
  }

  let hash: crypto.Hash;
  switch (algorithm) {
    case "md5":
      hash = crypto.createHash("md5");
      break;
    case "md4":
      hash = crypto.createHash("md4");
      break;
    case "sha1":
      hash = crypto.createHash("sha1");
      break;
    case "sha256":
      hash = crypto.createHash("sha256");
      break;
    case "sha512":
      hash = crypto.createHash("sha512");
      break;
    case "sha224":
      hash = crypto.createHash("sha224");
      break;
    case "sha384":
      hash = crypto.createHash("sha384");
      break;
    case "blake2b":
      hash = crypto.createHash("blake2b512");
      break;
    case "blake2s":
      hash = crypto.createHash("blake2s256");
      break;
    default: {
      return res.status(500).json({
        error: "Please enter correct algorithm",
      });
    }
  }

  const string_hash = hash.update(query).digest("hex");

  res.status(200).json({
    hash: string_hash,
  });
};
export default handler;

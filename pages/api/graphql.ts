import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import { publishVideo, seeVideo } from "./graphql/video/queries";

const graphql = async (req: NextApiRequest, res: NextApiResponse) => {
  const gqlClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT ?? "");

  gqlClient.setHeaders({
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}` ?? "",
    mode: "cors",
  });

  const variables = { slug: req.body.slug };

  await gqlClient.request(seeVideo, variables);
  await gqlClient.request(publishVideo, variables);

  res.status(201).json({ slug: req.body.slug });
};

export default graphql;

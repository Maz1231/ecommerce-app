import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skJdvTV8hrXZmMTkT9sNrMQMY13Z3erc55Biy74ReinaCABDGChDFXy4IFr9tLxRsm8ONZ1rxx0bKaCESKto1QW7iFKFVqEagLTNVjCtaIPbUAx3YPzkzg7nXBqqyiPQKG3H53WwyzEX9BaUsi5TSb915ZgTvxPkghv0Yt7NIAmW7ZaUK6yY"
})

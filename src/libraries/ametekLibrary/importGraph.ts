import { graph } from "@pnp/graph";
import "@pnp/graph/users";

export default class ImportGraph {
  public static returnGraph(): any {
    return graph;
  }
}

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/security";
import "@pnp/sp/security/web";
import "@pnp/sp/security/list";
import "@pnp/sp/security/item";
import "@pnp/sp/profiles";
import "@pnp/sp/site-users/web";
import "@pnp/sp/site-groups/web";
import "@pnp/sp/presets/all";
import { PermissionKind } from "@pnp/sp/security";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
import { BearerTokenFetchClient, isUrlAbsolute } from "@pnp/common";
export default class ImportPNPJS {
  public static returnPNPJS(): any {
    return sp;
  }
}
